'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'umdeny_cookies';

type Choice = 'accepted' | 'rejected';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (choice: Choice) => {
    try { localStorage.setItem(STORAGE_KEY, choice); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#0A1628', color: '#ffffff',
      padding: '20px 24px', boxShadow: '0 -4px 24px rgba(0,0,0,.3)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', flex: 1, minWidth: '260px', color: '#ccc' }}>
          Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.{' '}
          <Link href="/politique-de-confidentialite" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
            Politique de confidentialité
          </Link>
        </p>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            onClick={() => choose('rejected')}
            style={{
              padding: '9px 18px', fontSize: '13px', borderRadius: '6px',
              border: '1px solid rgba(255,255,255,.25)', background: 'transparent',
              color: '#ffffff', cursor: 'pointer',
            }}
          >
            Refuser tout
          </button>
          <button
            onClick={() => choose('accepted')}
            style={{
              padding: '9px 18px', fontSize: '13px', borderRadius: '6px',
              border: 'none', background: '#C9A84C',
              color: '#0A1628', fontWeight: 700, cursor: 'pointer',
            }}
          >
            Accepter tout
          </button>
        </div>
      </div>
    </div>
  );
}
