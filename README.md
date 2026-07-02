# ☕ Dheek-cafe

> **Crafted with Passion. Brewed to Perfection.**
> A premium, award-winning boutique sensory experience website built for **Dheek-cafe**—competing at the standard of Awwwards, CSS Design Awards, and FWA.

---

## 🌟 Brand Identity & Aesthetic

**Dheek-cafe** represents the absolute pinnacle of luxury coffee, blending botanical science with meticulous roasting mastery. 

The website's visual language is tailored to reflect this premium status:
- **Color Palette**: Deep dark chocolates (`#110906`), velvety espresso brown tones, luxurious warm creams, and ambient gold/copper accents.
- **Typography**: Editorial, high-contrast pairing of *Cormorant Garamond* (a serif font representing prestige and heritage) and *Outfit* (a modern, clean geometric sans-serif).
- **Smooth Kinetics**: Native Lenis smooth scrolling paired with heavy, premium cubic-bezier timing curves (`ease-[cubic-bezier(0.16,1,0.3,1)]`) for a weightier, luxury feel.

---

## 🎨 Implemented Features & Interactions

### 1. Global Looping Background Video
- Integrates a custom Firefly-generated luxury coffee cinematic video (`coffe-video.mp4`) as a global background layer.
- Loops smoothly behind all transparent sections at a subtle `35%` opacity, protected by a center-lit radial dark mask overlay to keep typography razor-sharp and highly legible.

### 2. Scroll-Linked Background Cross-Fading
- Utilizes the **`IntersectionObserver` API** to dynamically track scroll position.
- Cross-fades (0s-1000ms easing opacity shifts) between three custom landscape backdrops matching your coffee scenes:
  - **Featured Collection**: Coffee beans pouring from a rustic burlap sack.
  - **Our Story / About**: A golden espresso group head pulling rich crema.
  - **Menu & Contact**: A matte black cup of latte art surrounded by scattered beans.

### 3. Responsive Component Layouts (14 Sections)
1. **Navbar**: Sticky glassmorphic bar, custom Monogram DC SVG logo, and responsive mobile nav drawer.
2. **Hero**: Dual CTA buttons, floating coffee beans, rising steam animations, and a GSAP mouse-parallax cup.
3. **Featured Collection**: Rare beans micro-lots (Panama Geisha, Ethiopian Yirgacheffe, Sumatra Mandheling) with tasting badges, altitude notes, and custom SCCA ratings.
4. **Best Sellers**: Velvety gold-bordered cards displaying ratings, review counts, and quick-add actions.
5. **Our Story (About)**: Overlapping image grids detailing the brand's sourcing philosophy.
6. **Why Choose Us**: Value grids showcasing ethical sourcing, micro-roasting, and Certified Q-Graders.
7. **Boutique Menu**: Category filter tabs (Espressos, Lattes, Cold Brews, Desserts) powered by Framer Motion transitions.
8. **Brewing Process**: Vertical timeline chronological steps fading on scroll.
9. **Testimonials**: Touch-friendly Swiper.js carousel displaying client reviews inside glassmorphic cards.
10. **Gallery**: Lightbox-enabled photo grid showing roasting, extraction, and origin farm details.
11. **FAQ**: Expanding height accordions built using Framer Motion's `AnimatePresence`.
12. **Newsletter**: High-contrast newsletter signup box.
13. **Contact Details & Live Map**: Details list, a live Google Maps embed, and an interactive feedback form.
14. **Footer**: Concierge concierge input boxes and shortcut navigation.

### 4. Interactive Card Lifts & Glows
- Hovering over any product card, testimonial card, or contact detail card triggers a smooth translation lift (`hover:-translate-y-1`) and throws an ambient gold shadow aura (`hover:shadow-[0_0_30px_rgba(205,164,94,0.08)]`).
- Form inputs glow softly with golden focus borders.

### 5. Serverless Live Email Delivery
- The **Get in Touch** form is connected directly to the serverless FormSubmit API.
- All submissions (Visitor Name, Email, and Message) are dispatched directly to **`dheekshithnaidu@gmail.com`** via background AJAX POST requests, displaying an inline validation success screen.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/) (Vite 8.x)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@import "tailwindcss"` and direct theme configurations inside `@theme` directive in `index.css`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started (Local Setup)

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Install Dependencies
Navigate to the root directory and install node modules:
```bash
npm install
```

### 2. Start Development Server
Run the local dev server:
```bash
npm run dev
```
Open your browser and navigate to: **[http://localhost:5173/](http://localhost:5173/)**

### 3. Build for Production
To bundle and optimize the project for production deployment:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready to be hosted.
