import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase';
import { computeResult, type Answers } from '@/app/lib/quizData';

type SubmitBody = {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  pays?: string;
  consentement_contact: boolean;
  consentement_rgpd: boolean;
  answers: Answers;
};

function single(v: string | string[] | undefined): string | null {
  if (!v) return null;
  return Array.isArray(v) ? v[0] ?? null : v;
}

function multi(v: string | string[] | undefined): string[] | null {
  if (!v) return null;
  return Array.isArray(v) ? v : [v];
}

export async function POST(req: NextRequest) {
  let body: SubmitBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { prenom, nom, email, telephone, pays, consentement_contact, consentement_rgpd, answers } = body;

  if (!prenom || !nom || !email || !consentement_contact || !consentement_rgpd) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { profil, secondaire, scores } = computeResult(answers);

  const record = {
    prenom,
    nom,
    email,
    telephone: telephone || null,
    pays: pays || null,
    geo_tag: single(answers.Q1),
    situation_pro: single(answers.Q2),
    secteur: single(answers.Q3),
    experience: single(answers.Q4),
    objectif: single(answers.Q5),
    capital_range: single(answers.Q6),
    mode_investissement: single(answers.Q7),
    patrimoine_existant: single(answers.Q8),
    horizon: single(answers.Q9),
    projet_vie: single(answers.Q10),
    reaction_perte: single(answers.Q11),
    niveau_risque: single(answers.Q12),
    implication: single(answers.Q13),
    affinites: multi(answers.Q14),
    valeurs: single(answers.Q15),
    frein: single(answers.Q16),
    profil_attribue: profil,
    profil_secondaire: secondaire,
    score_details: scores,
    consentement_contact,
    consentement_rgpd,
    reponses_completes_json: answers,
  };

  const { error } = await supabase.from('prospects').insert(record);

  if (error) {
    console.error('[submit] Supabase error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }

  return NextResponse.json({ profil, secondaire });
}
