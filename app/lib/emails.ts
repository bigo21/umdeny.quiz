import { Resend } from 'resend';
import { getProfiles, getQuestions, type Lang } from './translations';
import type { Answers } from './quizData';
import type { Profile } from './quizData';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM!;
const TEAM = process.env.EMAIL_TEAM!;
const CAL_URL = 'https://cal.com/vireel/umdeny-capital';

const NAVY = '#0A1628';
const GOLD = '#C9A84C';
const CREAM = '#FBF7EC';

function lookupLabel(
  questions: ReturnType<typeof getQuestions>,
  qId: string,
  answers: Answers,
): string {
  const q = questions.find(x => x.id === qId);
  if (!q) return '—';
  const v = answers[qId];
  if (!v) return '—';
  if (Array.isArray(v))
    return v.map(tag => q.options.find(o => o.tag === tag)?.label).filter(Boolean).join(', ') || '—';
  return q.options.find(o => o.tag === v)?.label ?? '—';
}

function layout(body: string): string {
  return (
    '<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
    `<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">` +
    `<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">` +
    `<tr><td align="center">` +
    `<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">` +
    `<tr><td style="background:${NAVY};padding:28px 40px;text-align:center;">` +
    `<p style="margin:0;color:${GOLD};font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">UMDENY CAPITAL</p>` +
    `<p style="margin:6px 0 0;color:#ffffff;font-size:13px;opacity:.7;">Quiz Patrimonial</p>` +
    `</td></tr>` +
    `<tr><td style="padding:40px 40px 0;">${body}</td></tr>` +
    `<tr><td style="padding:32px 40px;border-top:1px solid #eee;margin-top:32px;">` +
    `<p style="margin:0;font-size:11px;color:#888;text-align:center;line-height:1.6;">` +
    `Umdeny Capital &middot; Yaound&eacute;, Cameroon &middot; <a href="mailto:capital@umdeny.com" style="color:#888;">capital@umdeny.com</a><br>` +
    `Vous recevez cet email car vous avez compl&eacute;t&eacute; le quiz patrimonial Umdeny Capital.<br>` +
    `<a href="https://quiz.umdeny.com/politique-de-confidentialite" style="color:#C9A84C;">Politique de confidentialit&eacute;</a>` +
    `</p></td></tr>` +
    `</table></td></tr></table></body></html>`
  );
}

// ─── Email 1 — Prospect ────────────────────────────────────────────────────────

export async function sendProspectEmail(opts: {
  prenom: string;
  email: string;
  lang: Lang;
  profil: string;
  answers: Answers;
}) {
  const { prenom, email, lang, profil, answers } = opts;
  const profiles = getProfiles(lang);
  const questions = getQuestions(lang);
  const profile: Profile = profiles[profil];
  if (!profile) throw new Error(`Unknown profile: ${profil}`);

  const look = (qId: string) => lookupLabel(questions, qId, answers);
  const callDuration = profil === 'PROJET' ? '15' : '30';
  const isEn = lang === 'en';

  const assetsHtml = profile.assets.map(a =>
    `<tr style="border-bottom:1px solid #eee;">` +
    `<td style="padding:12px 16px;">` +
    `<p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${NAVY};">${a.name}</p>` +
    `<p style="margin:0;font-size:13px;color:#555;line-height:1.5;">${a.desc}</p>` +
    `<p style="margin:6px 0 0;font-size:11px;color:#999;">` +
    (isEn ? 'Risk' : 'Risque') + ` : ${a.risk} &nbsp;&middot;&nbsp; ` +
    `Horizon : ${a.horizon} &nbsp;&middot;&nbsp; Ticket : ${a.ticket}` +
    `</p></td></tr>`
  ).join('');

  const greeting = isEn ? 'Hello' : 'Bonjour';
  const intro = isEn
    ? 'Thank you for completing your wealth diagnostic. Here is your result.'
    : 'Merci d&rsquo;avoir compl&eacute;t&eacute; votre diagnostic patrimonial. Voici votre r&eacute;sultat.';
  const profileLabel = isEn ? 'Your profile' : 'Votre profil';
  const recommendLabel = isEn ? 'What we recommend exploring' : 'Ce que nous vous recommandons d&rsquo;explorer';
  const summaryLabel = isEn ? 'Your situation in brief' : 'Votre situation en r&eacute;sum&eacute;';
  const summaryText = isEn
    ? `Based on your answers, you are <strong>${look('Q3')}</strong>, aged <strong>${look('Q2')}</strong>, based in <strong>${look('Q1')}</strong>, with a <strong>${look('Q10')}</strong> horizon, available capital of <strong>${look('Q7')}</strong>, and a focus on <strong>${look('Q6')}</strong>. Your risk tolerance is <strong>${look('Q13')}</strong>.`
    : `D&rsquo;apr&egrave;s vos r&eacute;ponses, vous &ecirc;tes <strong>${look('Q3')}</strong>, &acirc;g&eacute;(e) de <strong>${look('Q2')}</strong>, bas&eacute;(e) en <strong>${look('Q1')}</strong>, avec un horizon de <strong>${look('Q10')}</strong>, un capital mobilisable de <strong>${look('Q7')}</strong>, et une priorit&eacute; sur <strong>${look('Q6')}</strong>. Votre tol&eacute;rance au risque est <strong>${look('Q13')}</strong>.`;
  const ctaTitle = isEn ? 'Ready to go further?' : 'Pr&ecirc;t(e) &agrave; aller plus loin&nbsp;?';
  const ctaBody = isEn
    ? 'Our team is available for a free, no-commitment advisory call.'
    : 'Notre &eacute;quipe est disponible pour un appel de conseil gratuit et sans engagement.';
  const ctaBtn = isEn ? 'Book your call' : 'R&eacute;server votre appel';
  const ctaMeta = isEn
    ? `${callDuration} minutes &middot; Free &middot; No commitment &middot; Available weekdays`
    : `${callDuration} minutes &middot; Gratuit &middot; Sans engagement &middot; Disponible en semaine`;
  const signoff = isEn
    ? 'See you soon,<br><strong>The Umdeny Capital team</strong>'
    : "À bientôt,<br><strong>L'équipe Umdeny Capital</strong>";

  const body =
    `<p style="margin:0 0 8px;font-size:16px;color:${NAVY};">${greeting} <strong>${prenom}</strong>,</p>` +
    `<p style="margin:0 0 32px;font-size:14px;color:#555;line-height:1.7;">${intro}</p>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${NAVY};border-radius:8px;margin-bottom:32px;">` +
    `<tr><td style="padding:28px 32px;">` +
    `<p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:600;">${profileLabel}</p>` +
    `<p style="margin:0 0 8px;font-size:24px;font-weight:700;color:#ffffff;">${profile.name}</p>` +
    `<p style="margin:0;font-size:14px;color:${GOLD};font-style:italic;">${profile.slogan}</p>` +
    `</td></tr></table>` +

    `<p style="margin:0 0 24px;font-size:14px;color:#333;line-height:1.8;">${profile.description}</p>` +

    `<p style="margin:0 0 16px;font-size:16px;font-weight:700;color:${NAVY};">${recommendLabel}</p>` +
    `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:6px;margin-bottom:32px;border-collapse:collapse;">` +
    assetsHtml +
    `</table>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:8px;margin-bottom:32px;">` +
    `<tr><td style="padding:24px 28px;">` +
    `<p style="margin:0 0 12px;font-size:13px;font-weight:700;color:${NAVY};text-transform:uppercase;letter-spacing:1px;">${summaryLabel}</p>` +
    `<p style="margin:0;font-size:14px;color:#333;line-height:1.8;">${summaryText}</p>` +
    `</td></tr></table>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${NAVY};border-radius:8px;margin-bottom:40px;">` +
    `<tr><td style="padding:28px 32px;text-align:center;">` +
    `<p style="margin:0 0 8px;font-size:15px;color:#ffffff;font-weight:600;">${ctaTitle}</p>` +
    `<p style="margin:0 0 20px;font-size:13px;color:#ccc;line-height:1.6;">${ctaBody}</p>` +
    `<a href="${CAL_URL}" style="display:inline-block;background:${GOLD};color:${NAVY};font-weight:700;font-size:14px;padding:14px 28px;border-radius:6px;text-decoration:none;">${ctaBtn}</a>` +
    `<p style="margin:16px 0 0;font-size:12px;color:#aaa;">${ctaMeta}</p>` +
    `</td></tr></table>` +

    `<p style="margin:0 0 40px;font-size:14px;color:#555;">${signoff}</p>`;

  const subject = isEn
    ? `Your Umdeny Capital wealth profile — ${prenom}`
    : `Votre profil patrimonial Umdeny Capital — ${prenom}`;

  return resend.emails.send({ from: FROM, to: email, subject, html: layout(body) });
}

// ─── Email 2 — Équipe ──────────────────────────────────────────────────────────

export async function sendTeamEmail(opts: {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string | null;
  pays?: string | null;
  profil: string;
  secondaire: string | null;
  answers: Answers;
  createdAt: string;
}) {
  const { prenom, nom, email, telephone, pays, profil, secondaire, answers, createdAt } = opts;
  const questions = getQuestions('fr');
  const look = (qId: string) => lookupLabel(questions, qId, answers);

  const qList: [string, string][] = [
    ['Q1', 'G&eacute;ographie'], ['Q2', 'Tranche d&rsquo;&acirc;ge'], ['Q3', 'Situation pro'], ['Q4', 'Secteur'],
    ['Q5', 'Exp&eacute;rience'], ['Q6', 'Objectif'], ['Q7', 'Capital'],
    ['Q8', "Mode d&rsquo;investissement"], ['Q9', 'Patrimoine existant'],
    ['Q10', 'Horizon'], ['Q11', 'Projet de vie'], ['Q12', 'R&eacute;action &agrave; la perte'],
    ['Q13', 'Niveau de risque'], ['Q14', 'Implication'],
    ['Q15', 'Affinit&eacute;s sectorielles'], ['Q16', 'Valeurs'], ['Q17', 'Frein principal'],
  ];

  const qRows = qList.map(([qId, label]) =>
    `<tr style="border-bottom:1px solid #eee;">` +
    `<td style="padding:8px 16px;font-size:12px;color:#888;width:40%;vertical-align:top;">${qId} — ${label}</td>` +
    `<td style="padding:8px 16px;font-size:13px;color:${NAVY};font-weight:600;">${look(qId)}</td>` +
    `</tr>`
  ).join('');

  const body =
    `<p style="margin:0 0 24px;font-size:18px;font-weight:700;color:${NAVY};">Nouveau prospect — ${prenom} ${nom}</p>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:8px;margin-bottom:28px;">` +
    `<tr><td style="padding:20px 24px;">` +
    `<p style="margin:0 0 10px;font-size:12px;font-weight:700;color:${NAVY};text-transform:uppercase;letter-spacing:1px;">Identit&eacute;</p>` +
    `<table width="100%" cellpadding="0" cellspacing="0">` +
    `<tr><td style="font-size:13px;color:#555;padding:3px 0;width:40%;">Pr&eacute;nom</td><td style="font-size:13px;font-weight:600;color:${NAVY};">${prenom}</td></tr>` +
    `<tr><td style="font-size:13px;color:#555;padding:3px 0;">Nom</td><td style="font-size:13px;font-weight:600;color:${NAVY};">${nom}</td></tr>` +
    `<tr><td style="font-size:13px;color:#555;padding:3px 0;">Email</td><td style="font-size:13px;font-weight:600;color:${NAVY};"><a href="mailto:${email}" style="color:${NAVY};">${email}</a></td></tr>` +
    `<tr><td style="font-size:13px;color:#555;padding:3px 0;">T&eacute;l&eacute;phone</td><td style="font-size:13px;font-weight:600;color:${NAVY};">${telephone || 'Non renseign&eacute;'}</td></tr>` +
    `<tr><td style="font-size:13px;color:#555;padding:3px 0;">Pays</td><td style="font-size:13px;font-weight:600;color:${NAVY};">${pays || '—'}</td></tr>` +
    `</table></td></tr></table>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${NAVY};border-radius:8px;margin-bottom:28px;">` +
    `<tr><td style="padding:20px 24px;">` +
    `<p style="margin:0 0 10px;font-size:12px;font-weight:700;color:${GOLD};text-transform:uppercase;letter-spacing:1px;">Profil attribu&eacute;</p>` +
    `<p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">${profil}</p>` +
    `<p style="margin:6px 0 0;font-size:13px;color:#aaa;">Profil secondaire : ${secondaire ?? 'Aucun'}</p>` +
    `</td></tr></table>` +

    `<p style="margin:0 0 12px;font-size:14px;font-weight:700;color:${NAVY};">R&eacute;ponses compl&egrave;tes</p>` +
    `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:6px;margin-bottom:28px;border-collapse:collapse;">` +
    qRows +
    `</table>` +

    `<table width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};border-radius:8px;margin-bottom:40px;">` +
    `<tr><td style="padding:16px 24px;">` +
    `<p style="margin:0;font-size:12px;color:#888;">Consentement contact : <strong>Oui</strong> &nbsp;&middot;&nbsp; RGPD : <strong>Oui</strong> &nbsp;&middot;&nbsp; Date : <strong>${createdAt}</strong></p>` +
    `</td></tr></table>`;

  return resend.emails.send({
    from: FROM,
    to: TEAM,
    subject: `Nouveau prospect — ${prenom} ${nom} — Profil ${profil}`,
    html: layout(body),
  });
}
