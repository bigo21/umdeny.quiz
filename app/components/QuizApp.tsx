'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  QUIZ_BLOCKS, QUIZ_QUESTIONS, QUIZ_PROFILES,
  computeProfile,
  type Answers,
} from '@/app/lib/quizData';

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconArrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function IconBack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2z" />
    </svg>
  );
}

// ─── Ornament ─────────────────────────────────────────────────────────────────

function NavyOrnament({ side, opacity = 0.05 }: { side: 'right' | 'left-bottom' | 'left-top'; opacity?: number }) {
  return (
    <div className={`navy-ornament ornament-${side}`} style={{ opacity }}>
      <Image src="/umdeny-pictogram.png" alt="" width={380} height={380} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ onRestart, showRestart }: { onRestart: () => void; showRestart: boolean }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          className="navbar-brand"
          href="#"
          onClick={(e) => { e.preventDefault(); if (showRestart) onRestart(); }}
        >
          <Image src="/umdeny-logo-dark.png" alt="Umdeny Holdings" width={160} height={34} style={{ height: '34px', width: 'auto' }} />
        </a>
        <div className="navbar-actions">
          <button className="lang-switch" aria-label="Changer de langue">
            <span className="lang-active">FR</span>
            <span className="lang-sep">·</span>
            <span className="lang-inactive">EN</span>
          </button>
          <a className="btn btn-gold btn-sm" href="https://cal.com/vireel/umdeny-capital" target="_blank" rel="noopener noreferrer">
            <IconCalendar className="icon-sm" />
            <span>Prendre RDV</span>
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ currentIndex }: { currentIndex: number }) {
  let cumulative = 0;
  return (
    <div className="progress-track">
      {QUIZ_BLOCKS.map((block) => {
        const qsInBlock = QUIZ_QUESTIONS.filter(q => q.block === block.id);
        const start = cumulative;
        const end = cumulative + qsInBlock.length;
        cumulative = end;
        const filled = Math.min(Math.max(currentIndex + 1 - start, 0), qsInBlock.length);
        const pct = (filled / qsInBlock.length) * 100;
        const active = currentIndex + 1 > start && currentIndex < end;
        return (
          <div key={block.id} className={`progress-segment${active ? ' active' : ''}`}>
            <div className="progress-segment-bar">
              <div className="progress-segment-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Option Card ──────────────────────────────────────────────────────────────

function OptionCard({
  label, selected, onClick, multi, index,
}: {
  label: string; selected: boolean; onClick: () => void; multi: boolean; index: number;
}) {
  return (
    <button
      type="button"
      className={`option-card${selected ? ' selected' : ''}`}
      onClick={onClick}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <span className={`option-indicator${multi ? ' square' : ' circle'}`}>
        {selected && <IconCheck className="icon-xs" />}
      </span>
      <span className="option-label">{label}</span>
    </button>
  );
}

// ─── Welcome Screen ───────────────────────────────────────────────────────────

function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className="welcome-screen">
      <NavyOrnament side="right" opacity={0.06} />
      <NavyOrnament side="left-bottom" opacity={0.04} />
      <div className="welcome-inner">
        {showBanner && (
          <div className="diaspora-banner">
            <IconGlobe className="icon-md shrink-0" />
            <span>
              <strong>Vous êtes en dehors du Cameroun ?</strong> Ce quiz est conçu pour vous aussi.
              Nos recommandations s&apos;adaptent à votre situation géographique.
            </span>
            <button className="banner-close" onClick={() => setShowBanner(false)} aria-label="Fermer">×</button>
          </div>
        )}
        <div className="welcome-content">
          <div className="welcome-eyebrow">
            <span className="welcome-pip" />
            DIAGNOSTIC PATRIMONIAL · 5 MINUTES
          </div>
          <h1 className="welcome-title">
            Quel est votre <em>profil patrimonial</em> ?
          </h1>
          <p className="welcome-subtitle">
            Répondez à 16 questions en 5 minutes et recevez instantanément une analyse personnalisée
            de votre situation, avec les stratégies et classes d&apos;actifs les mieux adaptées à votre
            profil — gratuitement, par email.
          </p>
          <button className="btn btn-gold btn-lg welcome-cta" onClick={onStart}>
            <span>Démarrer mon diagnostic gratuit</span>
            <IconArrow className="icon-lg" />
          </button>
          <div className="welcome-reassurance">
            <span><IconCheck className="icon-xs" /> Gratuit et sans engagement</span>
            <span><IconCheck className="icon-xs" /> Résultat envoyé par email</span>
            <span><IconCheck className="icon-xs" /> Données confidentielles</span>
          </div>
        </div>
        <div className="welcome-meta">
          <div className="meta-item">
            <div className="meta-num">16</div>
            <div className="meta-label">Questions ciblées</div>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <div className="meta-num">5<span className="meta-unit">min</span></div>
            <div className="meta-label">Pour compléter</div>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <div className="meta-num">8</div>
            <div className="meta-label">Profils possibles</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({
  index, answers, setAnswer, onNext, onBack, transitionKey,
}: {
  index: number;
  answers: Answers;
  setAnswer: (id: string, value: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  transitionKey: number;
}) {
  const q = QUIZ_QUESTIONS[index];
  const block = QUIZ_BLOCKS.find(b => b.id === q.block)!;
  const value = answers[q.id];
  const multi = !!q.multi;

  const handleClick = (tag: string) => {
    if (multi) {
      const arr = Array.isArray(value) ? [...value] : [];
      const idx = arr.indexOf(tag);
      if (idx >= 0) arr.splice(idx, 1);
      else if (arr.length < (q.max ?? 3)) arr.push(tag);
      setAnswer(q.id, arr);
    } else {
      setAnswer(q.id, tag);
    }
  };

  const isSelected = (tag: string) => {
    if (multi) return Array.isArray(value) && value.includes(tag);
    return value === tag;
  };

  const canContinue = multi ? Array.isArray(value) && value.length > 0 : !!value;
  const multiCount = multi && Array.isArray(value) ? value.length : 0;

  return (
    <div className="question-screen">
      <div className="question-topbar">
        <button className="quiz-back" onClick={onBack} disabled={index === 0}>
          <IconBack className="icon-sm" />
          <span>Précédent</span>
        </button>
        <div className="block-tag">
          <span className="block-id">Bloc {q.block}</span>
          <span className="block-title">{block.subtitle}</span>
        </div>
        <div className="question-counter">
          <span className="counter-current">{String(index + 1).padStart(2, '0')}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{QUIZ_QUESTIONS.length}</span>
        </div>
      </div>

      <ProgressBar currentIndex={index} />

      <div className="question-body" key={transitionKey}>
        <div className="question-meta">
          <span className="question-meta-id">QUESTION {index + 1} / {QUIZ_QUESTIONS.length}</span>
          {multi && (
            <span className="question-meta-multi">
              <IconSparkle className="icon-xs" />
              {q.hint ?? "Choix multiples"} · {multiCount}/{q.max ?? 3}
            </span>
          )}
        </div>
        <h2 className="question-title">{q.question}</h2>
        <div className={`option-list${q.options.length > 7 ? ' option-list-dense' : ''}`}>
          {q.options.map((opt, i) => (
            <OptionCard
              key={opt.tag}
              label={opt.label}
              selected={isSelected(opt.tag)}
              onClick={() => handleClick(opt.tag)}
              multi={multi}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="question-footer">
        <button
          className={`btn btn-gold btn-lg next-btn${canContinue ? '' : ' disabled'}`}
          onClick={() => canContinue && onNext()}
          disabled={!canContinue}
        >
          <span>{index === QUIZ_QUESTIONS.length - 1 ? "Voir mon profil" : "Question suivante"}</span>
          <IconArrow className="icon-md" />
        </button>
      </div>
    </div>
  );
}

// ─── Capture Screen ───────────────────────────────────────────────────────────

type FormData = {
  prenom?: string; nom?: string; email?: string;
  tel?: string; pays?: string;
  consentContact?: boolean; consentRGPD?: boolean;
};

function Field({
  label, required, type = 'text', value, onChange, placeholder, hint,
}: {
  label: string; required?: boolean; type?: string;
  value: string; onChange: (v: string) => void;
  placeholder?: string; hint?: string;
}) {
  return (
    <div className="form-field">
      <label className="form-label">
        {label} {required && <span className="form-required">*</span>}
        {hint && <span className="form-hint">— {hint}</span>}
      </label>
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function CaptureScreen({
  form, setForm, onSubmit, onBack,
}: {
  form: FormData;
  setForm: (f: FormData) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  const update = (k: keyof FormData, v: string | boolean) => setForm({ ...form, [k]: v });
  const valid =
    form.prenom?.trim() &&
    form.nom?.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email ?? '') &&
    form.consentContact &&
    form.consentRGPD;

  const countries = [
    "Cameroun", "Côte d'Ivoire", "Sénégal", "France", "Belgique", "Canada",
    "États-Unis", "Royaume-Uni", "Allemagne", "Maroc", "Gabon", "RDC", "Autre",
  ];

  return (
    <div className="capture-screen">
      <NavyOrnament side="right" opacity={0.08} />
      <div className="capture-inner">
        <button className="quiz-back capture-back" onClick={onBack}>
          <IconBack className="icon-sm" />
          <span>Modifier mes réponses</span>
        </button>
        <div className="capture-eyebrow">
          <IconSparkle className="icon-sm" />
          DERNIÈRE ÉTAPE
        </div>
        <h2 className="capture-title">
          Votre profil est prêt.<br />
          <em>Entrez vos coordonnées pour le recevoir.</em>
        </h2>
        <p className="capture-subtitle">
          Votre résultat détaillé vous sera envoyé gratuitement par email.<br />
          Nous ne partageons jamais vos données.
        </p>

        <form
          className="capture-form"
          onSubmit={(e) => { e.preventDefault(); if (valid) onSubmit(); }}
        >
          <div className="form-row form-row-2">
            <Field label="Prénom" required value={form.prenom ?? ''} onChange={v => update('prenom', v)} placeholder="ex. Aïssatou" />
            <Field label="Nom" required value={form.nom ?? ''} onChange={v => update('nom', v)} placeholder="ex. Mbengue" />
          </div>
          <Field label="Email" required type="email" value={form.email ?? ''} onChange={v => update('email', v)} placeholder="vous@exemple.com" />
          <Field label="Téléphone / WhatsApp" hint="Pour être recontacté plus facilement" value={form.tel ?? ''} onChange={v => update('tel', v)} placeholder="+237 6XX XX XX XX" />
          <div className="form-field">
            <label className="form-label">Pays de résidence</label>
            <select className="form-select" value={form.pays ?? 'Cameroun'} onChange={e => update('pays', e.target.value)}>
              {countries.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="consent-block">
            <label className="consent-row">
              <input
                type="checkbox"
                checked={!!form.consentContact}
                onChange={e => update('consentContact', e.target.checked)}
              />
              <span>J&apos;accepte d&apos;être recontacté par l&apos;équipe Umdeny Capital pour un accompagnement personnalisé.</span>
            </label>
            <label className="consent-row">
              <input
                type="checkbox"
                checked={!!form.consentRGPD}
                onChange={e => update('consentRGPD', e.target.checked)}
              />
              <span>
                J&apos;accepte la{' '}
                <a href="#" onClick={e => e.preventDefault()}>politique de confidentialité</a>
                {' '}d&apos;Umdeny Capital.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className={`btn btn-gold btn-lg capture-submit${valid ? '' : ' disabled'}`}
            disabled={!valid}
          >
            <span>Voir mon profil patrimonial</span>
            <IconArrow className="icon-md" />
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Result Screen ────────────────────────────────────────────────────────────

function riskClass(risk: string): string {
  const s = (risk ?? '').toLowerCase();
  if (s.includes('faible')) return 'risk-low';
  if (s.includes('modéré')) return 'risk-mid';
  if (s.includes('élevé')) return 'risk-high';
  return 'risk-none';
}

function ResultScreen({
  profileId, answers, form, onRestart,
}: {
  profileId: string;
  answers: Answers;
  form: FormData;
  onRestart: () => void;
}) {
  const profile = QUIZ_PROFILES[profileId];
  if (!profile) return null;

  const lookup = (qId: string): string | null => {
    const q = QUIZ_QUESTIONS.find(x => x.id === qId);
    if (!q) return null;
    const v = answers[qId];
    if (!v) return null;
    if (Array.isArray(v)) return v.map(t => q.options.find(o => o.tag === t)?.label).filter(Boolean).join(', ');
    return q.options.find(o => o.tag === v)?.label ?? null;
  };

  const summary = {
    pro: lookup('Q2'), geo: lookup('Q1'), horizon: lookup('Q9'),
    capital: lookup('Q6'), objectif: lookup('Q5'), risque: lookup('Q12'),
  };

  return (
    <div className="result-screen">
      <NavyOrnament side="right" opacity={0.05} />
      <NavyOrnament side="left-top" opacity={0.04} />

      {/* Hero */}
      <section className="result-hero">
        <div className="result-hero-inner">
          <div className="result-eyebrow">
            <IconSparkle className="icon-sm" />
            VOTRE PROFIL PATRIMONIAL
            {form?.prenom && <span className="result-eyebrow-name">· {form.prenom.toUpperCase()}</span>}
          </div>
          <h1 className="result-name">{profile.name}</h1>
          <p className="result-slogan">{profile.slogan}</p>
          <div className="result-badge-strip">
            <div className="badge-pill"><span className="badge-pip" /> Profil défini</div>
            <div className="badge-pill"><IconShield className="icon-sm" /> Recommandations sur-mesure</div>
            <div className="badge-pill"><IconMail className="icon-sm" /> Envoyé à {form?.email ?? 'votre email'}</div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="result-section result-desc">
        <div className="result-section-inner narrow">
          <p>{profile.description}</p>
        </div>
      </section>

      {/* Summary */}
      <section className="result-section result-summary-section">
        <div className="result-section-inner">
          <div className="section-label">Votre situation en résumé</div>
          <p className="summary-prose">
            D&apos;après vos réponses : vous êtes{' '}
            <strong>{summary.pro ?? '—'}</strong>, basé(e){' '}
            <strong>{summary.geo ?? '—'}</strong>, avec un horizon de{' '}
            <strong>{summary.horizon ?? '—'}</strong>, un capital mobilisable de{' '}
            <strong>{summary.capital ?? '—'}</strong>, et une priorité sur{' '}
            <strong>{summary.objectif ?? '—'}</strong>. Votre tolérance au risque est{' '}
            <strong>{summary.risque ?? '—'}</strong>.
          </p>
        </div>
      </section>

      {/* Recommendations */}
      <section className="result-section result-recos">
        <div className="result-section-inner">
          <div className="section-label">Ce que nous vous recommandons d&apos;explorer</div>
          <h2 className="recos-title">Vos classes d&apos;actifs prioritaires</h2>
          <div className="reco-grid">
            {profile.assets.map((asset, i) => (
              <article key={i} className="reco-card">
                <div className="reco-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="reco-name">{asset.name}</h3>
                <p className="reco-desc">{asset.desc}</p>
                <div className="reco-meta">
                  <div className="reco-meta-row">
                    <span className="reco-meta-label">Risque</span>
                    <span className={`risk-badge ${riskClass(asset.risk)}`}>{asset.risk}</span>
                  </div>
                  <div className="reco-meta-row">
                    <span className="reco-meta-label">Horizon</span>
                    <span className="reco-meta-val">{asset.horizon}</span>
                  </div>
                  <div className="reco-meta-row">
                    <span className="reco-meta-label">Ticket</span>
                    <span className="reco-meta-val">{asset.ticket}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="result-section result-trust">
        <div className="result-section-inner narrow">
          <div className="trust-grid">
            <div>
              <div className="section-label gold">Pourquoi nous</div>
              <h2 className="trust-title">Pourquoi nous faire confiance pour vous accompagner ?</h2>
            </div>
            <div>
              <p>
                <strong>Umdeny Capital</strong> est une structure d&apos;accompagnement patrimonial et
                d&apos;investissement basée à Yaoundé, active au Cameroun et auprès de la diaspora africaine.
                Nous travaillons avec des investisseurs particuliers et des entrepreneurs pour structurer,
                diversifier et faire fructifier leur patrimoine — avec rigueur, transparence et une
                connaissance terrain du marché africain.
              </p>
              <p>
                Chaque client est accompagné individuellement.{' '}
                <em>Nous ne vendons pas des produits — nous construisons des stratégies.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="result-section result-cta-section">
        <div className="result-section-inner narrow">
          <div className="cta-card">
            <div className="cta-card-bg" />
            <div className="cta-card-content">
              <IconCalendar className="icon-xl" />
              <h2 className="cta-card-title">{profile.cta ?? "Prendre un appel avec notre équipe"}</h2>
              <p className="cta-card-sub">{profile.ctaShort ?? "Appel de 30 minutes · Gratuit · Sans engagement · Disponible en semaine"}</p>
              <a
                className="btn btn-gold btn-lg cta-card-btn"
                href="https://cal.com/vireel/umdeny-capital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Réserver mon créneau</span>
                <IconArrow className="icon-md" />
              </a>
            </div>
          </div>
          <button className="restart-link" onClick={onRestart}>← Refaire le quiz depuis le début</button>
        </div>
      </section>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'umdeny_quiz_state_v1';

type Stage = 'welcome' | 'quiz' | 'capture' | 'result';

type AppState = {
  stage: Stage;
  index: number;
  answers: Answers;
  form: FormData;
  profileId: string | null;
};

const initialState: AppState = {
  stage: 'welcome', index: 0, answers: {}, form: { pays: 'Cameroun' }, profileId: null,
};

export default function QuizApp() {
  const [state, setState] = useState<AppState>(initialState);
  const [transitionKey, setTransitionKey] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state, hydrated]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.stage, state.index]);

  const setAnswer = (qId: string, value: string | string[]) =>
    setState(s => ({ ...s, answers: { ...s.answers, [qId]: value } }));

  const start = () => {
    setState(s => ({ ...s, stage: 'quiz', index: 0 }));
    setTransitionKey(k => k + 1);
  };

  const next = () => {
    if (state.index < QUIZ_QUESTIONS.length - 1) {
      setState(s => ({ ...s, index: s.index + 1 }));
      setTransitionKey(k => k + 1);
    } else {
      setState(s => ({ ...s, stage: 'capture' }));
    }
  };

  const back = () => {
    if (state.stage === 'capture') { setState(s => ({ ...s, stage: 'quiz' })); return; }
    if (state.index > 0) {
      setState(s => ({ ...s, index: s.index - 1 }));
      setTransitionKey(k => k + 1);
    }
  };

  const submit = () => {
    const pid = computeProfile(state.answers);
    setState(s => ({ ...s, profileId: pid, stage: 'result' }));
  };

  const restart = () => {
    setState(initialState);
    setTransitionKey(k => k + 1);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  if (!hydrated) return null;

  const { stage, index, answers, form, profileId } = state;

  return (
    <div className={`app stage-${stage}`}>
      <Navbar onRestart={restart} showRestart={stage !== 'welcome'} />
      <main className="app-main">
        {stage === 'welcome' && <WelcomeScreen onStart={start} />}
        {stage === 'quiz' && (
          <QuestionScreen
            index={index}
            answers={answers}
            setAnswer={setAnswer}
            onNext={next}
            onBack={back}
            transitionKey={transitionKey}
          />
        )}
        {stage === 'capture' && (
          <CaptureScreen
            form={form}
            setForm={(f) => setState(s => ({ ...s, form: f }))}
            onSubmit={submit}
            onBack={back}
          />
        )}
        {stage === 'result' && profileId && (
          <ResultScreen profileId={profileId} answers={answers} form={form} onRestart={restart} />
        )}
      </main>
      <footer className="app-footer">
        <div className="footer-inner">
          <span>© 2025 Umdeny Holdings · Yaoundé, Cameroun</span>
          <span className="footer-sep">·</span>
          <a href="#" onClick={e => e.preventDefault()}>Politique de confidentialité</a>
          <span className="footer-sep">·</span>
          <a href="mailto:direction@umdeny.com">direction@umdeny.com</a>
        </div>
      </footer>
    </div>
  );
}
