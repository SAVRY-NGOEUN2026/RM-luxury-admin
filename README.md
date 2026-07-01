# 👑 RM Luxury - Admin Dashboard

Admin panel for the **RM Luxury** clothing e-commerce site (`rm-luxury-project`), built by following the structure and style of the **Matcha-Time Admin** template.

## ✨ Features

- **📊 Dashboard:** Revenue chart, order/product/customer stats, top selling styles pulled from the real product catalog.
- **🛍️ Products:** Add, browse, filter (Women / Men), search, and delete styles. Matches the storefront's data model (category, tag, gender, price, old price, Sale/New badge, colors, rating).
- **📦 Orders:** Order list with customer, city, items, total, status, and pagination.
- **📝 Content Management System (CMS):**
  - Header & Hero (brand title, hero label/title/description, hero stats, hero images for Women/Men)
  - Announcement Bar & Promo (top bar message, scrolling announcement messages, promo code)
  - Trust Bar & Stats (the 4 trust badges + stats strip)
  - Newsletter (Join the Family section)
  - Footer & Contact (description, address, email, copyright)
- **🖼️ Gallery:** Grid of every product image already used on the storefront (main + alt shots).
- **💬 Messages:** Inbox-style customer inquiries about sizing, promo codes, shipping, etc.
- **⚙️ Settings:** Admin profile, currency/timezone, shipping threshold, accepted payments (VISA/ABA/KHQR), notifications, security.

## 🛠️ Technology Stack

- **React 19** (Vite)
- **Tailwind CSS 4**
- **Lucide React** (icons)
- **Recharts** (revenue chart)
- **React Router DOM** (HashRouter, same pattern as Matcha-Time Admin)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the local server address (usually `http://localhost:5173`).

**Demo login:** `admin / 1234`

## 📁 Notes

- `src/data/products.js` is the real `js/data.js` from `rm-luxury-project`, exposed as ES module exports (`womenProducts`, `menProducts`, `allProducts`, `heroWomenImages`, `heroMenImages`) so the Dashboard, Products, and Gallery pages show the actual RM Luxury catalog and images.
- This is a front-end demo/admin UI: form submissions currently update local React state only. Wire the "Save" buttons up to your backend/API when ready.

---
*Built as a companion admin panel for the RM Luxury storefront, following the Matcha-Time Admin Dashboard template.*
