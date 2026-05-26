import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Umdeny Capital',
};

const NAVY = '#0A1628';
const GOLD = '#C9A84C';

const sections: { title: string; content: React.ReactNode }[] = [
  {
    title: 'Identification du responsable de traitement',
    content: (
      <>
        <p>Le présent quiz patrimonial est édité et exploité par <strong>Umdeny Capital</strong>, entité du groupe Umdeny Holding, société de droit camerounais immatriculée au Registre du Commerce et du Crédit Mobilier de Yaoundé.</p>
        <p>Contact : <a href="mailto:direction@umdeny.com" style={{ color: GOLD }}>direction@umdeny.com</a></p>
      </>
    ),
  },
  {
    title: 'Données collectées',
    content: (
      <>
        <p>Dans le cadre de l'utilisation du quiz patrimonial, Umdeny Capital collecte les données suivantes.</p>
        <p><strong>Données d'identification :</strong> Prénom, nom, adresse email, numéro de téléphone ou WhatsApp (optionnel), pays de résidence.</p>
        <p><strong>Données de profil patrimonial :</strong> Situation professionnelle, secteur d'activité, niveau d'expérience en investissement, objectifs patrimoniaux, tranche de capital mobilisable, horizon d'investissement, tolérance au risque, affinités sectorielles, freins identifiés, projet de vie associé à l'investissement.</p>
        <p><strong>Données techniques :</strong> Horodatage de soumission du formulaire, identifiant unique de session (UUID généré automatiquement), pays de connexion détecté.</p>
        <p style={{ marginTop: '12px', padding: '12px 16px', background: '#f8f5ee', borderLeft: `3px solid ${GOLD}`, borderRadius: '4px' }}>
          Aucune donnée bancaire, numéro de carte, mot de passe ou document d'identité n'est collecté via ce formulaire.
        </p>
      </>
    ),
  },
  {
    title: 'Finalités du traitement',
    content: (
      <>
        <p>Les données collectées sont utilisées exclusivement aux fins suivantes.</p>
        <p><strong>Génération du résultat personnalisé :</strong> Vos réponses permettent de calculer votre profil patrimonial et de produire des recommandations adaptées à votre situation. Ce traitement est entièrement automatisé et basé sur un algorithme de scoring interne.</p>
        <p><strong>Envoi du résultat par email :</strong> Votre profil, vos recommandations et les informations associées vous sont transmis à l'adresse email renseignée dans le formulaire.</p>
        <p><strong>Prise de contact et accompagnement :</strong> Si vous avez coché la case d'acceptation de contact, un membre de l'équipe Umdeny Capital pourra vous contacter pour vous proposer un accompagnement personnalisé.</p>
        <p><strong>Amélioration de nos services :</strong> Les données agrégées et anonymisées issues des réponses au quiz sont analysées pour améliorer la pertinence de nos recommandations et la qualité de nos offres. Ces analyses ne permettent pas d'identifier individuellement les répondants.</p>
        <p><strong>Gestion de la relation prospect et client :</strong> Vos coordonnées et votre profil sont enregistrés dans notre outil de gestion de la relation client (CRM) afin de suivre les échanges et l'avancement de votre accompagnement.</p>
      </>
    ),
  },
  {
    title: 'Base légale du traitement',
    content: (
      <>
        <p>Le traitement de vos données repose sur les bases légales suivantes.</p>
        <p><strong>Consentement explicite :</strong> vous avez coché les cases de consentement au bas du formulaire de capture, avant d'accéder à votre résultat. Ce consentement est libre, éclairé, spécifique et révocable à tout moment.</p>
        <p><strong>Intérêt légitime :</strong> le traitement des données à des fins d'amélioration de nos services et de suivi de la relation prospect repose sur l'intérêt légitime d'Umdeny Capital à développer son activité commerciale, dans le respect de vos droits et intérêts.</p>
      </>
    ),
  },
  {
    title: 'Destinataires des données',
    content: (
      <>
        <p>Vos données sont accessibles aux seules personnes suivantes.</p>
        <p><strong>En interne :</strong> les membres de l'équipe Umdeny Capital impliqués dans l'accompagnement patrimonial et la gestion de la relation client.</p>
        <p><strong>Prestataires techniques :</strong> les outils que nous utilisons pour l'envoi des emails (Resend) et le stockage des données (Supabase) peuvent traiter vos données en tant que sous-traitants. Ces prestataires sont soumis à des obligations contractuelles de confidentialité et de sécurité.</p>
        <p style={{ marginTop: '12px', fontWeight: 600 }}>Umdeny Capital ne vend, ne loue et ne cède jamais vos données personnelles à des tiers à des fins commerciales ou publicitaires.</p>
      </>
    ),
  },
  {
    title: 'Durée de conservation',
    content: (
      <>
        <p><strong>Prospects n'ayant pas donné suite :</strong> vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec Umdeny Capital, sauf demande de suppression de votre part.</p>
        <p><strong>Clients actifs :</strong> les données sont conservées pendant toute la durée de la relation contractuelle, puis pendant 5 ans après la fin de celle-ci, conformément aux obligations légales applicables en matière de conservation des données commerciales.</p>
        <p><strong>Données anonymisées à des fins statistiques :</strong> conservées sans limite de durée, ces données ne permettent plus d'identifier individuellement les répondants.</p>
      </>
    ),
  },
  {
    title: 'Vos droits',
    content: (
      <>
        <p>Conformément aux dispositions applicables en matière de protection des données personnelles, vous disposez des droits suivants.</p>
        <p><strong>Droit d'accès :</strong> vous pouvez demander à tout moment une copie des données personnelles que nous détenons vous concernant.</p>
        <p><strong>Droit de rectification :</strong> vous pouvez demander la correction de toute donnée inexacte ou incomplète.</p>
        <p><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données, sauf si leur conservation est nécessaire pour satisfaire une obligation légale ou un intérêt légitime prépondérant.</p>
        <p><strong>Droit d'opposition :</strong> vous pouvez vous opposer à tout moment au traitement de vos données à des fins de prospection commerciale.</p>
        <p><strong>Droit à la portabilité :</strong> vous pouvez demander à recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</p>
        <p><strong>Droit de retrait du consentement :</strong> vous pouvez retirer votre consentement à tout moment, sans que cela remette en cause la licéité des traitements effectués avant ce retrait.</p>
        <p style={{ marginTop: '16px' }}>Pour exercer l'un de ces droits, adressez votre demande par email à : <a href="mailto:direction@umdeny.com" style={{ color: GOLD, fontWeight: 600 }}>direction@umdeny.com</a></p>
        <p>Nous nous engageons à répondre dans un délai maximum de 30 jours calendaires.</p>
      </>
    ),
  },
  {
    title: 'Sécurité des données',
    content: (
      <>
        <p>Umdeny Capital met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, altération ou destruction. Ces mesures comprennent notamment le chiffrement des transmissions (protocole HTTPS), le contrôle des accès internes, et la sélection rigoureuse de prestataires techniques conformes aux standards de sécurité reconnus.</p>
        <p>Toutefois, aucun système de transmission ou de stockage de données ne peut garantir une sécurité absolue. En cas d'incident affectant vos données, Umdeny Capital s'engage à vous en informer dans les meilleurs délais si cet incident est susceptible d'engendrer un risque pour vos droits et libertés.</p>
      </>
    ),
  },
  {
    title: 'Traitement automatisé et profilage',
    content: (
      <>
        <p>Le quiz patrimonial utilise un algorithme de scoring automatisé pour attribuer un profil investisseur à partir de vos réponses. Ce traitement produit des recommandations indicatives à caractère informatif et éducatif. Il ne constitue en aucun cas un conseil en investissement financier au sens réglementaire du terme, et ne produit pas d'effet juridique ou décision contraignante à votre égard.</p>
        <p>Vous êtes libre d'accepter, d'ignorer ou de contester les recommandations produites par cet algorithme en contactant notre équipe.</p>
      </>
    ),
  },
  {
    title: 'Cookies et technologies similaires',
    content: (
      <>
        <p>Le quiz patrimonial peut utiliser des cookies techniques strictement nécessaires au bon fonctionnement de la page : mémorisation de votre progression dans le quiz, conservation temporaire de vos réponses en cours de saisie, et gestion de la session.</p>
        <p>Aucun cookie publicitaire ou de tracking tiers n'est déposé sur votre appareil via cette page.</p>
      </>
    ),
  },
  {
    title: 'Transferts internationaux de données',
    content: (
      <p>Certains de nos prestataires techniques (Resend, Supabase) peuvent être amenés à traiter vos données en dehors du Cameroun, notamment en Europe ou aux États-Unis. Dans ce cas, ces transferts sont encadrés par des garanties contractuelles appropriées conformes aux standards internationaux de protection des données.</p>
    ),
  },
  {
    title: 'Modifications de la présente politique',
    content: (
      <p>Umdeny Capital se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à l'évolution du cadre légal applicable ou aux changements de nos pratiques internes. La date de dernière mise à jour est indiquée en haut du document. En cas de modification substantielle, nous vous en informerons par email si vous êtes inscrit dans notre base de données.</p>
    ),
  },
  {
    title: 'Contact et réclamations',
    content: (
      <>
        <p>Pour toute question relative à la présente politique ou au traitement de vos données personnelles, vous pouvez nous contacter à l'adresse suivante :</p>
        <p><strong>Umdeny Capital</strong> · Email : <a href="mailto:direction@umdeny.com" style={{ color: GOLD }}>direction@umdeny.com</a></p>
        <p style={{ marginTop: '12px' }}>Si vous estimez que vos droits ne sont pas respectés après nous avoir contactés, vous disposez du droit d'introduire une réclamation auprès de l'autorité compétente en matière de protection des données dans votre pays de résidence.</p>
      </>
    ),
  },
];

export default function PolitiqueDeConfidentialite() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ background: NAVY, padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Image src="/umdeny-logo-light.png" alt="Umdeny Capital" width={130} height={28} style={{ height: '28px', width: 'auto' }} />
        </Link>
        <Link href="/" style={{ color: '#ffffff', fontSize: '13px', opacity: 0.7, textDecoration: 'none' }}>
          ← Retour au quiz
        </Link>
      </header>

      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <p style={{ margin: '0 0 8px', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: GOLD, fontWeight: 600 }}>
          Umdeny Capital — Quiz Patrimonial
        </p>
        <h1 style={{ margin: '0 0 8px', fontSize: '32px', fontWeight: 700, color: NAVY }}>
          Politique de Confidentialité
        </h1>
        <p style={{ margin: '0 0 56px', fontSize: '14px', color: '#888' }}>
          Dernière mise à jour : mai 2026
        </p>

        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: '48px' }}>
            <h2 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: NAVY, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {i + 1}. {s.title}
            </h2>
            <div style={{ width: '40px', height: '3px', background: GOLD, borderRadius: '2px', marginBottom: '16px' }} />
            <div style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
              {s.content}
            </div>
          </section>
        ))}
      </main>

      <footer style={{ borderTop: '1px solid #e5e5e5', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>
        © 2025 Umdeny Holdings · Yaoundé, Cameroon · <a href="mailto:direction@umdeny.com" style={{ color: '#aaa' }}>direction@umdeny.com</a>
      </footer>
    </div>
  );
}
