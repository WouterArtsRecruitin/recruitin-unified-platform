# 🚀 Recruitin Unified Platform

**Een moderne, unified recruitment platform met React, TypeScript, Tailwind CSS en React Router**

![Recruitin Platform](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4)

---

## 📋 **Overzicht**

Dit project combineert drie belangrijke delen van het Recruitin platform:

1. **Executive Recruitment Landing Page** (`/`) - S&PS Sourcing & Procurement Services
2. **Recruitment Nieuws Rapport** (`/news`) - 203 artikelen met Notion integratie
3. **Over Frank** (`/about`) - Persoonlijke pagina van Frank Lenting

---

## 🎨 **Features**

### ✅ **Unified Navigation**
- Consistent RECRUITIN branding
- React Router voor smooth page transitions
- Mobile-responsive hamburger menu
- Active state indicators

### ✅ **Executive Recruitment (`/`)**
- S&PS huisstijl (bruin `#8B6F6F` + blauw `#4A7C9E`)
- Motion.js animaties
- Service cards met hover effects
- Contact formulier
- Responsive design

### ✅ **Recruitment Nieuws (`/news`)**
- 203 technische recruitment artikelen
- **Notion integratie** voor artikel management
- Top 3 Push naar Notion functionaliteit
- Search & filter
- Categorieën met dropdown (Top 3 + "Toon meer")
- Recruitin huisstijl (charcoal + oranje)

### ✅ **Over Frank (`/about`)**
- Persoonlijke profiel pagina
- Werkervaring timeline
- Skills & certificeringen
- Contact informatie
- S&PS huisstijl

---

## 🛠️ **Tech Stack**

- **Framework:** React 18.3.1
- **Routing:** React Router DOM 7.12.0
- **Styling:** Tailwind CSS 4.1.12
- **Animaties:** Motion (Framer Motion) 12.23.24
- **Icons:** Lucide React 0.487.0
- **Build Tool:** Vite 6.3.5
- **Backend:** Supabase (voor Notion integratie)

---

## 📂 **Project Structuur**

```
/src/app/
├── App.tsx                           # React Router setup
├── pages/
│   ├── ExecutivePage.tsx            # Executive Recruitment landing
│   ├── NewsPage.tsx                 # Recruitment nieuws rapport
│   └── AboutPage.tsx                # Over Frank profiel
├── components/
│   ├── UnifiedHeader.tsx            # Shared navigation
│   ├── StatCard.tsx                 # Stats component
│   ├── CategorySection.tsx          # Nieuws categorieën
│   ├── TopArticleCard.tsx           # Top 3 artikel cards
│   └── NotionConfigModal.tsx        # Notion setup modal
├── hooks/
│   └── useNotion.ts                 # Notion integratie hook
└── data/
    └── newsData.ts                  # 203 recruitment artikelen
```

---

## 🚀 **Routes**

| Route | Pagina | Beschrijving |
|-------|--------|-------------|
| `/` | Executive Recruitment | S&PS landing page voor Sourcing & Procurement |
| `/news` | Recruitment Nieuws | Technische recruitment nieuws (203 artikelen) |
| `/about` | Over Frank | Persoonlijke pagina Frank Lenting |

---

## 🎨 **Kleurenschema**

### **Executive Recruitment & About**
- Primair: Bruin `#8B6F6F`
- Accent: Blauw `#4A7C9E`
- Gradient: `#8B6F6F` → `#6B5252`

### **Recruitment Nieuws**
- Primair: Charcoal/Grijs `#374151`
- Accent: Oranje `#EA580C`
- Gradient: `#374151` → `#1F2937`

---

## 💡 **Key Features per Pagina**

### **Executive Recruitment**
- Hero met glassmorphism stats
- 6 service cards
- 4-step aanpak sectie
- Ervaring showcase
- Contact formulier

### **Recruitment Nieuws**
- Top 3 van de week
- Push naar Notion knop
- Search functionaliteit
- Dropdown filter per onderwerp
- Priority categories
- Sources table

### **Over Frank**
- Hero met floating stats
- Expertise tags
- Certificeringen
- Werkervaring timeline
- Werkwijze uitleg
- Contact CTA

---

## 📱 **Responsive Design**

Volledige responsive ondersteuning:
- **Desktop:** lg breakpoints (1024px+)
- **Tablet:** md breakpoints (768px+)
- **Mobile:** sm breakpoints (<768px)

---

## 🔗 **Integraties**

### **Notion API**
De nieuws pagina heeft een volledige Notion integratie:
- Push artikelen naar Notion database
- Configureerbaar via modal
- Top 3 batch push
- Per-artikel push functionaliteit

---

## 👨‍💼 **Over**

Gebouwd voor **Recruitin** door Wouter Arts

S&PS BV - Frank Lenting  
Sourcing & Procurement Services

---

## 📄 **License**

© 2026 Recruitin / S&PS BV. Alle rechten voorbehouden.
