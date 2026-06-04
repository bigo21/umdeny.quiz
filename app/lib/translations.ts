import type { Block, Question, Profile } from './quizData';

export type Lang = 'fr' | 'en';

// ─── UI strings ───────────────────────────────────────────────────────────────

export const ui = {
  fr: {
    nav: {
      rdv: "Prendre RDV",
    },
    welcome: {
      bannerText: "Que vous soyez en Afrique ou dans la diaspora, ce quiz est conçu pour vous.",
      bannerTextStrong: "Nos recommandations s'adaptent à votre situation géographique.",
      eyebrow: "DIAGNOSTIC PATRIMONIAL · 5 MINUTES",
      titlePlain: "Quel est votre",
      titleEm: "profil patrimonial",
      titleEnd: "?",
      subtitle:
        "Répondez à 17 questions en 5 minutes et recevez instantanément une analyse personnalisée de votre situation, avec les stratégies et classes d'actifs les mieux adaptées à votre profil — gratuitement, par email.",
      cta: "Démarrer mon diagnostic gratuit",
      r1: "Gratuit et sans engagement",
      r2: "Résultat envoyé par email",
      r3: "Données confidentielles",
      meta1Label: "Questions ciblées",
      meta2Label: "Pour compléter",
      meta3Label: "Confidentiel",
    },
    quiz: {
      back: "Précédent",
      bloc: "Bloc",
      questionOf: (n: number, total: number) => `QUESTION ${n} / ${total}`,
      multiHint: "Choix multiples",
      next: "Question suivante",
      seeProfile: "Voir mon profil",
    },
    capture: {
      back: "Modifier mes réponses",
      eyebrow: "DERNIÈRE ÉTAPE",
      title: "Votre profil est prêt.",
      titleEm: "Entrez vos coordonnées pour le recevoir.",
      subtitle:
        "Votre résultat détaillé vous sera envoyé gratuitement par email.\nNous ne partageons jamais vos données.",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Téléphone / WhatsApp",
      phoneHint: "Pour être recontacté plus facilement",
      country: "Pays de résidence",
      consentContact:
        "J'accepte d'être recontacté par l'équipe Umdeny Capital pour un accompagnement personnalisé.",
      consentRgpd: "J'accepte la",
      privacyLink: "politique de confidentialité",
      consentRgpdEnd: "d'Umdeny Capital.",
      submit: "Voir mon profil patrimonial",
      submitting: "Envoi en cours…",
      countries: [
        "Cameroun",
        "Côte d'Ivoire",
        "Sénégal",
        "France",
        "Belgique",
        "Canada",
        "États-Unis",
        "Royaume-Uni",
        "Allemagne",
        "Maroc",
        "Gabon",
        "RDC",
        "Autre",
      ],
      placeholderFirstName: "ex. Aïssatou",
      placeholderLastName: "ex. Mbengue",
      placeholderEmail: "vous@exemple.com",
      placeholderPhone: "+237 6XX XX XX XX",
    },
    confirmation: {
      eyebrow: "ANALYSE ENVOYÉE",
      title: "Vérifiez votre boîte mail.",
      titleEm: "Votre profil patrimonial est en route.",
      sentTo: "Envoyé à",
      body: "Nous venons d'envoyer votre analyse patrimoniale personnalisée à l'adresse indiquée. Votre profil, vos recommandations et les prochaines étapes s'y trouvent.",
      spam: "Si vous ne le recevez pas dans les 5 prochaines minutes, pensez à vérifier vos spams.",
      ctaTitle: "Prendre un appel avec notre équipe",
      ctaSub: "Appel de 30 minutes · Gratuit · Sans engagement · Disponible en semaine",
      ctaBtn: "Réserver mon créneau",
      restart: "← Refaire le quiz depuis le début",
    },
    footer: {
      copy: "© 2025 Umdeny Capital",
      privacy: "Politique de confidentialité",
    },
  },
  en: {
    nav: {
      rdv: "Book a Call",
    },
    welcome: {
      bannerText: "Whether you're in Africa or in the diaspora, this quiz was built for you.",
      bannerTextStrong: "Our recommendations adapt to your geographic situation.",
      eyebrow: "WEALTH ASSESSMENT · 5 MINUTES",
      titlePlain: "What is your",
      titleEm: "wealth profile",
      titleEnd: "?",
      subtitle:
        "Answer 17 questions in 5 minutes and instantly receive a personalised analysis of your situation, with the strategies and asset classes best suited to your profile — free, by email.",
      cta: "Start my free assessment",
      r1: "Free and no commitment",
      r2: "Results sent by email",
      r3: "Confidential data",
      meta1Label: "Targeted questions",
      meta2Label: "To complete",
      meta3Label: "Confidential",
    },
    quiz: {
      back: "Previous",
      bloc: "Block",
      questionOf: (n: number, total: number) => `QUESTION ${n} / ${total}`,
      multiHint: "Multiple choice",
      next: "Next question",
      seeProfile: "See my profile",
    },
    capture: {
      back: "Edit my answers",
      eyebrow: "LAST STEP",
      title: "Your profile is ready.",
      titleEm: "Enter your details to receive it.",
      subtitle:
        "Your detailed result will be sent to you free by email.\nWe never share your data.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone / WhatsApp",
      phoneHint: "So we can reach you more easily",
      country: "Country of residence",
      consentContact:
        "I agree to be contacted by the Umdeny Capital team for personalised support.",
      consentRgpd: "I accept the",
      privacyLink: "privacy policy",
      consentRgpdEnd: "of Umdeny Capital.",
      submit: "See my wealth profile",
      submitting: "Submitting…",
      countries: [
        "Cameroon",
        "Côte d'Ivoire",
        "Senegal",
        "France",
        "Belgium",
        "Canada",
        "United States",
        "United Kingdom",
        "Germany",
        "Morocco",
        "Gabon",
        "DRC",
        "Other",
      ],
      placeholderFirstName: "e.g. Aïssatou",
      placeholderLastName: "e.g. Mbengue",
      placeholderEmail: "you@example.com",
      placeholderPhone: "+237 6XX XX XX XX",
    },
    confirmation: {
      eyebrow: "ANALYSIS SENT",
      title: "Check your inbox.",
      titleEm: "Your wealth profile is on its way.",
      sentTo: "Sent to",
      body: "We've just sent your personalised wealth analysis to the address you provided. Your profile, recommendations and next steps are all in there.",
      spam: "If you don't receive it within the next 5 minutes, please check your spam folder.",
      ctaTitle: "Book a call with our team",
      ctaSub: "30-minute call · Free · No commitment · Available weekdays",
      ctaBtn: "Book my slot",
      restart: "← Retake the quiz from the start",
    },
    footer: {
      copy: "© 2025 Umdeny Capital",
      privacy: "Privacy policy",
    },
  },
} as const;

export type UIStrings = typeof ui.fr;

// ─── Localized quiz blocks ─────────────────────────────────────────────────────

const blocksData: Record<Lang, Block[]> = {
  fr: [
    { id: 'A', title: "Parlons d'abord de vous", subtitle: 'Situation personnelle' },
    { id: 'B', title: 'Votre situation financière actuelle', subtitle: 'Capital & capacités' },
    { id: 'C', title: 'Où voulez-vous aller ?', subtitle: 'Objectifs & horizon' },
    { id: 'D', title: 'Votre philosophie face au risque', subtitle: 'Rapport au risque' },
    { id: 'E', title: 'Ce qui vous attire', subtitle: 'Affinités & préférences' },
  ],
  en: [
    { id: 'A', title: "Let's start with you", subtitle: 'Personal situation' },
    { id: 'B', title: 'Your current financial situation', subtitle: 'Capital & capacity' },
    { id: 'C', title: 'Where do you want to go?', subtitle: 'Goals & timeline' },
    { id: 'D', title: 'Your approach to risk', subtitle: 'Risk philosophy' },
    { id: 'E', title: 'What attracts you', subtitle: 'Affinities & preferences' },
  ],
};

// ─── Localized quiz questions ──────────────────────────────────────────────────

const questionsData: Record<Lang, Question[]> = {
  fr: [
    {
      id: 'Q1', block: 'A', question: 'Où résidez-vous actuellement ?',
      options: [
        { tag: 'GEO_CMR', label: 'Au Cameroun' },
        { tag: 'GEO_AFRIQUE_C', label: 'Afrique centrale' },
        { tag: 'GEO_AFRIQUE_O', label: "Afrique de l'Ouest" },
        { tag: 'GEO_AFRIQUE_AUTRE', label: 'Autre Afrique' },
        { tag: 'GEO_EUROPE', label: 'Europe' },
        { tag: 'GEO_AMERIQUE', label: 'Amérique' },
        { tag: 'GEO_AUTRE', label: 'Autres' },
      ],
    },
    {
      id: 'Q2', block: 'A', question: 'Quel est votre âge ?',
      options: [
        { tag: 'AGE_U25', label: 'Moins de 25 ans' },
        { tag: 'AGE_25_34', label: '25 – 34 ans' },
        { tag: 'AGE_35_44', label: '35 – 44 ans' },
        { tag: 'AGE_45_54', label: '45 – 54 ans' },
        { tag: 'AGE_55_64', label: '55 – 64 ans' },
        { tag: 'AGE_65P', label: '65 ans et plus' },
      ],
    },
    {
      id: 'Q3', block: 'A', question: 'Quelle est votre situation professionnelle ?',
      options: [
        { tag: 'SALARIE', label: 'Salarié du secteur privé' },
        { tag: 'FONCT', label: "Fonctionnaire / Agent de l'État" },
        { tag: 'ENTREPRENEUR', label: "Entrepreneur / Chef d'entreprise" },
        { tag: 'LIBERAL', label: 'Profession libérale (médecin, avocat, expert-comptable…)' },
        { tag: 'RENTIER', label: 'Investisseur / Je vis de mes revenus patrimoniaux' },
        { tag: 'ETUDIANT', label: 'Étudiant ou en formation' },
        { tag: 'TRANSITION', label: 'En transition professionnelle / Sans activité principale' },
      ],
    },
    {
      id: 'Q4', block: 'A', question: 'Dans quel secteur exercez-vous ?',
      options: [
        { tag: 'SEC_FINANCE', label: 'Banque, finance, assurance' },
        { tag: 'SEC_SANTE', label: 'Santé et pharmacie' },
        { tag: 'SEC_COMMERCE', label: 'Commerce, import-export, distribution' },
        { tag: 'SEC_IMMO', label: 'Bâtiment, immobilier, BTP' },
        { tag: 'SEC_TECH', label: 'Technologies, télécom, digital' },
        { tag: 'SEC_AGRI', label: 'Agriculture, agro-industrie' },
        { tag: 'SEC_TRANSPORT', label: 'Transport et logistique' },
        { tag: 'SEC_CONSEIL', label: 'Droit, conseil, audit' },
        { tag: 'SEC_EDUCATION', label: 'Éducation, formation' },
        { tag: 'SEC_ADMIN', label: 'Fonction publique / Administration' },
        { tag: 'SEC_AUTRE', label: 'Autre secteur' },
      ],
    },
    {
      id: 'Q5', block: 'A', question: "Avez-vous déjà investi ou épargné de façon structurée ?",
      options: [
        { tag: 'EXP_REGULIER', label: "Oui, j'investis ou j'épargne régulièrement depuis plusieurs années" },
        { tag: 'EXP_PONCTUEL', label: "Oui, j'ai déjà fait quelques placements ponctuels" },
        { tag: 'EXP_NEGATIF', label: "Oui, mais j'ai eu des expériences décevantes que je veux corriger" },
        { tag: 'EXP_PREMIER', label: "Non, c'est ma première démarche sérieuse" },
        { tag: 'EXP_ZERO', label: "Non, je cherche d'abord à comprendre comment générer un revenu avant d'investir" },
      ],
    },
    {
      id: 'Q6', block: 'B', question: "Quel est votre objectif principal concernant votre argent aujourd'hui ?",
      options: [
        { tag: 'OBJ_CROISSANCE', label: "Faire fructifier un capital que j'ai déjà" },
        { tag: 'OBJ_REVENUS', label: 'Générer des revenus complémentaires réguliers sans toucher au capital' },
        { tag: 'OBJ_PROTECTION', label: "Protéger et sécuriser ce que j'ai déjà bâti" },
        { tag: 'OBJ_RETRAITE', label: 'Préparer ma retraite ou mon avenir à long terme' },
        { tag: 'OBJ_TRANSMISSION', label: 'Transmettre un patrimoine à mes proches ou héritiers' },
        { tag: 'OBJ_HERITAGE', label: "Je viens de recevoir un héritage et je cherche comment le gérer" },
        { tag: 'OBJ_PROJET', label: 'Financer un projet précis (logement, business, études)' },
        { tag: 'OBJ_CONSTRUCTION', label: "Je n'ai pas encore de capital mais je veux apprendre à en construire un" },
      ],
    },
    {
      id: 'Q7', block: 'B', question: "Quel montant êtes-vous en mesure d'allouer dans les 6 prochains mois ?",
      options: [
        { tag: 'CAP_ZERO', label: "Je n'ai pas encore de capital disponible" },
        { tag: 'CAP_XS', label: 'Moins de 100 000 FCFA' },
        { tag: 'CAP_S', label: 'Entre 100 000 et 500 000 FCFA' },
        { tag: 'CAP_M', label: 'Entre 500 000 et 3 000 000 FCFA' },
        { tag: 'CAP_L', label: 'Entre 3 000 000 et 10 000 000 FCFA' },
        { tag: 'CAP_XL', label: 'Entre 10 000 000 et 50 000 000 FCFA' },
        { tag: 'CAP_XXL', label: 'Plus de 50 000 000 FCFA' },
        { tag: 'CAP_NP', label: 'Je préfère ne pas préciser' },
      ],
    },
    {
      id: 'Q8', block: 'B', question: 'Comment souhaitez-vous mobiliser ce capital ?',
      options: [
        { tag: 'MODE_UNIQUE', label: 'En une seule fois sur un placement ciblé' },
        { tag: 'MODE_PROG', label: 'En versements progressifs et réguliers' },
        { tag: 'MODE_FLEX', label: 'De façon flexible selon les opportunités' },
        { tag: 'MODE_NSP', label: "Je ne sais pas encore, j'attends les recommandations" },
      ],
    },
    {
      id: 'Q9', block: 'B', question: 'Avez-vous déjà un patrimoine existant à valoriser ou structurer ?',
      options: [
        { tag: 'PAT_IMMO', label: 'Oui, un ou plusieurs biens immobiliers' },
        { tag: 'PAT_EPARGNE', label: 'Oui, une épargne liquide dormante sur un compte' },
        { tag: 'PAT_ENTREPRISE', label: 'Oui, une entreprise ou des parts sociales' },
        { tag: 'PAT_MULTI', label: 'Oui, plusieurs éléments combinés' },
        { tag: 'PAT_ZERO', label: 'Non, je pars de zéro ou presque' },
        { tag: 'PAT_HERITAGE', label: "Je viens de recevoir un héritage à structurer" },
      ],
    },
    {
      id: 'Q10', block: 'C', question: 'Sur quel horizon envisagez-vous principalement vos investissements ?',
      options: [
        { tag: 'HOR_COURT', label: "Moins d'un an — j'ai besoin de liquidités ou de résultats rapides" },
        { tag: 'HOR_1_3', label: '1 à 3 ans — horizon court à moyen terme' },
        { tag: 'HOR_3_5', label: '3 à 5 ans — je pense sur le moyen terme' },
        { tag: 'HOR_LONG', label: "Plus de 5 ans — j'investis dans la durée" },
        { tag: 'HOR_NSP', label: 'Je ne sais pas encore' },
      ],
    },
    {
      id: 'Q11', block: 'C', question: 'Avez-vous un projet de vie particulier lié à cet investissement ?',
      options: [
        { tag: 'PROJET_IMMO', label: 'Acquérir un bien immobilier' },
        { tag: 'PROJET_EDUCATION', label: 'Financer les études de mes enfants' },
        { tag: 'PROJET_RETOUR', label: 'Préparer un retour au Cameroun ou en Afrique' },
        { tag: 'PROJET_BUSINESS', label: 'Lancer ou développer une activité' },
        { tag: 'PROJET_RETRAITE', label: 'Assurer ma retraite et mon indépendance financière' },
        { tag: 'PROJET_HERITAGE', label: "Sécuriser l'avenir de mes héritiers" },
        { tag: 'PROJET_OPTIMISATION', label: 'Aucun projet précis — je veux simplement optimiser' },
      ],
    },
    {
      id: 'Q12', block: 'D',
      question: 'Si votre investissement perdait 15 % de sa valeur en moins de 6 mois, quelle serait votre réaction ?',
      options: [
        { tag: 'RISQ_FUITE', label: 'Je vends immédiatement pour limiter les pertes' },
        { tag: 'RISQ_ATTENTE', label: "Je suis inquiet mais j'attends une remontée" },
        { tag: 'RISQ_SEREIN', label: "Je reste serein, c'est normal dans un cycle d'investissement" },
        { tag: 'RISQ_OFFENSIF', label: "Je vois une opportunité d'investir davantage à un prix bas" },
      ],
    },
    {
      id: 'Q13', block: 'D', question: "Quel niveau de risque correspond à votre philosophie d'investissement ?",
      options: [
        { tag: 'NIV_SECU', label: 'Sécurité maximale — je préfère un rendement faible mais garanti' },
        { tag: 'NIV_MODERE', label: "Risque modéré — j'accepte quelques fluctuations pour un meilleur rendement" },
        { tag: 'NIV_ELEVE', label: 'Risque élevé assumé — je vise la performance avec une volatilité acceptée' },
        { tag: 'NIV_OFFENSIF', label: 'Profil offensif — je cherche le rendement maximum, je comprends les risques' },
      ],
    },
    {
      id: 'Q14', block: 'D',
      question: "Quel niveau d'implication souhaitez-vous avoir dans la gestion de vos investissements ?",
      options: [
        { tag: 'IMP_DELEGATION', label: 'Aucune — je veux déléguer entièrement à des professionnels' },
        { tag: 'IMP_RAPPORTS', label: 'Minimale — recevoir des rapports périodiques suffit' },
        { tag: 'IMP_ACTIVE', label: 'Active — je veux être consulté sur les décisions importantes' },
        { tag: 'IMP_COPILOTE', label: 'Très active — je veux co-piloter et comprendre chaque mouvement' },
      ],
    },
    {
      id: 'Q15', block: 'E', multi: true, max: 3,
      question: "Quels secteurs ou types d'actifs vous attirent le plus ?",
      hint: 'Plusieurs choix possibles · 3 maximum',
      options: [
        { tag: 'AFF_BOURSE', label: 'Marchés boursiers (actions, obligations, ETF)' },
        { tag: 'AFF_IMMO', label: 'Immobilier (locatif, promotion, SCPI)' },
        { tag: 'AFF_CROWD', label: 'Financement participatif (crowdfunding / crowdlending)' },
        { tag: 'AFF_CRYPTO', label: 'Cryptomonnaies et actifs numériques' },
        { tag: 'AFF_TRADING', label: 'Trading actif sur les marchés financiers' },
        { tag: 'AFF_TELECOM', label: 'Télécommunications et infrastructure digitale' },
        { tag: 'AFF_AGRI', label: 'Agriculture et agro-industrie africaine' },
        { tag: 'AFF_TRANSPORT', label: 'Transport et mobilité' },
        { tag: 'AFF_FINTECH', label: 'Mobile Money et Fintech' },
        { tag: 'AFF_NEUTRE', label: 'Pas de préférence particulière' },
      ],
    },
    {
      id: 'Q16', block: 'E',
      question: 'Avez-vous des valeurs ou des causes que vous souhaitez refléter dans vos investissements ?',
      options: [
        { tag: 'VAL_IMPACT', label: 'Impact social et solidarité en Afrique' },
        { tag: 'VAL_TECH', label: 'Innovation, technologie et transformation numérique' },
        { tag: 'VAL_AGRI', label: 'Agriculture durable et souveraineté alimentaire africaine' },
        { tag: 'VAL_MOBILITE', label: 'Mobilité, commerce et développement local' },
        { tag: 'VAL_FINANCE', label: 'Finance, marchés et performance pure' },
        { tag: 'VAL_NEUTRE', label: 'Pas de préférence particulière' },
      ],
    },
    {
      id: 'Q17', block: 'E',
      question: "Qu'est-ce qui vous freine le plus aujourd'hui dans votre démarche d'investissement ?",
      options: [
        { tag: 'FREIN_SAVOIR', label: "Je manque d'informations et de formation sur le sujet" },
        { tag: 'FREIN_CAPITAL', label: "Je n'ai pas encore le capital nécessaire pour me lancer" },
        { tag: 'FREIN_CONFIANCE', label: 'Je ne sais pas à qui faire confiance ni comment choisir' },
        { tag: 'FREIN_TEMPS', label: 'Je manque de temps pour suivre et gérer mes investissements' },
        { tag: 'FREIN_PEUR', label: "J'ai peur de perdre mon argent" },
        { tag: 'FREIN_OPPORT', label: "Je cherche les bonnes opportunités adaptées à l'Afrique" },
        { tag: 'FREIN_AUCUN', label: "Rien — je suis prêt à agir maintenant" },
      ],
    },
  ],
  en: [
    {
      id: 'Q1', block: 'A', question: 'Where do you currently reside?',
      options: [
        { tag: 'GEO_CMR', label: 'In Cameroon' },
        { tag: 'GEO_AFRIQUE_C', label: 'Central Africa' },
        { tag: 'GEO_AFRIQUE_O', label: 'West Africa' },
        { tag: 'GEO_AFRIQUE_AUTRE', label: 'Other Africa' },
        { tag: 'GEO_EUROPE', label: 'Europe' },
        { tag: 'GEO_AMERIQUE', label: 'Americas' },
        { tag: 'GEO_AUTRE', label: 'Other' },
      ],
    },
    {
      id: 'Q2', block: 'A', question: 'What is your age?',
      options: [
        { tag: 'AGE_U25', label: 'Under 25' },
        { tag: 'AGE_25_34', label: '25 – 34' },
        { tag: 'AGE_35_44', label: '35 – 44' },
        { tag: 'AGE_45_54', label: '45 – 54' },
        { tag: 'AGE_55_64', label: '55 – 64' },
        { tag: 'AGE_65P', label: '65 and over' },
      ],
    },
    {
      id: 'Q3', block: 'A', question: 'What is your professional situation?',
      options: [
        { tag: 'SALARIE', label: 'Private sector employee' },
        { tag: 'FONCT', label: 'Civil servant / Government employee' },
        { tag: 'ENTREPRENEUR', label: 'Entrepreneur / Business owner' },
        { tag: 'LIBERAL', label: 'Liberal profession (doctor, lawyer, accountant…)' },
        { tag: 'RENTIER', label: 'Investor / I live off my asset income' },
        { tag: 'ETUDIANT', label: 'Student or in training' },
        { tag: 'TRANSITION', label: 'Career transition / No main activity' },
      ],
    },
    {
      id: 'Q4', block: 'A', question: 'Which sector do you work in?',
      options: [
        { tag: 'SEC_FINANCE', label: 'Banking, finance, insurance' },
        { tag: 'SEC_SANTE', label: 'Health and pharmaceuticals' },
        { tag: 'SEC_COMMERCE', label: 'Trade, import-export, distribution' },
        { tag: 'SEC_IMMO', label: 'Real estate, construction' },
        { tag: 'SEC_TECH', label: 'Technology, telecom, digital' },
        { tag: 'SEC_AGRI', label: 'Agriculture, agro-industry' },
        { tag: 'SEC_TRANSPORT', label: 'Transport and logistics' },
        { tag: 'SEC_CONSEIL', label: 'Law, consulting, audit' },
        { tag: 'SEC_EDUCATION', label: 'Education, training' },
        { tag: 'SEC_ADMIN', label: 'Public sector / Administration' },
        { tag: 'SEC_AUTRE', label: 'Other sector' },
      ],
    },
    {
      id: 'Q5', block: 'A', question: 'Have you already invested or saved in a structured way?',
      options: [
        { tag: 'EXP_REGULIER', label: 'Yes, I invest or save regularly over several years' },
        { tag: 'EXP_PONCTUEL', label: "Yes, I've made some one-off investments" },
        { tag: 'EXP_NEGATIF', label: "Yes, but I've had disappointing experiences I want to correct" },
        { tag: 'EXP_PREMIER', label: 'No, this is my first serious approach' },
        { tag: 'EXP_ZERO', label: "No, I'm first looking to understand how to generate income" },
      ],
    },
    {
      id: 'Q6', block: 'B', question: 'What is your main goal for your money today?',
      options: [
        { tag: 'OBJ_CROISSANCE', label: 'Grow capital I already have' },
        { tag: 'OBJ_REVENUS', label: 'Generate regular supplementary income without touching the principal' },
        { tag: 'OBJ_PROTECTION', label: "Protect and secure what I've already built" },
        { tag: 'OBJ_RETRAITE', label: 'Prepare for retirement or my long-term future' },
        { tag: 'OBJ_TRANSMISSION', label: 'Pass on wealth to loved ones or heirs' },
        { tag: 'OBJ_HERITAGE', label: "I've just received an inheritance and I'm looking for how to manage it" },
        { tag: 'OBJ_PROJET', label: 'Finance a specific project (housing, business, education)' },
        { tag: 'OBJ_CONSTRUCTION', label: "I don't have capital yet but I want to learn how to build some" },
      ],
    },
    {
      id: 'Q7', block: 'B', question: 'How much are you able to allocate in the next 6 months?',
      options: [
        { tag: 'CAP_ZERO', label: "I don't have any capital available yet" },
        { tag: 'CAP_XS', label: 'Less than 100,000 FCFA' },
        { tag: 'CAP_S', label: 'Between 100,000 and 500,000 FCFA' },
        { tag: 'CAP_M', label: 'Between 500,000 and 3,000,000 FCFA' },
        { tag: 'CAP_L', label: 'Between 3,000,000 and 10,000,000 FCFA' },
        { tag: 'CAP_XL', label: 'Between 10,000,000 and 50,000,000 FCFA' },
        { tag: 'CAP_XXL', label: 'More than 50,000,000 FCFA' },
        { tag: 'CAP_NP', label: "I'd rather not specify" },
      ],
    },
    {
      id: 'Q8', block: 'B', question: 'How would you like to deploy this capital?',
      options: [
        { tag: 'MODE_UNIQUE', label: 'All at once on a targeted investment' },
        { tag: 'MODE_PROG', label: 'In progressive, regular instalments' },
        { tag: 'MODE_FLEX', label: 'Flexibly, based on opportunities' },
        { tag: 'MODE_NSP', label: "I don't know yet, I'm waiting for recommendations" },
      ],
    },
    {
      id: 'Q9', block: 'B', question: 'Do you already have existing assets to grow or structure?',
      options: [
        { tag: 'PAT_IMMO', label: 'Yes, one or more real estate properties' },
        { tag: 'PAT_EPARGNE', label: 'Yes, liquid savings sitting in an account' },
        { tag: 'PAT_ENTREPRISE', label: 'Yes, a business or company shares' },
        { tag: 'PAT_MULTI', label: 'Yes, several combined elements' },
        { tag: 'PAT_ZERO', label: "No, I'm starting from scratch or close to it" },
        { tag: 'PAT_HERITAGE', label: "I've just received an inheritance to structure" },
      ],
    },
    {
      id: 'Q10', block: 'C', question: 'What is your main investment timeline?',
      options: [
        { tag: 'HOR_COURT', label: 'Less than 1 year — I need liquidity or fast results' },
        { tag: 'HOR_1_3', label: '1 to 3 years — short to medium term' },
        { tag: 'HOR_3_5', label: '3 to 5 years — medium-term thinking' },
        { tag: 'HOR_LONG', label: 'More than 5 years — I invest for the long term' },
        { tag: 'HOR_NSP', label: "I don't know yet" },
      ],
    },
    {
      id: 'Q11', block: 'C', question: 'Do you have a specific life project tied to this investment?',
      options: [
        { tag: 'PROJET_IMMO', label: 'Acquire a property' },
        { tag: 'PROJET_EDUCATION', label: "Fund my children's education" },
        { tag: 'PROJET_RETOUR', label: 'Plan a return to Cameroon or Africa' },
        { tag: 'PROJET_BUSINESS', label: 'Launch or grow a business' },
        { tag: 'PROJET_RETRAITE', label: 'Secure my retirement and financial independence' },
        { tag: 'PROJET_HERITAGE', label: 'Secure the future of my heirs' },
        { tag: 'PROJET_OPTIMISATION', label: 'No specific project — I just want to optimise' },
      ],
    },
    {
      id: 'Q12', block: 'D',
      question: 'If your investment lost 15% of its value in under 6 months, what would your reaction be?',
      options: [
        { tag: 'RISQ_FUITE', label: 'I sell immediately to limit losses' },
        { tag: 'RISQ_ATTENTE', label: "I'm worried but I wait for a recovery" },
        { tag: 'RISQ_SEREIN', label: "I remain calm, it's normal in an investment cycle" },
        { tag: 'RISQ_OFFENSIF', label: 'I see an opportunity to invest more at a low price' },
      ],
    },
    {
      id: 'Q13', block: 'D', question: 'What level of risk matches your investment philosophy?',
      options: [
        { tag: 'NIV_SECU', label: 'Maximum safety — I prefer a low but guaranteed return' },
        { tag: 'NIV_MODERE', label: 'Moderate risk — I accept some fluctuations for a better return' },
        { tag: 'NIV_ELEVE', label: 'High risk assumed — I aim for performance with accepted volatility' },
        { tag: 'NIV_OFFENSIF', label: 'Aggressive profile — I seek maximum return, I understand the risks' },
      ],
    },
    {
      id: 'Q14', block: 'D', question: 'What level of involvement do you want in managing your investments?',
      options: [
        { tag: 'IMP_DELEGATION', label: 'None — I want to delegate entirely to professionals' },
        { tag: 'IMP_RAPPORTS', label: 'Minimal — receiving periodic reports is enough' },
        { tag: 'IMP_ACTIVE', label: 'Active — I want to be consulted on major decisions' },
        { tag: 'IMP_COPILOTE', label: 'Very active — I want to co-pilot and understand every move' },
      ],
    },
    {
      id: 'Q15', block: 'E', multi: true, max: 3,
      question: 'Which sectors or asset types attract you most?',
      hint: 'Multiple choice · 3 maximum',
      options: [
        { tag: 'AFF_BOURSE', label: 'Stock markets (equities, bonds, ETFs)' },
        { tag: 'AFF_IMMO', label: 'Real estate (rental, development, REITs)' },
        { tag: 'AFF_CROWD', label: 'Participatory financing (crowdfunding / crowdlending)' },
        { tag: 'AFF_CRYPTO', label: 'Cryptocurrencies and digital assets' },
        { tag: 'AFF_TRADING', label: 'Active trading on financial markets' },
        { tag: 'AFF_TELECOM', label: 'Telecoms and digital infrastructure' },
        { tag: 'AFF_AGRI', label: 'Agriculture and African agro-industry' },
        { tag: 'AFF_TRANSPORT', label: 'Transport and mobility' },
        { tag: 'AFF_FINTECH', label: 'Mobile Money and Fintech' },
        { tag: 'AFF_NEUTRE', label: 'No particular preference' },
      ],
    },
    {
      id: 'Q16', block: 'E',
      question: 'Do you have values or causes you want to reflect in your investments?',
      options: [
        { tag: 'VAL_IMPACT', label: 'Social impact and solidarity in Africa' },
        { tag: 'VAL_TECH', label: 'Innovation, technology and digital transformation' },
        { tag: 'VAL_AGRI', label: 'Sustainable agriculture and African food sovereignty' },
        { tag: 'VAL_MOBILITE', label: 'Mobility, trade and local development' },
        { tag: 'VAL_FINANCE', label: 'Finance, markets and pure performance' },
        { tag: 'VAL_NEUTRE', label: 'No particular preference' },
      ],
    },
    {
      id: 'Q17', block: 'E',
      question: 'What is holding you back most in your investment journey today?',
      options: [
        { tag: 'FREIN_SAVOIR', label: 'I lack information and education on the subject' },
        { tag: 'FREIN_CAPITAL', label: "I don't yet have the capital needed to start" },
        { tag: 'FREIN_CONFIANCE', label: "I don't know who to trust or how to choose" },
        { tag: 'FREIN_TEMPS', label: "I don't have time to track and manage my investments" },
        { tag: 'FREIN_PEUR', label: "I'm afraid of losing my money" },
        { tag: 'FREIN_OPPORT', label: "I'm looking for the right opportunities suited to Africa" },
        { tag: 'FREIN_AUCUN', label: "Nothing — I'm ready to act now" },
      ],
    },
  ],
};

// ─── Localized profiles ────────────────────────────────────────────────────────

const profilesData: Record<Lang, Record<string, Profile>> = {
  fr: {
    GARDIEN: {
      id: 'GARDIEN', name: 'Le Gardien',
      slogan: "Protéger d'abord. Faire fructifier ensuite.",
      description: "Vous placez la sécurité de votre capital au-dessus de tout. Vous n'êtes pas contre le rendement — mais vous refusez de jouer avec ce que vous avez mis des années à construire. C'est une philosophie sage, et il existe des véhicules d'investissement conçus exactement pour vous.",
      assets: [
        { name: "Obligations d'État BEAC", desc: 'Revenus fixes et prévisibles. 5 à 7 % par an, capital protégé.', risk: 'Faible', horizon: '3-7 ans', ticket: 'Dès 100 000 FCFA' },
        { name: 'Fonds monétaires & épargne réglementée', desc: 'Sécurité totale, liquidité immédiate. Base solide d\'une stratégie patrimoniale.', risk: 'Faible', horizon: 'Court terme', ticket: 'Dès 50 000 FCFA' },
        { name: 'Immobilier locatif', desc: "Revenus mensuels stables. Protection contre l'inflation sur le long terme.", risk: 'Faible', horizon: '10 ans +', ticket: 'Variable' },
      ],
    },
    EQUILIBRISTE: {
      id: 'EQUILIBRISTE', name: "L'Équilibriste",
      slogan: 'La sagesse du diversifié. L\'ambition du structuré.',
      description: "Vous ne cherchez pas la performance à tout prix, mais vous n'acceptez pas non plus de laisser votre argent dormir. Vous voulez un portefeuille qui travaille intelligemment, avec un équilibre entre sécurité et rendement. La diversification est votre meilleur outil.",
      assets: [
        { name: 'Portefeuille mixte obligations + actions', desc: 'Combinaison stabilité / croissance. Sociétés africaines cotées en bourse.', risk: 'Modéré', horizon: '3-5 ans', ticket: 'Dès 500 000 FCFA' },
        { name: 'Crowdlending', desc: 'Prêter à taux fixe à des entreprises. 8 à 25 % de rendement selon les projets.', risk: 'Modéré', horizon: '12-36 mois', ticket: 'Dès 100 000 FCFA' },
        { name: 'Immobilier locatif ou participatif', desc: 'Revenus réguliers et valorisation du capital sur le moyen terme.', risk: 'Modéré', horizon: '5-10 ans', ticket: 'Dès 500 000 FCFA' },
      ],
    },
    BATISSEUR: {
      id: 'BATISSEUR', name: 'Le Bâtisseur',
      slogan: 'Construire sur le long terme. Avec méthode.',
      description: "Votre horizon est lointain. Vous pensez en décennies, pas en trimestres. Vous voulez que votre patrimoine ait une valeur réelle dans 10, 20 ou 30 ans. Cette vision de long terme est un avantage considérable : le temps est votre meilleur allié.",
      assets: [
        { name: 'Actions de croissance — BRVM, GSE, NSE', desc: 'Captez la croissance des entreprises africaines et internationales sur 10 ans +.', risk: 'Modéré', horizon: '10 ans +', ticket: 'Dès 250 000 FCFA' },
        { name: 'Immobilier à valorisation progressive', desc: 'Acheter, valoriser, transmettre. Yaoundé, Douala, Abidjan, Dakar.', risk: 'Modéré', horizon: '10-15 ans', ticket: 'Variable' },
        { name: 'Assurance-vie & transmission', desc: 'Constituer un capital sur la durée avec bénéficiaires désignés.', risk: 'Faible', horizon: '10 ans +', ticket: 'Dès 200 000 FCFA' },
        { name: "Fonds d'investissement long terme", desc: "Private equity et infrastructure africaine. Moins liquide, rendement supérieur.", risk: 'Élevé', horizon: '5-10 ans', ticket: 'Dès 5 000 000 FCFA' },
      ],
    },
    HERITIER: {
      id: 'HERITIER', name: "L'Héritier Stratège",
      slogan: 'Un patrimoine reçu. Une stratégie à construire.',
      description: "Vous avez reçu ou vous anticipez un héritage, et vous vous posez les bonnes questions : comment le préserver, comment le faire fructifier, et comment le transmettre à votre tour ? L'héritage est une responsabilité autant qu'une opportunité.",
      assets: [
        { name: 'Audit & valorisation du patrimoine', desc: 'Évaluation et cartographie complète des actifs reçus avant toute décision.', risk: '—', horizon: '1-3 mois', ticket: 'Service' },
        { name: 'Structuration juridique (Holding, SCI)', desc: 'Protection et optimisation fiscale du patrimoine hérité.', risk: '—', horizon: 'Permanent', ticket: 'Variable' },
        { name: 'Diversification résiliente', desc: 'Combinaison immobilier, marchés et liquidités pour limiter la concentration.', risk: 'Modéré', horizon: '5-10 ans', ticket: 'Selon patrimoine' },
        { name: 'Stratégie de transmission planifiée', desc: 'Donations progressives, assurance-vie, testament — anticiper la suite.', risk: 'Faible', horizon: 'Long terme', ticket: 'Variable' },
      ],
    },
    DYNAMIQUE: {
      id: 'DYNAMIQUE', name: 'Le Dynamique',
      slogan: 'Performance assumée. Risque maîtrisé.',
      description: "Vous cherchez la performance. Vous avez compris que le risque et le rendement sont indissociables, et vous l'assumez avec lucidité. Vous n'avez pas besoin qu'on vous protège de vous-même — vous avez besoin des bons outils et des bonnes informations pour décider.",
      assets: [
        { name: 'Actions de croissance — Afrique & international', desc: 'Banque, télécoms, énergie, digital. ETF sectoriels internationaux à frais réduits.', risk: 'Élevé', horizon: '3-7 ans', ticket: 'Dès 500 000 FCFA' },
        { name: 'Crowdfunding equity', desc: 'Participation dans des startups et PME africaines à fort potentiel.', risk: 'Élevé', horizon: '5-7 ans', ticket: 'Dès 500 000 FCFA' },
        { name: 'Crowdlending à taux élevé', desc: "Prêts courts (3-18 mois) à 15-30 % d'intérêt. Cycles rapides.", risk: 'Élevé', horizon: '3-18 mois', ticket: 'Dès 250 000 FCFA' },
        { name: 'Immobilier à valeur ajoutée', desc: 'Achat-rénovation-revente ou promotion. Forte plus-value possible.', risk: 'Élevé', horizon: '1-3 ans', ticket: 'Variable' },
      ],
    },
    OPPORTUNISTE: {
      id: 'OPPORTUNISTE', name: "L'Opportuniste",
      slogan: 'Le maximum. Toujours.',
      description: "Vous êtes un investisseur offensif. Vous comprenez parfaitement les risques et vous les acceptez en connaissance de cause. Vous cherchez le rendement maximum sur des horizons courts, avec une gestion active de vos positions. Vous n'avez pas besoin d'être convaincu — vous avez besoin des bonnes portes.",
      assets: [
        { name: 'Trading actif', desc: 'Forex, actions, matières premières, indices. Inefficiences sur les marchés africains.', risk: 'Élevé', horizon: 'Court terme', ticket: 'Dès 1 000 000 FCFA' },
        { name: 'Cryptomonnaies & actifs numériques', desc: 'BTC, ETH et altcoins de qualité. Staking et arbitrage en complément.', risk: 'Élevé', horizon: 'Variable', ticket: 'Dès 100 000 FCFA' },
        { name: 'Crowdfunding equity haut potentiel', desc: "Startups early-stage : fintech, agritech, healthtech africaine.", risk: 'Élevé', horizon: '5-7 ans', ticket: 'Dès 500 000 FCFA' },
        { name: 'Promotion immobilière courte', desc: "Opérations 12-24 mois. Rendements 30-60 % sur l'opération.", risk: 'Élevé', horizon: '12-24 mois', ticket: 'Variable' },
      ],
    },
    PROJET: {
      id: 'PROJET', name: 'Le Projet en Construction',
      slogan: "Vous n'avez pas le capital. Vous avez quelque chose de plus rare : la volonté.",
      description: "Vous n'avez pas encore le capital pour investir, ou vous en êtes au tout début. Ce n'est pas un problème — c'est un point de départ. La grande majorité des investisseurs que nous accompagnons ont commencé exactement là où vous êtes aujourd'hui. La différence ne tient pas au point de départ, mais à la décision d'agir.",
      cta: 'Réserver mon appel découverte de 15 minutes',
      ctaShort: 'Appel de 15 minutes · Gratuit · Sans engagement',
      assets: [
        { name: 'Comprendre les fondamentaux', desc: 'Actifs, risque vs perte, effet du temps. Les bases qui changent tout.', risk: '—', horizon: 'Formation', ticket: 'Gratuit' },
        { name: 'Épargne de précaution', desc: "Constituer 3 mois de dépenses en filet de sécurité avant tout investissement.", risk: 'Faible', horizon: '6-12 mois', ticket: 'Selon revenus' },
        { name: 'Premiers tickets accessibles', desc: 'Crowdlending ou crowdfunding dès 10-50 000 FCFA. Apprendre en réel.', risk: 'Modéré', horizon: '6-18 mois', ticket: 'Dès 10 000 FCFA' },
        { name: 'Formation & accompagnement', desc: 'Sources fiables, professionnels référencés. Méfiance face aux promesses.', risk: '—', horizon: 'Continu', ticket: 'Gratuit' },
      ],
    },
    ENTREPRENEUR: {
      id: 'ENTREPRENEUR', name: "L'Entrepreneur Patrimonial",
      slogan: "Vous avez bâti une activité. Il est temps de bâtir un patrimoine.",
      description: "Vous avez une entreprise, une activité libérale, ou plusieurs sources de revenus. Votre patrimoine est souvent concentré dans votre activité — et c'est un risque en soi. Les entrepreneurs ont des besoins patrimoniaux spécifiques : diversification, protection, optimisation fiscale, et préparation de la sortie.",
      assets: [
        { name: 'Diversification hors activité', desc: 'Immobilier, marchés financiers, obligations. Indépendant de votre entreprise.', risk: 'Modéré', horizon: '5-10 ans', ticket: 'Variable' },
        { name: 'Structuration juridique', desc: 'Holding patrimoniale, SCI, séparation pro / perso. Levier fiscal majeur.', risk: '—', horizon: 'Permanent', ticket: 'Variable' },
        { name: 'Préparation de la sortie / transmission', desc: 'Valorisation des parts, cession, transmission familiale, IPO.', risk: '—', horizon: '3-10 ans', ticket: 'Conseil' },
        { name: 'Actifs financiers liquides', desc: "Liquidité immédiate pour saisir des opportunités ou faire face aux imprévus.", risk: 'Modéré', horizon: 'Flexible', ticket: 'Variable' },
      ],
    },
  },
  en: {
    GARDIEN: {
      id: 'GARDIEN', name: 'The Guardian',
      slogan: 'Protect first. Grow afterwards.',
      description: "You place the security of your capital above everything else. You're not against returns — but you refuse to gamble with what you've spent years building. It's a wise philosophy, and there are investment vehicles designed exactly for you.",
      assets: [
        { name: 'BEAC Government Bonds', desc: 'Fixed and predictable income. 5–7% per year, protected capital.', risk: 'Low', horizon: '3–7 years', ticket: 'From 100,000 FCFA' },
        { name: 'Money market funds & regulated savings', desc: 'Total security, immediate liquidity. The solid base of any wealth strategy.', risk: 'Low', horizon: 'Short term', ticket: 'From 50,000 FCFA' },
        { name: 'Rental real estate', desc: 'Stable monthly income. Inflation protection over the long term.', risk: 'Low', horizon: '10 years+', ticket: 'Variable' },
      ],
    },
    EQUILIBRISTE: {
      id: 'EQUILIBRISTE', name: 'The Balancer',
      slogan: 'The wisdom of the diversified. The ambition of the structured.',
      description: "You don't chase performance at any cost, but you don't accept leaving your money idle either. You want a portfolio that works intelligently, with a balance between security and return. Diversification is your best tool.",
      assets: [
        { name: 'Mixed bonds + equities portfolio', desc: 'Stability / growth combination. African companies listed on the exchange.', risk: 'Moderate', horizon: '3–5 years', ticket: 'From 500,000 FCFA' },
        { name: 'Crowdlending', desc: 'Lend at fixed rates to companies. 8–25% return depending on projects.', risk: 'Moderate', horizon: '12–36 months', ticket: 'From 100,000 FCFA' },
        { name: 'Rental or participatory real estate', desc: 'Regular income and capital appreciation over the medium term.', risk: 'Moderate', horizon: '5–10 years', ticket: 'From 500,000 FCFA' },
      ],
    },
    BATISSEUR: {
      id: 'BATISSEUR', name: 'The Builder',
      slogan: 'Build for the long term. Methodically.',
      description: "Your horizon is distant. You think in decades, not quarters. You want your wealth to have real value in 10, 20 or 30 years. This long-term vision is a considerable advantage: time is your greatest ally.",
      assets: [
        { name: 'Growth equities — BRVM, GSE, NSE', desc: 'Capture the growth of African and international companies over 10+ years.', risk: 'Moderate', horizon: '10 years+', ticket: 'From 250,000 FCFA' },
        { name: 'Progressive appreciation real estate', desc: 'Buy, develop, pass on. Yaoundé, Douala, Abidjan, Dakar.', risk: 'Moderate', horizon: '10–15 years', ticket: 'Variable' },
        { name: 'Life insurance & inheritance planning', desc: 'Build capital over time with designated beneficiaries.', risk: 'Low', horizon: '10 years+', ticket: 'From 200,000 FCFA' },
        { name: 'Long-term investment funds', desc: 'African private equity and infrastructure. Less liquid, higher return.', risk: 'High', horizon: '5–10 years', ticket: 'From 5,000,000 FCFA' },
      ],
    },
    HERITIER: {
      id: 'HERITIER', name: 'The Strategic Heir',
      slogan: 'An inherited wealth. A strategy to build.',
      description: "You've received or anticipate an inheritance, and you're asking the right questions: how to preserve it, grow it, and pass it on in turn? Inheritance is a responsibility as much as an opportunity.",
      assets: [
        { name: 'Audit & asset valuation', desc: 'Complete evaluation and mapping of received assets before any decision.', risk: '—', horizon: '1–3 months', ticket: 'Service' },
        { name: 'Legal structuring (Holding, SCI)', desc: 'Protection and tax optimisation of inherited wealth.', risk: '—', horizon: 'Permanent', ticket: 'Variable' },
        { name: 'Resilient diversification', desc: 'Combination of real estate, markets and liquidity to limit concentration.', risk: 'Moderate', horizon: '5–10 years', ticket: 'Based on wealth' },
        { name: 'Planned transmission strategy', desc: 'Progressive donations, life insurance, will — planning ahead.', risk: 'Low', horizon: 'Long term', ticket: 'Variable' },
      ],
    },
    DYNAMIQUE: {
      id: 'DYNAMIQUE', name: 'The Dynamic',
      slogan: 'Performance assumed. Risk controlled.',
      description: "You seek performance. You understand that risk and return are inseparable, and you accept this with clarity. You don't need protecting from yourself — you need the right tools and the right information to decide.",
      assets: [
        { name: 'Growth equities — Africa & international', desc: 'Banking, telecom, energy, digital. Low-cost international sector ETFs.', risk: 'High', horizon: '3–7 years', ticket: 'From 500,000 FCFA' },
        { name: 'Equity crowdfunding', desc: 'Stakes in African startups and SMEs with high potential.', risk: 'High', horizon: '5–7 years', ticket: 'From 500,000 FCFA' },
        { name: 'High-yield crowdlending', desc: 'Short loans (3–18 months) at 15–30% interest. Fast cycles.', risk: 'High', horizon: '3–18 months', ticket: 'From 250,000 FCFA' },
        { name: 'Value-add real estate', desc: 'Buy-renovate-sell or development. Strong capital gains possible.', risk: 'High', horizon: '1–3 years', ticket: 'Variable' },
      ],
    },
    OPPORTUNISTE: {
      id: 'OPPORTUNISTE', name: 'The Opportunist',
      slogan: 'The maximum. Always.',
      description: "You're an aggressive investor. You understand the risks perfectly and accept them knowingly. You seek maximum return on short timeframes with active position management. You don't need to be convinced — you need the right doors.",
      assets: [
        { name: 'Active trading', desc: 'Forex, equities, commodities, indices. Inefficiencies in African markets.', risk: 'High', horizon: 'Short term', ticket: 'From 1,000,000 FCFA' },
        { name: 'Cryptocurrencies & digital assets', desc: 'BTC, ETH and quality altcoins. Staking and arbitrage as complement.', risk: 'High', horizon: 'Variable', ticket: 'From 100,000 FCFA' },
        { name: 'High-potential equity crowdfunding', desc: 'Early-stage startups: African fintech, agritech, healthtech.', risk: 'High', horizon: '5–7 years', ticket: 'From 500,000 FCFA' },
        { name: 'Short real estate development', desc: '12–24 month operations. 30–60% returns on the operation.', risk: 'High', horizon: '12–24 months', ticket: 'Variable' },
      ],
    },
    PROJET: {
      id: 'PROJET', name: 'The Work in Progress',
      slogan: "You don't have the capital. You have something rarer: the will.",
      description: "You don't yet have capital to invest, or you're just starting out. That's not a problem — it's a starting point. The vast majority of investors we work with started exactly where you are today. The difference isn't the starting point, but the decision to act.",
      cta: 'Book my 15-minute discovery call',
      ctaShort: '15-minute call · Free · No commitment',
      assets: [
        { name: 'Understanding the fundamentals', desc: 'Assets, risk vs loss, effect of time. The basics that change everything.', risk: '—', horizon: 'Training', ticket: 'Free' },
        { name: 'Emergency savings', desc: 'Build 3 months of expenses as a safety net before any investment.', risk: 'Low', horizon: '6–12 months', ticket: 'Based on income' },
        { name: 'Accessible first tickets', desc: 'Crowdlending or crowdfunding from 10–50,000 FCFA. Learn in real conditions.', risk: 'Moderate', horizon: '6–18 months', ticket: 'From 10,000 FCFA' },
        { name: 'Training & support', desc: 'Reliable sources, referenced professionals. Beware of promises.', risk: '—', horizon: 'Ongoing', ticket: 'Free' },
      ],
    },
    ENTREPRENEUR: {
      id: 'ENTREPRENEUR', name: 'The Patrimonial Entrepreneur',
      slogan: "You've built a business. It's time to build wealth.",
      description: "You have a company, a liberal profession, or multiple income streams. Your wealth is often concentrated in your business — and that's a risk in itself. Entrepreneurs have specific wealth needs: diversification, protection, tax optimisation, and exit planning.",
      assets: [
        { name: 'Diversification outside your business', desc: 'Real estate, financial markets, bonds. Independent of your company.', risk: 'Moderate', horizon: '5–10 years', ticket: 'Variable' },
        { name: 'Legal structuring', desc: 'Holding company, SCI, personal/professional separation. Major tax lever.', risk: '—', horizon: 'Permanent', ticket: 'Variable' },
        { name: 'Exit / succession planning', desc: 'Share valuation, sale, family succession, IPO.', risk: '—', horizon: '3–10 years', ticket: 'Advisory' },
        { name: 'Liquid financial assets', desc: 'Immediate liquidity to seize opportunities or handle the unexpected.', risk: 'Moderate', horizon: 'Flexible', ticket: 'Variable' },
      ],
    },
  },
};

// ─── Public accessors ──────────────────────────────────────────────────────────

export const getBlocks = (lang: Lang): Block[] => blocksData[lang];
export const getQuestions = (lang: Lang): Question[] => questionsData[lang];
export const getProfiles = (lang: Lang): Record<string, Profile> => profilesData[lang];

export function getAltQ8(lang: Lang): Question {
  return lang === 'en'
    ? {
        id: 'Q8', block: 'B',
        question: "Would you be willing to start by saving a small amount each month if we showed you how?",
        options: [
          { tag: 'EPARGNE_OUI', label: "Yes, absolutely — I'm ready to start" },
          { tag: 'EPARGNE_PEUT_ETRE', label: "Maybe — I want to understand how first" },
          { tag: 'EPARGNE_NON', label: "Not right now" },
        ],
      }
    : {
        id: 'Q8', block: 'B',
        question: "Seriez-vous prêt(e) à commencer par économiser une petite somme chaque mois si on vous montrait comment ?",
        options: [
          { tag: 'EPARGNE_OUI', label: "Oui, absolument — je suis prêt(e) à commencer" },
          { tag: 'EPARGNE_PEUT_ETRE', label: "Peut-être — je veux d'abord comprendre comment" },
          { tag: 'EPARGNE_NON', label: "Pas pour l'instant" },
        ],
      };
}
