'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Answers } from '@/app/lib/quizData';
import {
  ui, getBlocks, getQuestions,
  type Lang,
} from '@/app/lib/translations';

// ─── Language context ─────────────────────────────────────────────────────────

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<LangCtx>({ lang: 'fr', setLang: () => {} });
const useLang = () => useContext(LangContext);
const useT = () => ui[useLang().lang];

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
  const { lang, setLang } = useLang();
  const t = useT();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); if (showRestart) onRestart(); }}>
          <Image src="/umdeny-logo-dark.png" alt="Umdeny Capital" width={160} height={34} style={{ height: '34px', width: 'auto' }} />
        </a>
        <div className="navbar-actions">
          <button
            className="lang-switch"
            aria-label="Switch language"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          >
            <span className={lang === 'fr' ? 'lang-active' : 'lang-inactive'}>FR</span>
            <span className="lang-sep">·</span>
            <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
          </button>
          <a className="btn btn-gold btn-sm" href="https://cal.com/vireel/umdeny-capital" target="_blank" rel="noopener noreferrer">
            <IconCalendar className="icon-sm" />
            <span>{t.nav.rdv}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ currentIndex }: { currentIndex: number }) {
  const { lang } = useLang();
  const blocks = getBlocks(lang);
  const questions = getQuestions(lang);
  let cumulative = 0;
  return (
    <div className="progress-track">
      {blocks.map((block) => {
        const count = questions.filter(q => q.block === block.id).length;
        const start = cumulative;
        const end = cumulative + count;
        cumulative = end;
        const filled = Math.min(Math.max(currentIndex + 1 - start, 0), count);
        const pct = (filled / count) * 100;
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

function OptionCard({ label, selected, onClick, multi, index }: {
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
  const t = useT();
  const w = t.welcome;
  return (
    <div className="welcome-screen">
      <NavyOrnament side="right" opacity={0.06} />
      <NavyOrnament side="left-bottom" opacity={0.04} />
      <div className="welcome-inner">
        {showBanner && (
          <div className="diaspora-banner">
            <IconGlobe className="icon-md shrink-0" />
            <span className="text-center">
              {w.bannerText}
              <strong className="ms-1">{w.bannerTextStrong}</strong>
            </span>
            <button
              className="banner-close"
              onClick={() => setShowBanner(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
        <div className="welcome-content">
          <div className="welcome-eyebrow">
            <span className="welcome-pip" />
            {w.eyebrow}
          </div>
          <h1 className="welcome-title">
            {w.titlePlain} <em className="pe-3">{w.titleEm}</em>
            {w.titleEnd}
          </h1>
          <p className="welcome-subtitle">{w.subtitle}</p>
          <button className="btn btn-gold btn-lg welcome-cta" onClick={onStart}>
            <span>{w.cta}</span>
            <IconArrow className="icon-lg" />
          </button>
          <div className="welcome-reassurance">
            <span>
              <IconCheck className="icon-xs" /> {w.r1}
            </span>
            <span>
              <IconCheck className="icon-xs" /> {w.r2}
            </span>
            <span>
              <IconCheck className="icon-xs" /> {w.r3}
            </span>
          </div>
        </div>
        <div className="welcome-meta">
          <div className="meta-item">
            <div className="meta-num">16</div>
            <div className="meta-label">{w.meta1Label}</div>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <div className="meta-num">
              5<span className="meta-unit">min</span>
            </div>
            <div className="meta-label">{w.meta2Label}</div>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <div className="meta-num">100<span className="meta-unit">%</span></div>
            <div className="meta-label">{w.meta3Label}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({ index, answers, setAnswer, onNext, onBack, transitionKey }: {
  index: number;
  answers: Answers;
  setAnswer: (id: string, value: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  transitionKey: number;
}) {
  const { lang } = useLang();
  const t = useT();
  const questions = getQuestions(lang);
  const blocks = getBlocks(lang);
  const q = questions[index];
  const block = blocks.find(b => b.id === q.block)!;
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

  const isSelected = (tag: string) => multi
    ? Array.isArray(value) && value.includes(tag)
    : value === tag;

  const canContinue = multi ? Array.isArray(value) && value.length > 0 : !!value;
  const multiCount = multi && Array.isArray(value) ? value.length : 0;

  return (
    <div className="question-screen">
      <div className="question-topbar">
        <button className="quiz-back" onClick={onBack} disabled={index === 0}>
          <IconBack className="icon-sm" />
          <span>{t.quiz.back}</span>
        </button>
        <div className="block-tag">
          <span className="block-id">{t.quiz.bloc} {q.block}</span>
          <span className="block-title">{block.subtitle}</span>
        </div>
        <div className="question-counter">
          <span className="counter-current">{String(index + 1).padStart(2, '0')}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{questions.length}</span>
        </div>
      </div>

      <ProgressBar currentIndex={index} />

      <div className="question-body" key={transitionKey}>
        <div className="question-meta">
          <span className="question-meta-id">{t.quiz.questionOf(index + 1, questions.length)}</span>
          {multi && (
            <span className="question-meta-multi">
              <IconSparkle className="icon-xs" />
              {q.hint ?? t.quiz.multiHint} · {multiCount}/{q.max ?? 3}
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
          <span>{index === questions.length - 1 ? t.quiz.seeProfile : t.quiz.next}</span>
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

function Field({ label, required, type = 'text', value, onChange, placeholder, hint }: {
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

function CaptureScreen({ form, setForm, onSubmit, onBack, submitting }: {
  form: FormData;
  setForm: (f: FormData) => void;
  onSubmit: () => void;
  onBack: () => void;
  submitting: boolean;
}) {
  const t = useT();
  const c = t.capture;
  const update = (k: keyof FormData, v: string | boolean) => setForm({ ...form, [k]: v });
  const valid =
    form.prenom?.trim() &&
    form.nom?.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email ?? '') &&
    form.consentContact &&
    form.consentRGPD;

  return (
    <div className="capture-screen">
      <NavyOrnament side="right" opacity={0.08} />
      <div className="capture-inner">
        <button className="quiz-back capture-back" onClick={onBack}>
          <IconBack className="icon-sm" />
          <span>{c.back}</span>
        </button>
        <div className="capture-eyebrow">
          <IconSparkle className="icon-sm" />
          {c.eyebrow}
        </div>
        <h2 className="capture-title">
          {c.title}<br />
          <em>{c.titleEm}</em>
        </h2>
        <p className="capture-subtitle">
          {c.subtitle.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        <form className="capture-form" onSubmit={(e) => { e.preventDefault(); if (valid) onSubmit(); }}>
          <div className="form-row form-row-2">
            <Field label={c.firstName} required value={form.prenom ?? ''} onChange={v => update('prenom', v)} placeholder={c.placeholderFirstName} />
            <Field label={c.lastName} required value={form.nom ?? ''} onChange={v => update('nom', v)} placeholder={c.placeholderLastName} />
          </div>
          <Field label={c.email} required type="email" value={form.email ?? ''} onChange={v => update('email', v)} placeholder={c.placeholderEmail} />
          <Field label={c.phone} hint={c.phoneHint} value={form.tel ?? ''} onChange={v => update('tel', v)} placeholder={c.placeholderPhone} />
          <div className="form-field">
            <label className="form-label">{c.country}</label>
            <select className="form-select" value={form.pays ?? c.countries[0]} onChange={e => update('pays', e.target.value)}>
              {c.countries.map(country => <option key={country}>{country}</option>)}
            </select>
          </div>

          <div className="consent-block">
            <label className="consent-row">
              <input type="checkbox" checked={!!form.consentContact} onChange={e => update('consentContact', e.target.checked)} />
              <span>{c.consentContact}</span>
            </label>
            <label className="consent-row">
              <input type="checkbox" checked={!!form.consentRGPD} onChange={e => update('consentRGPD', e.target.checked)} />
              <span>
                {c.consentRgpd}{' '}
                <Link href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">{c.privacyLink}</Link>
                {' '}{c.consentRgpdEnd}
              </span>
            </label>
          </div>

          <button type="submit" className={`btn btn-gold btn-lg capture-submit${valid && !submitting ? '' : ' disabled'}`} disabled={!valid || submitting}>
            <span>{submitting ? c.submitting : c.submit}</span>
            <IconArrow className="icon-md" />
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Confirmation Screen ──────────────────────────────────────────────────────

function ConfirmationScreen({ email, prenom, onRestart }: {
  email: string;
  prenom?: string;
  onRestart: () => void;
}) {
  const t = useT();
  const c = t.confirmation;
  return (
    <div className="result-screen">
      <NavyOrnament side="right" opacity={0.05} />
      <NavyOrnament side="left-top" opacity={0.04} />

      <section className="result-hero">
        <div className="result-hero-inner">
          <div className="result-eyebrow">
            <IconCheck className="icon-sm" />
            {c.eyebrow}
            {prenom && <span className="result-eyebrow-name">· {prenom.toUpperCase()}</span>}
          </div>
          <h1 className="result-name">{c.title}</h1>
          <p className="result-slogan">{c.titleEm}</p>
          <div className="result-badge-strip">
            <div className="badge-pill"><IconMail className="icon-sm" /> {c.sentTo} {email}</div>
          </div>
        </div>
      </section>

      <section className="result-section result-desc">
        <div className="result-section-inner narrow">
          <p>{c.body}</p>
          <p className="muted">{c.spam}</p>
        </div>
      </section>

      <section className="result-section result-cta-section">
        <div className="result-section-inner narrow">
          <div className="cta-card">
            <div className="cta-card-bg" />
            <div className="cta-card-content">
              <IconCalendar className="icon-xl" />
              <h2 className="cta-card-title">{c.ctaTitle}</h2>
              <p className="cta-card-sub">{c.ctaSub}</p>
              <a className="btn btn-gold btn-lg cta-card-btn" href="https://cal.com/vireel/umdeny-capital" target="_blank" rel="noopener noreferrer">
                <span>{c.ctaBtn}</span>
                <IconArrow className="icon-md" />
              </a>
            </div>
          </div>
          <button className="restart-link" onClick={onRestart}>{c.restart}</button>
        </div>
      </section>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'umdeny_quiz_state_v1';
const LANG_KEY = 'umdeny_lang';

type Stage = 'welcome' | 'quiz' | 'capture' | 'result';

type AppState = {
  stage: Stage;
  index: number;
  answers: Answers;
  form: FormData;
};

const initialState: AppState = {
  stage: 'welcome', index: 0, answers: {}, form: {},
};

export default function QuizApp() {
  const [state, setState] = useState<AppState>(initialState);
  const [lang, setLangState] = useState<Lang>('fr');
  const [transitionKey, setTransitionKey] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY) as Lang | null;
      if (savedLang === 'fr' || savedLang === 'en') setLangState(savedLang);
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(LANG_KEY, l); } catch {}
  };

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }, [state, hydrated]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.stage, state.index]);

  const setAnswer = (qId: string, value: string | string[]) =>
    setState(s => ({ ...s, answers: { ...s.answers, [qId]: value } }));

  const start = () => { setState(s => ({ ...s, stage: 'quiz', index: 0 })); setTransitionKey(k => k + 1); };

  const next = () => {
    const total = getQuestions(lang).length;
    if (state.index < total - 1) {
      setState(s => ({ ...s, index: s.index + 1 }));
      setTransitionKey(k => k + 1);
    } else {
      setState(s => ({ ...s, stage: 'capture' }));
    }
  };

  const back = () => {
    if (state.stage === 'capture') { setState(s => ({ ...s, stage: 'quiz' })); return; }
    if (state.index > 0) { setState(s => ({ ...s, index: s.index - 1 })); setTransitionKey(k => k + 1); }
  };

  const submit = async () => {
    setSubmitting(true);
    const { prenom, nom, email, tel, pays, consentContact, consentRGPD } = state.form;
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom, nom, email,
          telephone: tel,
          pays,
          lang,
          consentement_contact: consentContact ?? false,
          consentement_rgpd: consentRGPD ?? false,
          answers: state.answers,
        }),
      });
    } finally {
      setState(s => ({ ...s, stage: 'result' }));
      setSubmitting(false);
    }
  };

  const restart = () => {
    setState(initialState);
    setTransitionKey(k => k + 1);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  if (!hydrated) return null;

  const { stage, index, answers, form } = state;
  const t = ui[lang];

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className={`app stage-${stage}`}>
        <Navbar onRestart={restart} showRestart={stage !== 'welcome'} />
        <main className="app-main">
          {stage === 'welcome' && <WelcomeScreen onStart={start} />}
          {stage === 'quiz' && (
            <QuestionScreen
              index={index} answers={answers} setAnswer={setAnswer}
              onNext={next} onBack={back} transitionKey={transitionKey}
            />
          )}
          {stage === 'capture' && (
            <CaptureScreen
              form={form}
              setForm={(f) => setState(s => ({ ...s, form: f }))}
              onSubmit={submit}
              onBack={back}
              submitting={submitting}
            />
          )}
          {stage === 'result' && (
            <ConfirmationScreen email={form.email ?? ''} prenom={form.prenom} onRestart={restart} />
          )}
        </main>
        <footer className="app-footer">
          <div className="footer-inner">
            <span>{t.footer.copy}</span>
            <span className="footer-sep">·</span>
            <Link href="/politique-de-confidentialite">{t.footer.privacy}</Link>
            <span className="footer-sep">·</span>
            <a href="mailto:direction@umdeny.com">direction@umdeny.com</a>
          </div>
        </footer>
      </div>
    </LangContext.Provider>
  );
}
