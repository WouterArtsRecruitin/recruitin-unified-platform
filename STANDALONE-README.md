# 🚀 Recruitin Standalone Recruitment News App

**Een volledig standalone recruitment nieuws applicatie met 203 artikelen en Notion integratie**

![Version](https://img.shields.io/badge/Version-2.0-purple) ![Articles](https://img.shields.io/badge/Articles-203-blue) ![Categories](https://img.shields.io/badge/Categories-12-green)

---

## 📋 **Overzicht**

Dit is een **volledig standalone versie** van de Recruitin Recruitment Nieuws applicatie. Los van het unified platform, met een eigen modern purple gradient design.

### **✨ Features**

- 🎨 **Modern Purple Gradient Design** - Compleet eigen branding
- 📰 **203 Echte Artikelen** - Alle recruitment nieuws artikelen
- 🔍 **Real-time Search** - Instant zoeken door alle artikelen
- 📂 **12 Categorieën** - Gefilterd op onderwerp met badges
- 📌 **Notion Integratie** - Directe API koppeling met Notion
- ⚡ **Lightning Fast** - Geen dependencies, pure vanilla JS
- 📱 **Fully Responsive** - Werkt perfect op alle devices
- 🎯 **Zero Setup** - Open HTML bestand en klaar!

---

## 🗂️ **Bestanden**

```
📦 Standalone News App
├── 📄 standalone-recruitment-news.html    # Hoofd HTML bestand
├── 📄 news-data.js                       # Alle 203 artikelen data
├── 📄 news-app.js                        # JavaScript logica + Notion API
└── 📄 STANDALONE-README.md               # Deze readme
```

---

## 🚀 **Gebruik**

### **Optie 1: Direct Openen**
1. Open `standalone-recruitment-news.html` in je browser
2. ✅ Klaar! De app werkt direct

### **Optie 2: Local Server**
```bash
# Met Python
python -m http.server 8000

# Met Node
npx http-server -p 8000
```

Open browser: `http://localhost:8000/standalone-recruitment-news.html`

### **Optie 3: GitHub Pages (LIVE)**

✅ **Direct beschikbaar op:**

```
https://wouterartsrecruitin.github.io/recruitin-unified-platform/standalone-recruitment-news.html
```

---

## 🎨 **Design Specificaties**

### **Kleurenpalet**
- **Primary Gradient**: `#667eea → #764ba2` (Purple)
- **Accent Gradient**: `#f093fb → #f5576c` (Pink)
- **Background**: `#f8f9fa → #faf5ff` (Soft purple gradient)
- **Text**: `#1a1a1a` (Dark gray)

### **Typography**
- **Font**: Inter (Google Fonts)
- **Headers**: 900 weight (Black)
- **Body**: 400-600 weight (Regular-Semibold)

---

## 📌 **Notion Integratie Setup**

### **Stap 1: Maak een Notion Integration**
1. Ga naar [Notion Integrations](https://www.notion.so/my-integrations)
2. Klik op **"+ New integration"**
3. Geef je integratie een naam (bijv. "Recruitin News")
4. Kopieer de **Internal Integration Token** (`secret_...`)

### **Stap 2: Maak een Database**
1. Open Notion en maak een nieuwe database
2. Voeg deze properties toe:
   - **Titel** (Title)
   - **URL** (URL)
   - **Categorie** (Select)
   - **Bron** (Text)
   - **Datum** (Date)

### **Stap 3: Deel Database met Integration**
1. Open je database in Notion
2. Klik op **"..."** (rechtsboven)
3. Klik op **"Add connections"**
4. Selecteer je integratie

### **Stap 4: Vind Database ID**
Open je database en kopieer het ID uit de URL:
```
https://notion.so/myworkspace/abc123def456?v=...
                            ↑↑↑↑↑↑↑↑↑↑↑↑
                            Dit is je Database ID
```

### **Stap 5: Configureer in App**
1. Klik op **"Push naar Notion"** knop
2. Plak je **API Key** (`secret_...`)
3. Plak je **Database ID**
4. Klik **"Opslaan & Verbinden"**

✅ **Klaar!** Je kunt nu artikelen naar Notion pushen!

---

## 🎯 **Functies**

### **🔍 Zoeken**
- Type in de zoekbalk
- Zoekt in: titel, beschrijving, categorie, bron
- Real-time filtering
- **Sneltoets**: `Ctrl/Cmd + K`

### **📂 Filteren**
- Klik op een categorie badge
- Combineer met zoeken
- Reset met **"Reset filters"** knop

### **📌 Notion Push**
- **Per artikel**: Klik op 📌 knop bij elk artikel
- Toast notifications voor feedback

### **⌨️ Keyboard Shortcuts**
- `Ctrl/Cmd + K` - Focus search
- `Escape` - Sluit modal

---

## 📊 **Data Structuur**

### **Artikel Object**
```javascript
{
  title: 'Artikel titel',
  description: 'Beschrijving met HTML',
  url: 'https://example.com',
  source: 'Bron naam',
  category: 'Categorie naam',
  date: '9 jan 2026',
  isPriority: true/false
}
```

### **Categorieën (12 totaal)**
1. ⚠️ Technisch Personeel Tekort & Personeelskrapte
2. 🤖 Automation & Engineering Recruitment
3. 💰 Salarissen & Arbeidsvoorwaarden Techniek 2026
4. 🚀 AI & Recruitment Tech Trends 2026
5. 📊 HR Trends & Arbeidsmarkt 2026
6. ⚡ Elektrotechniek & Installatietechniek
7. ⚙️ Werktuigbouwkunde & Mechanical Engineering
8. 🏭 Manufacturing & Industrial Recruitment
9. 🗺️ Regionale Arbeidsmarkten
10. 🌱 Duurzame Energie & Toekomst
11. 💻 IT & Software Development
12. 🔐 Cybersecurity & Data Science

---

## 🔧 **Customization**

### **Kleuren Aanpassen**
Edit in HTML `<style>` sectie:
```css
.gradient-bg {
    background: linear-gradient(135deg, #jouwkleur1 0%, #jouwkleur2 100%);
}
```

### **Artikelen Toevoegen**
Edit `news-data.js`:
```javascript
newsData.categories[0].articles.push({
  title: 'Nieuw artikel',
  description: 'Beschrijving',
  url: 'https://...',
  source: 'Bron',
  date: 'Datum'
});
```

---

## 🌐 **Browser Support**

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

---

## 📈 **Performance**

- ⚡ **Load Time**: < 1s
- 🎯 **No Dependencies**: Alleen Tailwind CDN
- 💾 **Size**: ~150KB totaal
- 🔄 **LocalStorage**: Notion config opslag

---

## 🐛 **Troubleshooting**

### **Notion API Error: "Invalid API Key"**
→ Controleer of je API key begint met `secret_`

### **Notion API Error: "Object not found"**
→ Check of de database gedeeld is met je integration

### **Artikelen laden niet**
→ Controleer of `news-data.js` correct geladen is in de browser console

### **Search werkt niet**
→ Clear browser cache en herlaad de pagina

---

## 🚀 **Deployment**

### **GitHub Pages** ✅ LIVE
1. Upload bestanden naar GitHub repo
2. Enable GitHub Pages in Settings → Pages
3. Source: `main` branch
4. Klaar! ✅

**Live URL:**
```
https://wouterartsrecruitin.github.io/recruitin-unified-platform/standalone-recruitment-news.html
```

### **Netlify**
1. Drag & drop bestanden naar Netlify
2. Instant deploy ✅

### **Vercel**
```bash
vercel deploy
```

---

## 📝 **Licentie**

© 2026 Recruitin / S&PS BV. Alle rechten voorbehouden.

---

## 👨‍💻 **Contact**

**Recruitin**  
Website: [recruitin.nl](https://recruitin.nl)  
Email: info@recruitin.nl

**S&PS BV**  
Frank Lenting  
Email: frank@snps.nl  
Tel: +31 6 13072174

---

## 🎉 **Changelog**

### **v2.0** - 16 jan 2026
- ✨ Volledig nieuwe standalone versie
- 📰 203 artikelen toegevoegd
- 📌 Notion API integratie
- 🎨 Modern purple gradient design
- 🔍 Real-time search functionaliteit
- 📱 Fully responsive
- 🌐 GitHub Pages deployment

### **v1.0** - Unified platform versie
- Initial release met React/TypeScript

---

**Happy Recruiting! 🚀**
