# ☕ Dheek-cafe

> **Crafted with Passion. Brewed to Perfection.**
> A premium, award-winning boutique sensory experience website built for **Dheek-cafe**—competing at the standard of Awwwards, CSS Design Awards, and FWA.
> 
> 🔗 **Live Demo:** [https://dheek-cafe.vercel.app/](https://dheek-cafe.vercel.app/)

---

## 🌟 Brand Identity & Aesthetic

**Dheek-cafe** represents the absolute pinnacle of luxury coffee, blending botanical science with meticulous roasting mastery. 

The website's visual language is tailored to reflect this premium status:
- **Color Palette**: Deep dark chocolates (`#110906`), velvety espresso brown tones, luxurious warm creams, and ambient gold/copper accents.
- **Typography**: Editorial, high-contrast pairing of *Cormorant Garamond* (a serif font representing prestige and heritage) and *Outfit* (a modern, clean geometric sans-serif).
- **Smooth Kinetics**: Native Lenis smooth scrolling paired with heavy, premium cubic-bezier timing curves (`ease-[cubic-bezier(0.16,1,0.3,1)]`) for a weightier, luxury feel.

---

## 🎨 Implemented Features & Interactions

### 1. Interactive 3D Splash Screen & Flyer Transition
- **3D Circular Brand Card**: Displays a centrally floating circular logo card on page load, with gold borders and a perfectly fitted brand mark.
- **3D Mouse Tilt Physics**: Moving your cursor over the logo card triggers real-time X/Y rotation tilt, making it behave as a tangible 3D card.
- **Ghost Flyer flight**: Clicking the splash card morphs it into a rectangle card, spinning it Y-axis $360^\circ$ and flying it to the target Hero section slot with a power-weighted landing.
- **Progressive Staggered Reveal**: Layout elements load in clean 1-second intervals after the card lands:
  - **0.0s**: 3D card lands in the Hero slot.
  - **1.0s**: Left-side Title and Subtitle fade in.
  - **2.0s**: Left-side description, CTA buttons, and altitude counters fade in.
  - **3.0s**: Top header **Navbar** fades in cleanly.
  - **4.0s**: Floating background canvas coffee seeds/beans and all remaining page sections load in.

### 2. Canvas Falling Coffee Beans (Interactive Particle System)
- Integrates a lightweight **HTML5 Canvas particle background** rendering a mixture of gold and espresso-colored coffee beans.
- **Scroll-Velocity Responsive**: The beans fall faster dynamically in response to scroll velocity.
- **Mouse-Repel Physics**: The coffee seeds calculate distances from the mouse cursor in real-time, gently dodging away when the mouse approaches.

### 3. Overlapping 3D Flippable Cards (Sourcing the Extravagant)
- Features two overlapping image cards in the **About** section.
- **Scroll 3D Flip Entrance**: The cards perform a staggered 3D Y-axis flip rotation from $180^\circ$ to $0^\circ$ when scrolled into view.
- **Click-to-Flip Narrative**: Clicking either card flips it $180^\circ$ around the Y-axis to reveal detailed roastery profiling and concierge extraction logs on the back of the card.

### 4. Interactive Card Shufflings & Flips
- **Why Choose Us Card Shuffling**: Cards perform a staggered, scattered "card shuffle" layout entrance, sliding and rotating into their columns from left, right, top, and bottom.
- **Menu & Gallery 3D Flips**: Scrolling into the **Boutique Menu** and **Gallery** triggers a dynamic, staggered Y-axis 3D flip-in entrance.

### 5. Global Background Video & Cross-Fades
- Integrates a custom luxury coffee background video loop, dimmed with a dark vignette mask for readability.
- Cross-fades between three custom backdrops on scroll via the **`IntersectionObserver` API**:
  - **Featured Collection / Best Sellers**: Pouring beans.
  - **Our Story / About / Brewing**: Golden extraction.
  - **Menu / Gallery / FAQ / Contact**: Latte art.

### 6. Custom FAQ Accordions
- Responsive accordion cards covering tailored topics:
  - **"Sell or Not"** wholesale and retail distribution.
  - **"Membership"** Dheek Cellar Club member benefits.
  - **"Let us Know"** feedback and direct roasting team communication.

### 7. Serverless Live Email Delivery
- The **Get in Touch** form is connected directly to the serverless FormSubmit API.
- All submissions (Visitor Name, Email, and Message) are dispatched directly to **`dheekshithnaidu@gmail.com`** via background AJAX POST requests.

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
Open your browser and navigate to: **[http://localhost:5173/](http://localhost:5173/)** (or visit the live deployment at **[https://dheek-cafe.vercel.app/](https://dheek-cafe.vercel.app/)**)

### 3. Build for Production
To bundle and optimize the project for production deployment:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready to be hosted.
