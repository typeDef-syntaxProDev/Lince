# LINCE — Sportswear Store

E-commerce landing page for **Lince**, a women's sportswear brand. The site showcases the new collection of sports sets with an elegant, minimalist, and fully responsive design.

---

## Preview

### Home
The main page displays a full-screen hero image and a grid with products from the new collection.

### Product Detail
Each product has its own view with image, name, price, size selector, and a purchase button that redirects to WhatsApp with a predefined message.

---

## Features

- **Responsive design** — Adapts to mobile and desktop devices using media queries.
- **Dynamic navigation** — Products are loaded dynamically based on the `id` parameter in the URL.
- **WhatsApp integration** — The "Buy" button generates an automatic message with the selected product and size.
- **Interactive size selector** — Allows choosing between S, M, and L with visual feedback.
- **Elegant serif typography** — Uses Google Fonts (GFS Didot) for a premium aesthetic.
- **Modular CSS** — Styles separated into files by responsibility (`base`, `layout`, `components`, `home`, `product`).

---

## Technologies

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure of the site |
| **CSS3** | Styles, grid layout, flexbox, transitions, and responsive design |
| **JavaScript (Vanilla)** | Product logic, dynamic rendering, and WhatsApp integration |
| **Google Fonts** | GFS Didot typography |

---

## Project structure

```
Lince/
├── index.html                  # Página principal (home)
├── pages/
│   └── product.html            # Página de detalle de producto
├── assets/
│   ├── css/
│   │   ├── base.css            # Reset, variables CSS y estilos globales
│   │   ├── layout.css          # Footer y estructura general
│   │   ├── components.css      # Cards, botones y elementos reutilizables
│   │   ├── home.css            # Estilos específicos del home
│   │   └── product.css         # Estilos de la vista de producto
│   ├── js/
│   │   └── product.js          # Lógica: datos, renderizado, talles y compra
│   └── images/
│       ├── hero.jpeg
│       ├── brand_logo.jpeg
│       ├── logo.ico
│       └── products/
│           ├── black_top.jpeg
│           ├── grey_top.jpeg
│           └── pink_top.jpeg
└── README.md
```