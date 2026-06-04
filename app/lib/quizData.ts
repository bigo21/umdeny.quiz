export type Option = { tag: string; label: string };

export type Question = {
  id: string;
  block: string;
  question: string;
  options: Option[];
  multi?: boolean;
  max?: number;
  hint?: string;
};

export type Block = { id: string; title: string; subtitle: string };

export type Asset = {
  name: string;
  desc: string;
  risk: string;
  horizon: string;
  ticket: string;
};

export type Profile = {
  id: string;
  name: string;
  slogan: string;
  description: string;
  assets: Asset[];
  avoid?: string[];
  cta?: string;
  ctaShort?: string;
};

export const QUIZ_BLOCKS: Block[] = [
  { id: 'A', title: "Parlons d'abord de vous", subtitle: "Situation personnelle" },
  { id: 'B', title: "Votre situation financière actuelle", subtitle: "Capital & capacités" },
  { id: 'C', title: "Où voulez-vous aller ?", subtitle: "Objectifs & horizon" },
  { id: 'D', title: "Votre philosophie face au risque", subtitle: "Rapport au risque" },
  { id: 'E', title: "Ce qui vous attire", subtitle: "Affinités & préférences" },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 'Q1', block: 'A', question: "Où résidez-vous actuellement ?",
    options: [
      { tag: 'GEO_CMR', label: "Au Cameroun" },
      { tag: 'GEO_AFRIQUE_C', label: "Afrique centrale" },
      { tag: 'GEO_AFRIQUE_O', label: "Afrique de l'Ouest" },
      { tag: 'GEO_AFRIQUE_AUTRE', label: "Autre Afrique" },
      { tag: 'GEO_EUROPE', label: "Europe" },
      { tag: 'GEO_AMERIQUE', label: "Amérique" },
      { tag: 'GEO_AUTRE', label: "Autres" },
    ],
  },
  {
    id: 'Q2', block: 'A', question: "Quel est votre âge ?",
    options: [
      { tag: 'AGE_U25', label: "Moins de 25 ans" },
      { tag: 'AGE_25_34', label: "25 – 34 ans" },
      { tag: 'AGE_35_44', label: "35 – 44 ans" },
      { tag: 'AGE_45_54', label: "45 – 54 ans" },
      { tag: 'AGE_55_64', label: "55 – 64 ans" },
      { tag: 'AGE_65P', label: "65 ans et plus" },
    ],
  },
  {
    id: 'Q3', block: 'A', question: "Quelle est votre situation professionnelle ?",
    options: [
      { tag: 'SALARIE', label: "Salarié du secteur privé" },
      { tag: 'FONCT', label: "Fonctionnaire / Agent de l'État" },
      { tag: 'ENTREPRENEUR', label: "Entrepreneur / Chef d'entreprise" },
      { tag: 'LIBERAL', label: "Profession libérale (médecin, avocat, expert-comptable…)" },
      { tag: 'RENTIER', label: "Investisseur / Je vis de mes revenus patrimoniaux" },
      { tag: 'ETUDIANT', label: "Étudiant ou en formation" },
      { tag: 'TRANSITION', label: "En transition professionnelle / Sans activité principale" },
    ],
  },
  {
    id: 'Q4', block: 'A', question: "Dans quel secteur exercez-vous ?",
    options: [
      { tag: 'SEC_FINANCE', label: "Banque, finance, assurance" },
      { tag: 'SEC_SANTE', label: "Santé et pharmacie" },
      { tag: 'SEC_COMMERCE', label: "Commerce, import-export, distribution" },
      { tag: 'SEC_IMMO', label: "Bâtiment, immobilier, BTP" },
      { tag: 'SEC_TECH', label: "Technologies, télécom, digital" },
      { tag: 'SEC_AGRI', label: "Agriculture, agro-industrie" },
      { tag: 'SEC_TRANSPORT', label: "Transport et logistique" },
      { tag: 'SEC_CONSEIL', label: "Droit, conseil, audit" },
      { tag: 'SEC_EDUCATION', label: "Éducation, formation" },
      { tag: 'SEC_ADMIN', label: "Fonction publique / Administration" },
      { tag: 'SEC_AUTRE', label: "Autre secteur" },
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
      { tag: 'OBJ_REVENUS', label: "Générer des revenus complémentaires réguliers sans toucher au capital" },
      { tag: 'OBJ_PROTECTION', label: "Protéger et sécuriser ce que j'ai déjà bâti" },
      { tag: 'OBJ_RETRAITE', label: "Préparer ma retraite ou mon avenir à long terme" },
      { tag: 'OBJ_TRANSMISSION', label: "Transmettre un patrimoine à mes proches ou héritiers" },
      { tag: 'OBJ_HERITAGE', label: "Je viens de recevoir un héritage et je cherche comment le gérer" },
      { tag: 'OBJ_PROJET', label: "Financer un projet précis (logement, business, études)" },
      { tag: 'OBJ_CONSTRUCTION', label: "Je n'ai pas encore de capital mais je veux apprendre à en construire un" },
    ],
  },
  {
    id: 'Q7', block: 'B', question: "Quel montant êtes-vous en mesure d'allouer dans les 6 prochains mois ?",
    options: [
      { tag: 'CAP_ZERO', label: "Je n'ai pas encore de capital disponible" },
      { tag: 'CAP_XS', label: "Moins de 100 000 FCFA" },
      { tag: 'CAP_S', label: "Entre 100 000 et 500 000 FCFA" },
      { tag: 'CAP_M', label: "Entre 500 000 et 3 000 000 FCFA" },
      { tag: 'CAP_L', label: "Entre 3 000 000 et 10 000 000 FCFA" },
      { tag: 'CAP_XL', label: "Entre 10 000 000 et 50 000 000 FCFA" },
      { tag: 'CAP_XXL', label: "Plus de 50 000 000 FCFA" },
      { tag: 'CAP_NP', label: "Je préfère ne pas préciser" },
    ],
  },
  {
    id: 'Q8', block: 'B', question: "Comment souhaitez-vous mobiliser ce capital ?",
    options: [
      { tag: 'MODE_UNIQUE', label: "En une seule fois sur un placement ciblé" },
      { tag: 'MODE_PROG', label: "En versements progressifs et réguliers" },
      { tag: 'MODE_FLEX', label: "De façon flexible selon les opportunités" },
      { tag: 'MODE_NSP', label: "Je ne sais pas encore, j'attends les recommandations" },
    ],
  },
  {
    id: 'Q9', block: 'B', question: "Avez-vous déjà un patrimoine existant à valoriser ou structurer ?",
    options: [
      { tag: 'PAT_IMMO', label: "Oui, un ou plusieurs biens immobiliers" },
      { tag: 'PAT_EPARGNE', label: "Oui, une épargne liquide dormante sur un compte" },
      { tag: 'PAT_ENTREPRISE', label: "Oui, une entreprise ou des parts sociales" },
      { tag: 'PAT_MULTI', label: "Oui, plusieurs éléments combinés" },
      { tag: 'PAT_ZERO', label: "Non, je pars de zéro ou presque" },
      { tag: 'PAT_HERITAGE', label: "Je viens de recevoir un héritage à structurer" },
    ],
  },
  {
    id: 'Q10', block: 'C', question: "Sur quel horizon envisagez-vous principalement vos investissements ?",
    options: [
      { tag: 'HOR_COURT', label: "Moins d'un an — j'ai besoin de liquidités ou de résultats rapides" },
      { tag: 'HOR_1_3', label: "1 à 3 ans — horizon court à moyen terme" },
      { tag: 'HOR_3_5', label: "3 à 5 ans — je pense sur le moyen terme" },
      { tag: 'HOR_LONG', label: "Plus de 5 ans — j'investis dans la durée" },
      { tag: 'HOR_NSP', label: "Je ne sais pas encore" },
    ],
  },
  {
    id: 'Q11', block: 'C', question: "Avez-vous un projet de vie particulier lié à cet investissement ?",
    options: [
      { tag: 'PROJET_IMMO', label: "Acquérir un bien immobilier" },
      { tag: 'PROJET_EDUCATION', label: "Financer les études de mes enfants" },
      { tag: 'PROJET_RETOUR', label: "Préparer un retour au Cameroun ou en Afrique" },
      { tag: 'PROJET_BUSINESS', label: "Lancer ou développer une activité" },
      { tag: 'PROJET_RETRAITE', label: "Assurer ma retraite et mon indépendance financière" },
      { tag: 'PROJET_HERITAGE', label: "Sécuriser l'avenir de mes héritiers" },
      { tag: 'PROJET_OPTIMISATION', label: "Aucun projet précis — je veux simplement optimiser" },
    ],
  },
  {
    id: 'Q12', block: 'D',
    question: "Si votre investissement perdait 15 % de sa valeur en moins de 6 mois, quelle serait votre réaction ?",
    options: [
      { tag: 'RISQ_FUITE', label: "Je vends immédiatement pour limiter les pertes" },
      { tag: 'RISQ_ATTENTE', label: "Je suis inquiet mais j'attends une remontée" },
      { tag: 'RISQ_SEREIN', label: "Je reste serein, c'est normal dans un cycle d'investissement" },
      { tag: 'RISQ_OFFENSIF', label: "Je vois une opportunité d'investir davantage à un prix bas" },
    ],
  },
  {
    id: 'Q13', block: 'D', question: "Quel niveau de risque correspond à votre philosophie d'investissement ?",
    options: [
      { tag: 'NIV_SECU', label: "Sécurité maximale — je préfère un rendement faible mais garanti" },
      { tag: 'NIV_MODERE', label: "Risque modéré — j'accepte quelques fluctuations pour un meilleur rendement" },
      { tag: 'NIV_ELEVE', label: "Risque élevé assumé — je vise la performance avec une volatilité acceptée" },
      { tag: 'NIV_OFFENSIF', label: "Profil offensif — je cherche le rendement maximum, je comprends les risques" },
    ],
  },
  {
    id: 'Q14', block: 'D',
    question: "Quel niveau d'implication souhaitez-vous avoir dans la gestion de vos investissements ?",
    options: [
      { tag: 'IMP_DELEGATION', label: "Aucune — je veux déléguer entièrement à des professionnels" },
      { tag: 'IMP_RAPPORTS', label: "Minimale — recevoir des rapports périodiques suffit" },
      { tag: 'IMP_ACTIVE', label: "Active — je veux être consulté sur les décisions importantes" },
      { tag: 'IMP_COPILOTE', label: "Très active — je veux co-piloter et comprendre chaque mouvement" },
    ],
  },
  {
    id: 'Q15', block: 'E', multi: true, max: 3,
    question: "Quels secteurs ou types d'actifs vous attirent le plus ?",
    hint: "Plusieurs choix possibles · 3 maximum",
    options: [
      { tag: 'AFF_BOURSE', label: "Marchés boursiers (actions, obligations, ETF)" },
      { tag: 'AFF_IMMO', label: "Immobilier (locatif, promotion, SCPI)" },
      { tag: 'AFF_CROWD', label: "Financement participatif (crowdfunding / crowdlending)" },
      { tag: 'AFF_CRYPTO', label: "Cryptomonnaies et actifs numériques" },
      { tag: 'AFF_TRADING', label: "Trading actif sur les marchés financiers" },
      { tag: 'AFF_TELECOM', label: "Télécommunications et infrastructure digitale" },
      { tag: 'AFF_AGRI', label: "Agriculture et agro-industrie africaine" },
      { tag: 'AFF_TRANSPORT', label: "Transport et mobilité" },
      { tag: 'AFF_FINTECH', label: "Mobile Money et Fintech" },
      { tag: 'AFF_NEUTRE', label: "Pas de préférence particulière" },
    ],
  },
  {
    id: 'Q16', block: 'E',
    question: "Avez-vous des valeurs ou des causes que vous souhaitez refléter dans vos investissements ?",
    options: [
      { tag: 'VAL_IMPACT', label: "Impact social et solidarité en Afrique" },
      { tag: 'VAL_TECH', label: "Innovation, technologie et transformation numérique" },
      { tag: 'VAL_AGRI', label: "Agriculture durable et souveraineté alimentaire africaine" },
      { tag: 'VAL_MOBILITE', label: "Mobilité, commerce et développement local" },
      { tag: 'VAL_FINANCE', label: "Finance, marchés et performance pure" },
      { tag: 'VAL_NEUTRE', label: "Pas de préférence particulière" },
    ],
  },
  {
    id: 'Q17', block: 'E',
    question: "Qu'est-ce qui vous freine le plus aujourd'hui dans votre démarche d'investissement ?",
    options: [
      { tag: 'FREIN_SAVOIR', label: "Je manque d'informations et de formation sur le sujet" },
      { tag: 'FREIN_CAPITAL', label: "Je n'ai pas encore le capital nécessaire pour me lancer" },
      { tag: 'FREIN_CONFIANCE', label: "Je ne sais pas à qui faire confiance ni comment choisir" },
      { tag: 'FREIN_TEMPS', label: "Je manque de temps pour suivre et gérer mes investissements" },
      { tag: 'FREIN_PEUR', label: "J'ai peur de perdre mon argent" },
      { tag: 'FREIN_OPPORT', label: "Je cherche les bonnes opportunités adaptées à l'Afrique" },
      { tag: 'FREIN_AUCUN', label: "Rien — je suis prêt à agir maintenant" },
    ],
  },
];

export const QUIZ_PROFILES: Record<string, Profile> = {
  GARDIEN: {
    id: "GARDIEN",
    name: "Le Gardien",
    slogan: "Protéger d'abord. Faire fructifier ensuite.",
    description:
      "Vous placez la sécurité de votre capital au-dessus de tout. Vous n'êtes pas contre le rendement — mais vous refusez de jouer avec ce que vous avez mis des années à construire. C'est une philosophie sage, et il existe des véhicules d'investissement conçus exactement pour vous.",
    assets: [
      {
        name: "Obligations d'État BEAC",
        desc: "Revenus fixes et prévisibles. 5 à 7 % par an, capital protégé.",
        risk: "Faible",
        horizon: "3-7 ans",
        ticket: "Dès 100 000 FCFA",
      },
      {
        name: "Fonds monétaires & épargne réglementée",
        desc: "Sécurité totale, liquidité immédiate. Base solide d'une stratégie patrimoniale.",
        risk: "Faible",
        horizon: "Court terme",
        ticket: "Dès 50 000 FCFA",
      },
      {
        name: "Immobilier locatif",
        desc: "Revenus mensuels stables. Protection contre l'inflation sur le long terme.",
        risk: "Faible",
        horizon: "10 ans +",
        ticket: "Variable",
      },
    ],
  },
  EQUILIBRISTE: {
    id: "EQUILIBRISTE",
    name: "L'Équilibriste",
    slogan: "La sagesse du diversifié. L'ambition du structuré.",
    description:
      "Vous ne cherchez pas la performance à tout prix, mais vous n'acceptez pas non plus de laisser votre argent dormir. Vous voulez un portefeuille qui travaille intelligemment, avec un équilibre entre sécurité et rendement. La diversification est votre meilleur outil.",
    assets: [
      {
        name: "Portefeuille mixte obligations + actions",
        desc: "Combinaison stabilité / croissance. Sociétés africaines cotées en bourse.",
        risk: "Modéré",
        horizon: "3-5 ans",
        ticket: "Dès 500 000 FCFA",
      },
      {
        name: "Crowdlending",
        desc: "Prêter à taux fixe à des entreprises. 8 à 25 % de rendement selon les projets.",
        risk: "Modéré",
        horizon: "12-36 mois",
        ticket: "Dès 100 000 FCFA",
      },
      {
        name: "Immobilier locatif ou participatif",
        desc: "Revenus réguliers et valorisation du capital sur le moyen terme.",
        risk: "Modéré",
        horizon: "5-10 ans",
        ticket: "Dès 500 000 FCFA",
      },
    ],
  },
  BATISSEUR: {
    id: "BATISSEUR",
    name: "Le Bâtisseur",
    slogan: "Construire sur le long terme. Avec méthode.",
    description:
      "Votre horizon est lointain. Vous pensez en décennies, pas en trimestres. Vous voulez que votre patrimoine ait une valeur réelle dans 10, 20 ou 30 ans. Cette vision de long terme est un avantage considérable : le temps est votre meilleur allié.",
    assets: [
      {
        name: "Actions de croissance — BRVM, GSE, NSE",
        desc: "Captez la croissance des entreprises africaines et internationales sur 10 ans +.",
        risk: "Modéré",
        horizon: "10 ans +",
        ticket: "Dès 250 000 FCFA",
      },
      {
        name: "Immobilier à valorisation progressive",
        desc: "Acheter, valoriser, transmettre. Yaoundé, Douala, Abidjan, Dakar.",
        risk: "Modéré",
        horizon: "10-15 ans",
        ticket: "Variable",
      },
      {
        name: "Assurance-vie & transmission",
        desc: "Constituer un capital sur la durée avec bénéficiaires désignés.",
        risk: "Faible",
        horizon: "10 ans +",
        ticket: "Dès 200 000 FCFA",
      },
      {
        name: "Fonds d'investissement long terme",
        desc: "Private equity et infrastructure africaine. Moins liquide, rendement supérieur.",
        risk: "Élevé",
        horizon: "5-10 ans",
        ticket: "Dès 5 000 000 FCFA",
      },
    ],
  },
  HERITIER: {
    id: "HERITIER",
    name: "L'Héritier Stratège",
    slogan: "Un patrimoine reçu. Une stratégie à construire.",
    description:
      "Vous avez reçu ou vous anticipez un héritage, et vous vous posez les bonnes questions : comment le préserver, comment le faire fructifier, et comment le transmettre à votre tour ? L'héritage est une responsabilité autant qu'une opportunité.",
    assets: [
      {
        name: "Audit & valorisation du patrimoine",
        desc: "Évaluation et cartographie complète des actifs reçus avant toute décision.",
        risk: "—",
        horizon: "1-3 mois",
        ticket: "Service",
      },
      {
        name: "Structuration juridique (Holding, SCI)",
        desc: "Protection et optimisation fiscale du patrimoine hérité.",
        risk: "—",
        horizon: "Permanent",
        ticket: "Variable",
      },
      {
        name: "Diversification résiliente",
        desc: "Combinaison immobilier, marchés et liquidités pour limiter la concentration.",
        risk: "Modéré",
        horizon: "5-10 ans",
        ticket: "Selon patrimoine",
      },
      {
        name: "Stratégie de transmission planifiée",
        desc: "Donations progressives, assurance-vie, testament — anticiper la suite.",
        risk: "Faible",
        horizon: "Long terme",
        ticket: "Variable",
      },
    ],
  },
  DYNAMIQUE: {
    id: "DYNAMIQUE",
    name: "Le Dynamique",
    slogan: "Performance assumée. Risque maîtrisé.",
    description:
      "Vous cherchez la performance. Vous avez compris que le risque et le rendement sont indissociables, et vous l'assumez avec lucidité. Vous n'avez pas besoin qu'on vous protège de vous-même — vous avez besoin des bons outils et des bonnes informations pour décider.",
    assets: [
      {
        name: "Actions de croissance — Afrique & international",
        desc: "Banque, télécoms, énergie, digital. ETF sectoriels internationaux à frais réduits.",
        risk: "Élevé",
        horizon: "3-7 ans",
        ticket: "Dès 500 000 FCFA",
      },
      {
        name: "Crowdfunding equity",
        desc: "Participation dans des startups et PME africaines à fort potentiel.",
        risk: "Élevé",
        horizon: "5-7 ans",
        ticket: "Dès 500 000 FCFA",
      },
      {
        name: "Crowdlending à taux élevé",
        desc: "Prêts courts (3-18 mois) à 15-30 % d'intérêt. Cycles rapides.",
        risk: "Élevé",
        horizon: "3-18 mois",
        ticket: "Dès 250 000 FCFA",
      },
      {
        name: "Immobilier à valeur ajoutée",
        desc: "Achat-rénovation-revente ou promotion. Forte plus-value possible.",
        risk: "Élevé",
        horizon: "1-3 ans",
        ticket: "Variable",
      },
    ],
  },
  OPPORTUNISTE: {
    id: "OPPORTUNISTE",
    name: "L'Opportuniste",
    slogan: "Le maximum. Toujours.",
    description:
      "Vous êtes un investisseur offensif. Vous comprenez parfaitement les risques et vous les acceptez en connaissance de cause. Vous cherchez le rendement maximum sur des horizons courts, avec une gestion active de vos positions. Vous n'avez pas besoin d'être convaincu — vous avez besoin des bonnes portes.",
    assets: [
      {
        name: "Trading actif",
        desc: "Forex, actions, matières premières, indices. Inefficiences sur les marchés africains.",
        risk: "Élevé",
        horizon: "Court terme",
        ticket: "Dès 1 000 000 FCFA",
      },
      {
        name: "Cryptomonnaies & actifs numériques",
        desc: "BTC, ETH et altcoins de qualité. Staking et arbitrage en complément.",
        risk: "Élevé",
        horizon: "Variable",
        ticket: "Dès 100 000 FCFA",
      },
      {
        name: "Crowdfunding equity haut potentiel",
        desc: "Startups early-stage : fintech, agritech, healthtech africaine.",
        risk: "Élevé",
        horizon: "5-7 ans",
        ticket: "Dès 500 000 FCFA",
      },
      {
        name: "Promotion immobilière courte",
        desc: "Opérations 12-24 mois. Rendements 30-60 % sur l'opération.",
        risk: "Élevé",
        horizon: "12-24 mois",
        ticket: "Variable",
      },
    ],
  },
  PROJET: {
    id: "PROJET",
    name: "Le Projet en Construction",
    slogan:
      "Vous n'avez pas le capital. Vous avez quelque chose de plus rare : la volonté.",
    description:
      "Vous n'avez pas encore le capital pour investir, ou vous en êtes au tout début. Ce n'est pas un problème — c'est un point de départ. La grande majorité des investisseurs que nous accompagnons ont commencé exactement là où vous êtes aujourd'hui. La différence ne tient pas au point de départ, mais à la décision d'agir.",
    cta: "Réserver mon appel découverte de 15 minutes",
    ctaShort: "Appel de 15 minutes · Gratuit · Sans engagement",
    assets: [
      {
        name: "Comprendre les fondamentaux",
        desc: "Actifs, risque vs perte, effet du temps. Les bases qui changent tout.",
        risk: "—",
        horizon: "Formation",
        ticket: "Gratuit",
      },
      {
        name: "Épargne de précaution",
        desc: "Constituer 3 mois de dépenses en filet de sécurité avant tout investissement.",
        risk: "Faible",
        horizon: "6-12 mois",
        ticket: "Selon revenus",
      },
      {
        name: "Premiers tickets accessibles",
        desc: "Crowdlending ou crowdfunding dès 10-50 000 FCFA. Apprendre en réel.",
        risk: "Modéré",
        horizon: "6-18 mois",
        ticket: "Dès 10 000 FCFA",
      },
      {
        name: "Formation & accompagnement",
        desc: "Sources fiables, professionnels référencés. Méfiance face aux promesses.",
        risk: "—",
        horizon: "Continu",
        ticket: "Gratuit",
      },
    ],
  },
  ENTREPRENEUR: {
    id: "ENTREPRENEUR",
    name: "L'Entrepreneur Patrimonial",
    slogan: "Vous avez bâti une activité. Il est temps de bâtir un patrimoine.",
    description:
      "Vous avez une entreprise, une activité libérale, ou plusieurs sources de revenus. Votre patrimoine est souvent concentré dans votre activité — et c'est un risque en soi. Les entrepreneurs ont des besoins patrimoniaux spécifiques : diversification, protection, optimisation fiscale, et préparation de la sortie.",
    assets: [
      {
        name: "Diversification hors activité",
        desc: "Immobilier, marchés financiers, obligations. Indépendant de votre entreprise.",
        risk: "Modéré",
        horizon: "5-10 ans",
        ticket: "Variable",
      },
      {
        name: "Structuration juridique",
        desc: "Holding patrimoniale, SCI, séparation pro / perso. Levier fiscal majeur.",
        risk: "—",
        horizon: "Permanent",
        ticket: "Variable",
      },
      {
        name: "Préparation de la sortie / transmission",
        desc: "Valorisation des parts, cession, transmission familiale, IPO.",
        risk: "—",
        horizon: "3-10 ans",
        ticket: "Conseil",
      },
      {
        name: "Actifs financiers liquides",
        desc: "Liquidité immédiate pour saisir des opportunités ou faire face aux imprévus.",
        risk: "Modéré",
        horizon: "Flexible",
        ticket: "Variable",
      },
    ],
  },
};

export type Answers = Record<string, string | string[]>;

function buildScores(answers: Answers) {
  const tags = new Set<string>();
  Object.values(answers).forEach(v => {
    if (Array.isArray(v)) v.forEach(t => tags.add(t));
    else if (v) tags.add(v);
  });
  const has = (t: string) => tags.has(t);
  const any = (...arr: string[]) => arr.some(t => tags.has(t));

  const earlyExit =
    has('OBJ_HERITAGE') || has('PAT_HERITAGE') ? 'HERITIER'
    : has('CAP_ZERO') && has('OBJ_CONSTRUCTION') ? 'PROJET'
    : has('AGE_U25') && has('EXP_ZERO') && !any('CAP_XL', 'CAP_XXL') ? 'PROJET'
    : (has('ENTREPRENEUR') || has('LIBERAL') || has('RENTIER')) &&
      (has('PAT_ENTREPRISE') || has('PAT_MULTI')) &&
      !has('NIV_OFFENSIF') ? 'ENTREPRENEUR'
    : null;

  const scores: Record<string, number> = {
    GARDIEN: 0, EQUILIBRISTE: 0, BATISSEUR: 0, DYNAMIQUE: 0, OPPORTUNISTE: 0, PROJET: 0,
  };

  if (has('NIV_SECU')) scores.GARDIEN += 3;
  if (any('AGE_55_64', 'AGE_65P') && has('NIV_SECU')) scores.GARDIEN += 3;
  if (any('RISQ_FUITE', 'RISQ_ATTENTE')) scores.GARDIEN += 2;
  if (any('OBJ_PROTECTION', 'OBJ_RETRAITE', 'OBJ_TRANSMISSION')) scores.GARDIEN += 2;
  if (any('CAP_M', 'CAP_L', 'CAP_XL', 'CAP_XXL')) scores.GARDIEN += 1;

  if (has('NIV_MODERE')) scores.EQUILIBRISTE += 3;
  if (any('RISQ_ATTENTE', 'RISQ_SEREIN')) scores.EQUILIBRISTE += 2;
  if (any('OBJ_CROISSANCE', 'OBJ_REVENUS')) scores.EQUILIBRISTE += 2;
  if (any('CAP_S', 'CAP_M', 'CAP_L')) scores.EQUILIBRISTE += 1;

  if (any('OBJ_RETRAITE', 'OBJ_TRANSMISSION', 'PROJET_HERITAGE', 'PROJET_RETRAITE')) scores.BATISSEUR += 3;
  if (has('HOR_LONG')) scores.BATISSEUR += 3;
  if (any('NIV_MODERE', 'NIV_SECU')) scores.BATISSEUR += 1;

  if (has('NIV_ELEVE')) scores.DYNAMIQUE += 3;
  if (any('RISQ_SEREIN', 'RISQ_OFFENSIF')) scores.DYNAMIQUE += 2;
  if (any('OBJ_CROISSANCE', 'OBJ_REVENUS')) scores.DYNAMIQUE += 1;
  if (any('CAP_L', 'CAP_XL', 'CAP_XXL')) scores.DYNAMIQUE += 2;
  if (any('HOR_3_5', 'HOR_LONG')) scores.DYNAMIQUE += 1;

  if (has('NIV_OFFENSIF')) scores.OPPORTUNISTE += 4;
  if (has('RISQ_OFFENSIF')) scores.OPPORTUNISTE += 2;
  if (any('CAP_XL', 'CAP_XXL')) scores.OPPORTUNISTE += 2;
  if (any('HOR_COURT', 'HOR_1_3')) scores.OPPORTUNISTE += 1;
  if (any('AFF_TRADING', 'AFF_CRYPTO')) scores.OPPORTUNISTE += 2;

  if (any('OBJ_CONSTRUCTION', 'EXP_ZERO')) scores.PROJET += 3;
  if (any('CAP_ZERO', 'CAP_XS')) scores.PROJET += 2;
  if (any('FREIN_CAPITAL', 'FREIN_SAVOIR')) scores.PROJET += 1;
  if (has('NIV_OFFENSIF') || has('NIV_ELEVE')) scores.PROJET -= 5;

  return { earlyExit, scores };
}

export function computeProfile(answers: Answers): string {
  const { earlyExit, scores } = buildScores(answers);
  if (earlyExit) return earlyExit;
  let best = 'EQUILIBRISTE', bestScore = -Infinity;
  Object.entries(scores).forEach(([k, v]) => {
    if (v > bestScore) { bestScore = v; best = k; }
  });
  return best;
}

export function computeResult(answers: Answers): {
  profil: string;
  secondaire: string | null;
  scores: Record<string, number>;
} {
  const { earlyExit, scores } = buildScores(answers);
  if (earlyExit) return { profil: earlyExit, secondaire: null, scores };

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const profil = sorted[0][0];
  const secondaire = sorted[1][1] === sorted[0][1] ? sorted[1][0] : null;
  return { profil, secondaire, scores };
}
