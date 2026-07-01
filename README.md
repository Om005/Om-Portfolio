# Interactive 3D Developer Portfolio

A premium, highly interactive 3D Developer Portfolio website built using Next.js (App Router), React, TypeScript, Tailwind CSS, GSAP, and Spline.

## 🚀 Key Features

* **Interactive 3D Keyboard Scene:** Rendered using `@splinetool/react-spline` and animated using GSAP. 
  * As you scroll, the keyboard transitions smoothly between different viewport layouts.
  * Clicking/pressing keycaps displays matching skills and detailed descriptions on the keyboard's integrated screen, complete with authentic mechanical keyboard audio feedback.
* **Progressive Performance Profile:** Automatically profiling device capabilities to adjust particle counts and toggle 3D rendering modes dynamically.
* **Reduced Motion Grid Fallback:** When low performance or reduced motion mode is active, the site swaps the WebGL canvas with a responsive grid layout.
* **Premium Typography & Custom Cursors:** Styled using Outfits/Inter Google fonts, custom elastic pointer tracking, and performance-optimised background particle fields.
* **Dynamic About Page (`/about`):** Contains professional details, photo layouts, and live competitive programming profile cards (fetching stats like solved problems and peak ratings for LeetCode, Codeforces, and CodeChef).
* **Dedicated Projects Grid (`/projects` & `/project/[id]`):** Replicating the home portfolio layout with scrolling previews, image slideshow carousels, and dual Floating Docks mapping frontend/backend technology stacks.
* **Direct Web3Forms Integration:** Secure, zero-server contact form submission using the Web3Forms API and public access keys.
* **Fluid Theme Toggle:** Direct light/dark theme switching utilizing circular clipping mask expansion transitions.
* **Interactive Online Resume (`/resume`):** Featuring an online visualizer alongside a dedicated, click-propagation-safe PDF downloader.

---

## 🛠️ Technology Stack

* **Frontend Framework:** Next.js 15+ (App Router)
* **Programming Language:** TypeScript
* **Styling & Theme:** Tailwind CSS & Next Themes
* **3D Design & Engine:** Spline Tool (`@splinetool/react-spline`)
* **Animation Libraries:** GSAP (ScrollTrigger), Framer Motion (`motion/react`)
* **Smooth Scrolling:** Lenis
* **Icons:** Lucide React, Simple Icons, React Icons
* **Form Validation:** Zod
* **Deployments & Pipelines:** Web3Forms API (email forwarding)

---

## 📁 Directory Structure

```
├── public/                       # Static assets (images, logos, resume PDF, spline models)
├── src/
│   ├── app/                      # Next.js App Router pages and API routes
│   │   ├── about/                # Developer bio & CP stats route
│   │   ├── api/                  # Backend endpoints (email sender, etc.)
│   │   ├── blogs/                # Personal development logs
│   │   ├── projects/             # Dedicated works case-studies list
│   │   ├── resume/               # PDF viewer and downloader route
│   │   └── page.tsx              # Main entry point (Hero, Experience, Contact wrapper)
│   ├── components/               # Reusable React components
│   │   ├── header/               # Fixed navigation header
│   │   ├── sections/             # Home page section components (Skills, Projects, etc.)
│   │   ├── theme/                # Custom theme toggler
│   │   └── ui/                   # Generic styled components (Cards, Inputs, Buttons)
│   ├── data/                     # Local data definitions (constants, projects, experience config)
│   ├── hooks/                    # Custom React hooks (perf profiling, media queries)
│   └── lib/                      # Helper utilities and CN class merging configuration
├── package.json                  # Dependencies configuration
└── next.config.mjs               # Next.js routing and optimization settings
```

---

## ⚙️ Configuration & Environment Variables

Create a `.env` or `.env.local` file in the root directory and add the following keys:

```env
# Web3Forms form token
NEXT_PUBLIC_FORM_ACCESS_KEY=your_web3forms_access_key

# Resend API Key (Optional fallback)
RESEND_API_KEY=re_your_resend_api_key
```

To configure your personal details, links, and competitive programming usernames, edit the following configuration files:
* **Global Config:** [`src/data/config.ts`](src/data/config.ts)
* **Skills List:** [`src/data/constants.ts`](src/data/constants.ts)
* **Projects Database:** [`src/data/projects.tsx`](src/data/projects.tsx)

---

## 💻 Local Setup & Development

First, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the Development Server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

3. **Type-Check and Build:**
   Validate TypeScript compilation:
   ```bash
   pnpm exec tsc --noEmit
   ```
   Compile the optimized production bundle:
   ```bash
   pnpm build
   ```

4. **Start Production Server:**
   ```bash
   pnpm start
   ```

---

## 💳 Credits

This project was built from and inspired by the original design in the [Naresh-Khatri/3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) repository.
