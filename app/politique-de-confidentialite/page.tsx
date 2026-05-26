import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Umdeny Capital',
};

const NAVY = '#0A1628';
const GOLD = '#C9A84C';

const sections = [
  {
    title: 'Identification du responsable de traitement',
    content: (
      <>
        <p>Umdeny Capital, entité du groupe Umdeny Holding, société de droit camerounais immatriculée au RCCM de Yaoundé.</p>
        <p>Contact : <a href="mailto:direction@umdeny.com" style={{ color: GOLD }}>direction@umdeny.com</a></p>
      </>
    ),
  },
  {
    title: 'Données collectées',
    content: (
      <>
        <p><strong>Données d'identification :</strong> prénom, nom, email, téléphone (optionnel), pays.</p>
        <p><strong>Données de profil patrimonial :</strong> situation professionnelle, secteur, expérience, objectifs, capital, horizon, risque, affinités, freins, projet de vie.</p>
        <p><strong>Données techniques :</strong> horodatage, UUID, pays de connexion.</p>
        <p style={{ marginTop: '12px', padding: '12px 16px', background: '#f8f5ee', borderLeft: `3px solid ${GOLD}`, borderRadius: '4px' }}>
          Aucune donnée bancaire, carte de paiement, mot de passe ou document d'identité n'est collecté.
        </p>
      </>
    ),
  },
  {
    title: 'Finalités du traitement',
    content: (
      <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
        <li>Génération du résultat personnalisé (traitement automatisé par algorithme de scoring)</li>
        <li>Envoi du résultat par email</li>
        <li>Prise de contact si consentement coché</li>
        <li>Amélioration des services (données agrégées anonymisées)</li>
        <li>Gestion de la relation prospect/client dans notre CRM</li>
      </ul>
    ),
  },
  {
    title: 'Base légale',
    content: (
      <>
        <p><strong>Consentement explicite :</strong> cases cochées au bas du formulaire, libre, éclairé, spécifique et révocable à tout moment.</p>
        <p><strong>Intérêt légitime :</strong> amélioration des services et suivi prospect.</p>
      </>
    ),
  },
  {
    title: 'Destinataires',
    content: (
      <>
        <p><strong>En interne :</strong> équipe Umdeny Capital.</p>
        <p><strong>Prestataires techniques :</strong> Resend (envoi d'emails), Supabase (stockage des données) — soumis à des obligations contractuelles de confidentialité.</p>
        <p style={{ marginTop: '12px', fontWeight: 600 }}>Umdeny Capital ne vend, ne loue et ne cède jamais les données à des tiers.</p>
      </>
    ),
  },
  {
    title: 'Durée de conservation',
    content: (
      <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
        <li>Prospects sans suite : <strong>3 ans maximum</strong> depuis la dernière interaction</li>
        <li>Clients actifs : <strong>durée de la relation + 5 ans</strong></li>
        <li>Données anonymisées à des fins statistiques : <strong>sans limite</strong></li>
      </ul>
    ),
  },
  {
    title: 'Vos droits',
    content: (
      <>
        <p>Vous disposez des droits suivants sur vos données :</p>
        <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit d'opposition (notamment à la prospection commerciale)</li>
          <li>Droit à la portabilité</li>
          <li>Droit au retrait du consentement</li>
        </ul>
        <p style={{ marginTop: '12px' }}>Pour exercer ces droits : <a href="mailto:direction@umdeny.com" style={{ color: GOLD }}>direction@umdeny.com</a></p>
      </>
    ),
  },
  {
    title: 'Contact & réclamations',
    content: (
      <>
        <p><strong>Email :</strong> <a href="mailto:direction@umdeny.com" style={{ color: GOLD }}>direction@umdeny.com</a></p>
        <p><strong>Adresse :</strong> Yaoundé, Fouda, Cameroun</p>
        <p style={{ marginTop: '12px' }}>En cas de réclamation non résolue, vous avez la possibilité de saisir l'autorité compétente de protection des données de votre pays de résidence.</p>
      </>
    ),
  },
];

export default function PolitiqueDeConfidentialite() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ background: NAVY, padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/">
          <Image src="/umdeny-logo-light.png" alt="Umdeny Capital" width={130} height={28} style={{ height: '28px', width: 'auto' }} />
        </Link>
        <Link href="/" style={{ color: '#ffffff', fontSize: '13px', opacity: 0.7, textDecoration: 'none' }}>
          ← Retour au quiz
        </Link>
      </header>

      {/* Content */}
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

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e5e5e5', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#aaa' }}>
        © 2025 Umdeny Holdings · <a href="mailto:direction@umdeny.com" style={{ color: '#aaa' }}>direction@umdeny.com</a>
      </footer>
    </div>
  );
}
