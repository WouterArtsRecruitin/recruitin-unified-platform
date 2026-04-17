# CHUNK 2 — FASE 0 (intro + pre-fill)

## Fase 0.1 — Intro scherm

Route: `/intake/[sessionId]` (eerste scherm)

**Layout:** 2-koloms fullscreen, links 55% content / rechts 45% image, bg `.bg-veco-precision`.

**Content (alles lowercase, IBM Plex Sans):**

```
HEADER: "veco" + Veco Blue "·" links | "powered by recruitin" rechts klein

LINKS:
welkom iwan-erik

vacature intake: HSE Engineer
QHSE afdeling

─────────────────
wat je hier doet

· bestaand functieprofiel bevestigen (feb 2023)
· 7 fases, 20+ gerichte vragen — ±40 minuten
· forced-choice waar nuance nodig is — we dwingen trade-offs
· aan het eind: gelockt profiel met jouw digitale handtekening
· PDF-rapport dat de basis wordt voor werving

─────────────────
wat het niet is

× geen vacaturetekst-generator
× geen selectietool voor kandidaten
× geen AI die voor jou beslist — jij bepaalt, tool dwingt scherpte

─────────────────
klaar om 40 minuten te investeren?
deze tijd verdient zich terug in minder mismatch tijdens werving.

[ start intake → ]    [ vragen aan Wouter ]

RECHTS: Veco electroforming/werkvloer foto (placeholder OK)
FOOTER: part of the IDEX Materials Science Solutions group | ISO 9001 · 14001 · 45001
```

**Primary button:** `bg-veco-blue hover:bg-veco-blue-dark text-white px-6 py-3 rounded font-normal transition-colors duration-200 lowercase`

**Secondary:** ghost met Veco-blue border, opent `mailto:wouter@recruitin.nl?subject=Vraag over intake HSE Engineer`

## Fase 0.2 — Pre-fill bevestiging

Na "start intake" → dit scherm.

```
voordat we starten, even dit

we hebben het functieprofiel uit februari 2023 gelezen.
dit is wat wij eruit hebben gehaald. klopt het nog?

┌─ rol-basis ────────────────────────────────────┐
│ Functietitel     HSE Engineer                  │
│ Functienummer    03.01.03                      │
│ Afdeling         QHSE                          │
│ Rapporteert aan  QHSE Manager (Iwan-Erik)      │
│ Werkniveau       HBO                           │
│ Ervaring         5-10 jaar                     │
│                                                │
│ [ klopt nog ]  [ aanpassen ]                   │
└────────────────────────────────────────────────┘

┌─ competentie-profiel (feb 2023) ───────────────┐
│ Schaal 1-5. Verplaats slider om aan te passen. │
│                                                │
│ Samenwerken         [====●====] 4              │
│ Accuratesse         [====●====] 4              │
│ Analytisch denken   [===●====]  3              │
│ Assertiviteit       [===●====]  3              │
│ Kwaliteit           [===●====]  3              │
│ Besluitvaardigheid  [==●=====]  2              │
│ Plannen             [==●=====]  2              │
│ Leidinggeven        [==●=====]  2              │
│                                                │
│ Wijzigingen worden gelogd als change request.  │
│ [ bevestigen en doorgaan → ]                   │
└────────────────────────────────────────────────┘
```

Sliders: shadcn/ui Slider, `accent-veco-blue`. Bij wijziging: toon "waarom aangepast?" (textarea max 120 chars, verplicht). Log in `preFill.changes[]`.

## Pre-fill defaults (hard-coded)

```typescript
export const HSE_ENGINEER_DEFAULTS = {
  rolBasis: {
    functietitel: 'HSE Engineer',
    functienummer: '03.01.03',
    afdeling: 'QHSE',
    rapporteertAan: 'QHSE Manager (Iwan-Erik)',
    hboWerkniveau: true,
    ervaringJaren: { min: 5, max: 10 },
  },
  competenties: {
    samenwerken: 4, accuratesse: 4, analytisch: 3, assertiviteit: 3,
    kwaliteit: 3, besluitvaardigheid: 2, plannen: 2, leidinggeven: 2,
  },
  acknowledged: false,
  changes: [],
};
```

Na "bevestigen": `preFill.acknowledged = true`, `currentFase = 1`.

## Testcriteria

- Intro scherm toont met Veco huisstijl
- "start intake" button werkt → pre-fill
- Pre-fill rol-basis read-only tenzij "aanpassen" geklikt
- Competentie sliders werken (1-5)
- Bij wijziging verschijnt "waarom"-veld
- "bevestigen" slaat op en navigeert verder
