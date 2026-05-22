/* ============================================================
   PolSciPro — Political Science Exam Preparation Portal
   Premium Stylesheet — Apple × Notion × Linear × Stripe
   ============================================================ */

/* ============================================================
   CSS Variables / Design Tokens
   ============================================================ */
:root {
  /* Color Palette */
  --color-bg:            #0a0b0e;
  --color-bg-2:          #111318;
  --color-bg-3:          #181c24;
  --color-surface:       rgba(22, 26, 36, 0.85);
  --color-surface-raised: rgba(28, 33, 46, 0.92);
  --color-border:        rgba(255, 255, 255, 0.07);
  --color-border-subtle: rgba(255, 255, 255, 0.04);

  /* Text */
  --color-text-primary:  #e8eaf0;
  --color-text-secondary:#9aa0b8;
  --color-text-muted:    #5c6280;
  --color-text-accent:   #7c85ff;

  /* Accent / Brand */
  --color-accent:        #6c77ff;
  --color-accent-glow:   rgba(108, 119, 255, 0.18);
  --color-accent-soft:   rgba(108, 119, 255, 0.10);
  --color-accent-2:      #4fc3f7;
  --color-accent-2-soft: rgba(79, 195, 247, 0.10);

  /* Semantic Colors */
  --color-highlight:     #ffd36b;
  --color-highlight-soft:rgba(255, 211, 107, 0.10);
  --color-danger:        #ff6b6b;
  --color-danger-soft:   rgba(255, 107, 107, 0.10);
  --color-success:       #5cf59e;
  --color-success-soft:  rgba(92, 245, 158, 0.10);

  /* Special Lecture Colors */
  --color-kz:            rgba(79, 195, 247, 0.08);
  --color-kz-border:     rgba(79, 195, 247, 0.25);

  /* Gradients */
  --gradient-accent:     linear-gradient(135deg, #6c77ff 0%, #a78bfa 100%);
  --gradient-brand:      linear-gradient(135deg, #6c77ff 0%, #4fc3f7 100%);
  --gradient-header:     linear-gradient(180deg, #0d0f18 0%, #111622 100%);
  --gradient-card:       linear-gradient(145deg, rgba(28,33,46,0.9) 0%, rgba(18,22,32,0.95) 100%);
  --gradient-highlight:  linear-gradient(135deg, #ffd36b 0%, #ffb347 100%);
  --gradient-success:    linear-gradient(135deg, #5cf59e 0%, #4fc3f7 100%);
  --gradient-sidebar:    linear-gradient(180deg, #0c0e16 0%, #0e1120 100%);

  /* Shadows */
  --shadow-sm:           0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md:           0 4px 16px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3);
  --shadow-lg:           0 12px 40px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4);
  --shadow-xl:           0 24px 64px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5);
  --shadow-accent:       0 0 24px rgba(108, 119, 255, 0.2), 0 4px 16px rgba(0,0,0,0.4);
  --shadow-glow:         0 0 40px rgba(108, 119, 255, 0.15);

  /* Border Radius */
  --radius-xs:           4px;
  --radius-sm:           8px;
  --radius-md:           12px;
  --radius-lg:           16px;
  --radius-xl:           20px;
  --radius-2xl:          28px;
  --radius-full:         9999px;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Typography */
  --font-sans:    "Sora", "DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-display: "Playfair Display", "DM Serif Display", Georgia, serif;
  --font-mono:    "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* Sidebar */
  --sidebar-width:       260px;

  /* Transitions */
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast:  150ms;
  --duration-base:  250ms;
  --duration-slow:  400ms;
}

/* ============================================================
   Global Reset
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  line-height: 1.65;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Subtle background texture */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(ellipse 80% 60% at 20% 0%, rgba(108,119,255,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(79,195,247,0.04) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* Link base */
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-in-out);
}

/* Img */
img { display: block; max-width: 100%; }

/* Lists */
ul, ol { list-style: none; }

/* ============================================================
   Accessibility
   ============================================================ */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-xs);
}

/* ============================================================
   App Container
   ============================================================ */
.app-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ============================================================
   Header
   ============================================================ */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 11, 14, 0.85);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 1px 0 rgba(255,255,255,0.03), var(--shadow-sm);
}

.header-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

/* Brand */
.header-brand {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  flex-shrink: 0;
}

.site-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  line-height: 1;
}

.site-title .accent {
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.site-subtitle {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
  font-weight: 400;
  white-space: nowrap;
}

/* Header Controls */
.header-controls {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

/* ============================================================
   Search Bar
   ============================================================ */
.search-bar {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: border-color var(--duration-base) var(--ease-in-out),
              box-shadow var(--duration-base) var(--ease-in-out),
              background var(--duration-base) var(--ease-in-out);
}

.search-bar:focus-within {
  border-color: rgba(108, 119, 255, 0.4);
  background: rgba(108, 119, 255, 0.04);
  box-shadow: 0 0 0 3px rgba(108, 119, 255, 0.1), var(--shadow-sm);
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  padding: var(--space-2) var(--space-4);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  width: 260px;
  min-width: 0;
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

.search-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--space-2) var(--space-3);
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1;
  transition: color var(--duration-fast) var(--ease-in-out);
  display: flex;
  align-items: center;
}

.search-btn:hover {
  color: var(--color-accent);
}

/* ============================================================
   Theme Toggle
   ============================================================ */
.theme-toggle {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-text-secondary);
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast),
    transform var(--duration-fast);
  flex-shrink: 0;
}

.theme-toggle:hover {
  background: var(--color-accent-soft);
  border-color: rgba(108, 119, 255, 0.3);
  color: var(--color-accent);
  transform: rotate(20deg);
}

/* ============================================================
   Layout Wrapper
   ============================================================ */
.layout-wrapper {
  display: flex;
  flex: 1;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}

/* ============================================================
   Sidebar
   ============================================================ */
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  background: var(--gradient-sidebar);
  border-right: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(108,119,255,0.2) transparent;
}

.sidebar::-webkit-scrollbar {
  width: 4px;
}
.sidebar::-webkit-scrollbar-track { background: transparent; }
.sidebar::-webkit-scrollbar-thumb {
  background: rgba(108,119,255,0.2);
  border-radius: var(--radius-full);
}

/* Sidebar Nav */
.sidebar-nav {
  padding: 0 var(--space-3);
}

.nav-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--space-3) var(--space-3) var(--space-2);
  margin-bottom: var(--space-1);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: var(--space-6);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 450;
  color: var(--color-text-secondary);
  line-height: 1.4;
  transition:
    background var(--duration-fast) var(--ease-in-out),
    color var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-in-out);
  position: relative;
}

.nav-link:hover {
  background: rgba(108, 119, 255, 0.08);
  color: var(--color-text-primary);
  transform: translateX(2px);
}

.nav-link.active,
.nav-link:focus-visible {
  background: var(--color-accent-soft);
  color: var(--color-text-accent);
}

/* Highlighted nav links (lectures 9 & 10) */
.nav-link.nav-highlight {
  color: var(--color-accent);
}

.nav-link.nav-highlight::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
}

.nav-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: rgba(255,255,255,0.04);
  padding: 1px var(--space-1);
  border-radius: var(--radius-xs);
  flex-shrink: 0;
  letter-spacing: 0.05em;
  min-width: 24px;
  text-align: center;
}

.nav-link:hover .nav-num {
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

/* Sidebar Tools */
.sidebar-tools {
  border-top: 1px solid var(--color-border-subtle);
  padding-top: var(--space-4);
}

/* ============================================================
   Main Content
   ============================================================ */
.main-content {
  flex: 1;
  min-width: 0;
  padding: var(--space-8) var(--space-8) var(--space-20);
}

/* ============================================================
   Dashboard
   ============================================================ */
.dashboard {
  margin-bottom: var(--space-12);
}

.dashboard-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.dashboard-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--color-border);
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.dashboard-card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-1);
  position: relative;
  overflow: hidden;
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out),
    border-color var(--duration-base);
  cursor: default;
}

.dashboard-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(108,119,255,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.dashboard-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-accent);
  border-color: rgba(108, 119, 255, 0.2);
}

.card-icon {
  font-size: 1.6rem;
  line-height: 1;
  filter: drop-shadow(0 0 8px rgba(108,119,255,0.3));
}

.card-value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.card-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ============================================================
   Progress Tracker
   ============================================================ */
.progress-tracker {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.progress-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.progress-bar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
  height: 6px;
  overflow: hidden;
  margin-bottom: var(--space-5);
}

.progress-bar-fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
  transition: width 0.6s var(--ease-out);
  box-shadow: 0 0 12px rgba(108, 119, 255, 0.4);
}

.lecture-checklist {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.check-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--color-border-subtle);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast);
  user-select: none;
}

.check-item:hover {
  background: var(--color-accent-soft);
  border-color: rgba(108,119,255,0.25);
  color: var(--color-text-primary);
}

.check-item input[type="checkbox"] {
  accent-color: var(--color-accent);
  width: 14px;
  height: 14px;
  cursor: pointer;
}

/* ============================================================
   Lecture Sections
   ============================================================ */
.lecture-section {
  margin-bottom: var(--space-12);
  position: relative;
}

.lecture-section::before {
  content: "";
  position: absolute;
  left: -var(--space-8);
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent);
  opacity: 0.5;
}

/* Highlighted lectures (9 & 10) */
.lecture-highlight {
  position: relative;
}

.lecture-highlight::after {
  content: "";
  position: absolute;
  top: -var(--space-6);
  left: -var(--space-8);
  right: -var(--space-4);
  bottom: -var(--space-6);
  background: radial-gradient(ellipse 60% 30% at 50% 0%, rgba(108,119,255,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

/* ============================================================
   Lecture Header
   ============================================================ */
.lecture-header {
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border-subtle);
}

.lecture-number {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: var(--color-accent-soft);
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  border: 1px solid rgba(108,119,255,0.2);
  margin-bottom: var(--space-4);
}

.lecture-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

.lecture-tagline {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-style: italic;
  letter-spacing: 0.01em;
}

/* ============================================================
   Lecture Body & Summary
   ============================================================ */
.lecture-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.lecture-summary {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

.lecture-summary::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gradient-brand);
  opacity: 0.5;
}

.lecture-summary h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  letter-spacing: -0.01em;
}

.lecture-summary p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-3);
}

.lecture-summary p:last-child { margin-bottom: 0; }

/* ============================================================
   Concept Grid
   ============================================================ */
.concept-grid {
  /* Section heading */
}

.concept-grid h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-5);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.concept-grid h3::before {
  content: "";
  width: 4px;
  height: 1.15em;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}

/* Override grid for h3 inside grid */
.concept-grid > h3 {
  grid-column: 1 / -1;
  display: flex;
}

.concept-card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  position: relative;
  overflow: hidden;
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out),
    border-color var(--duration-base);
}

.concept-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-brand);
  opacity: 0;
  transition: opacity var(--duration-base);
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: rgba(108,119,255,0.2);
}

.concept-card:hover::after {
  opacity: 0.7;
}

.concept-card h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-accent);
  margin-bottom: var(--space-2);
  letter-spacing: -0.005em;
}

.concept-card p {
  font-size: 0.83rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.concept-card em {
  color: var(--color-highlight);
  font-style: normal;
  font-weight: 500;
}

/* ============================================================
   Scholar Grid & Cards
   ============================================================ */
.scholar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-4);
}

.scholar-grid > h3 {
  grid-column: 1 / -1;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.scholar-grid > h3::before {
  content: "";
  width: 4px;
  height: 1.15em;
  background: var(--gradient-highlight);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.scholar-card {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  position: relative;
  overflow: hidden;
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base),
    border-color var(--duration-base);
}

.scholar-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: var(--gradient-highlight);
  opacity: 0.7;
  border-radius: var(--radius-full) 0 0 var(--radius-full);
}

.scholar-card:hover {
  transform: translateY(-3px) translateX(1px);
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 211, 107, 0.15);
}

.scholar-card h4 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  letter-spacing: -0.01em;
}

.scholar-card p {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-2);
}

.scholar-card p:last-child { margin-bottom: 0; }

.scholar-card strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.scholar-card em {
  color: var(--color-accent-2);
  font-style: italic;
}

/* ============================================================
   Example Blocks
   ============================================================ */
.example-block {
  background: rgba(16, 19, 28, 0.7);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
  position: relative;
}

.example-block h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-5);
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.example-block h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: var(--space-6) 0 var(--space-3);
}

.example-block h4:first-child { margin-top: 0; }

.example-block p {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin-bottom: var(--space-3);
}

.example-block p:last-child { margin-bottom: 0; }

.example-block ul,
.example-block ol {
  margin-left: var(--space-5);
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.example-block ol { list-style: decimal; }

.example-block li {
  font-size: 0.87rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.example-block strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.example-block em { color: var(--color-accent-2); }

/* Kazakhstan Box */
.kazakhstan-box {
  background: var(--color-kz);
  border-color: var(--color-kz-border);
}

.kazakhstan-box h3 {
  color: var(--color-accent-2);
}

/* ============================================================
   Tables
   ============================================================ */
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.8rem;
  margin: var(--space-4) 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.comparison-table thead tr {
  background: rgba(108, 119, 255, 0.1);
}

.comparison-table th {
  padding: var(--space-3) var(--space-4);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  text-align: left;
  border-bottom: 1px solid rgba(108,119,255,0.2);
  white-space: nowrap;
}

.comparison-table td {
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border-subtle);
  vertical-align: top;
  line-height: 1.6;
}

.comparison-table tbody tr:last-child td {
  border-bottom: none;
}

.comparison-table tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.015);
}

.comparison-table tbody tr:hover {
  background: rgba(108, 119, 255, 0.04);
  transition: background var(--duration-fast);
}

.comparison-table strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.comparison-table em {
  color: var(--color-accent-2);
  font-style: italic;
}

/* Overflow scroll for small screens */
.example-block {
  overflow-x: auto;
}

.table-note {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  font-style: italic;
  margin-top: var(--space-3);
  padding-left: var(--space-3);
  border-left: 2px solid var(--color-border);
}

/* ============================================================
   Special Blocks
   ============================================================ */

/* Must Memorize */
.must-memorize {
  background: linear-gradient(145deg, rgba(255, 107, 107, 0.06) 0%, rgba(18, 22, 32, 0.95) 100%);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
  position: relative;
  overflow: hidden;
}

.must-memorize::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff6b6b, #ffb347);
}

.must-memorize h3 {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-danger);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.must-memorize ul {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.must-memorize li {
  font-size: 0.83rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  padding-left: var(--space-4);
  position: relative;
}

.must-memorize li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-danger);
  font-weight: 700;
  font-size: 0.75rem;
}

.must-memorize strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

/* Cheat Sheet */
.cheat-sheet {
  background: linear-gradient(145deg, rgba(108,119,255,0.06) 0%, rgba(14,18,28,0.95) 100%);
  border: 1px solid rgba(108,119,255,0.2);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
  position: relative;
}

.cheat-sheet::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-brand);
}

.cheat-sheet h3 {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.cheat-sheet ul {
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-2) var(--space-6);
}

.cheat-sheet li {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  padding-left: var(--space-4);
  position: relative;
}

.cheat-sheet li::before {
  content: "·";
  position: absolute;
  left: var(--space-1);
  color: var(--color-accent);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.6;
}

.cheat-sheet strong {
  color: var(--color-text-primary);
  font-weight: 700;
}

/* Mnemonics */
.mnemonics {
  background: linear-gradient(145deg, rgba(92,245,158,0.05) 0%, rgba(14,18,28,0.95) 100%);
  border: 1px solid rgba(92,245,158,0.15);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
  position: relative;
}

.mnemonics::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-success);
}

.mnemonics h3 {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-success);
  margin-bottom: var(--space-4);
}

.mnemonics p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.mnemonics p:last-child { margin-bottom: 0; }

.mnemonics strong {
  color: var(--color-success);
  font-weight: 700;
  font-family: var(--font-mono);
  font-size: 0.88em;
}

.mnemonics em {
  color: var(--color-text-primary);
  font-style: italic;
}

/* Rapid Review */
.rapid-review {
  background: linear-gradient(145deg, rgba(255,211,107,0.06) 0%, rgba(14,18,28,0.95) 100%);
  border: 1px solid rgba(255,211,107,0.15);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-6);
}

.rapid-review h3 {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-highlight);
  margin-bottom: var(--space-2);
}

.rapid-review p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.rapid-review strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

/* ============================================================
   Exam Questions
   ============================================================ */
.exam-questions {
  background: rgba(14, 18, 28, 0.6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-8);
}

.exam-questions h3 {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-highlight);
  margin-bottom: var(--space-5);
}

.exam-questions ol {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
  counter-reset: exam-counter;
}

.exam-questions li {
  font-size: 0.87rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  padding-left: var(--space-8);
  position: relative;
  counter-increment: exam-counter;
}

.exam-questions li::before {
  content: counter(exam-counter);
  position: absolute;
  left: 0;
  top: 2px;
  width: 22px;
  height: 22px;
  background: var(--color-highlight-soft);
  border: 1px solid rgba(255,211,107,0.25);
  border-radius: var(--radius-full);
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--color-highlight);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
}

/* Model Answer */
.model-answer {
  margin-top: var(--space-4);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.model-answer > summary {
  cursor: pointer;
  padding: var(--space-3) var(--space-5);
  background: rgba(255,255,255,0.03);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  letter-spacing: 0.01em;
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  transition: background var(--duration-fast), color var(--duration-fast);
  user-select: none;
}

.model-answer > summary::-webkit-details-marker { display: none; }

.model-answer > summary::before {
  content: "▶";
  font-size: 0.6rem;
  color: var(--color-accent);
  transition: transform var(--duration-base) var(--ease-out);
}

.model-answer[open] > summary::before {
  transform: rotate(90deg);
}

.model-answer > summary:hover {
  background: var(--color-accent-soft);
  color: var(--color-text-primary);
}

.model-answer-body {
  padding: var(--space-5) var(--space-6);
  background: rgba(8, 10, 18, 0.5);
  border-top: 1px solid var(--color-border-subtle);
}

.model-answer-body p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-3);
}

.model-answer-body p:last-child { margin-bottom: 0; }

.model-answer-body strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.model-answer-body em {
  color: var(--color-accent-2);
  font-style: italic;
}

/* ============================================================
   Flashcards
   ============================================================ */
.flashcard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-4);
}

.flashcard-grid > h3 {
  grid-column: 1 / -1;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.flashcard {
  position: relative;
  height: 160px;
  cursor: pointer;
  border-radius: var(--radius-lg);
  perspective: 1000px;
  transition: transform var(--duration-base) var(--ease-out);
}

.flashcard:hover {
  transform: translateY(-4px);
}

.flashcard-front,
.flashcard-back {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 0.55s var(--ease-out), box-shadow var(--duration-base);
}

.flashcard-front {
  background: linear-gradient(145deg, rgba(28,34,50,0.95) 0%, rgba(18,22,34,0.98) 100%);
  border: 1px solid rgba(108,119,255,0.2);
  box-shadow: var(--shadow-md), 0 0 0 1px var(--color-border-subtle);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.5;
}

.flashcard-front::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-brand);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  opacity: 0.6;
}

.flashcard-back {
  background: linear-gradient(145deg, rgba(108,119,255,0.12) 0%, rgba(18,22,38,0.98) 100%);
  border: 1px solid rgba(108,119,255,0.3);
  box-shadow: var(--shadow-accent);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  transform: rotateY(180deg);
}

/* Flipped state — toggled via JS adding .flipped class */
.flashcard.flipped .flashcard-front {
  transform: rotateY(-180deg);
}

.flashcard.flipped .flashcard-back {
  transform: rotateY(0deg);
}

/* ============================================================
   Quiz Section
   ============================================================ */
.quiz-section {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  margin-bottom: var(--space-12);
}

.quiz-section .section-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.quiz-intro {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
}

.quiz-question {
  background: rgba(10, 12, 20, 0.5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  margin-bottom: var(--space-4);
  transition: border-color var(--duration-base);
}

.quiz-question:hover {
  border-color: rgba(108,119,255,0.2);
}

.quiz-prompt {
  font-size: 0.9rem;
  color: var(--color-text-primary);
  line-height: 1.65;
  margin-bottom: var(--space-4);
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: 0.84rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition:
    background var(--duration-fast),
    color var(--duration-fast);
  margin-bottom: var(--space-1);
}

.quiz-option:hover {
  background: var(--color-accent-soft);
  color: var(--color-text-primary);
}

.quiz-option input[type="radio"] {
  accent-color: var(--color-accent);
  width: 15px;
  height: 15px;
  cursor: pointer;
  flex-shrink: 0;
}

.quiz-check-btn {
  margin-top: var(--space-4);
  padding: var(--space-2) var(--space-5);
  background: var(--color-accent-soft);
  border: 1px solid rgba(108,119,255,0.3);
  border-radius: var(--radius-full);
  color: var(--color-accent);
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    color var(--duration-fast),
    transform var(--duration-fast);
}

.quiz-check-btn:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
  transform: translateY(-1px);
}

.quiz-check-btn:active {
  transform: translateY(0);
}

.quiz-feedback {
  margin-top: var(--space-3);
  font-size: 0.82rem;
  font-weight: 600;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
}

.quiz-feedback.correct {
  background: var(--color-success-soft);
  color: var(--color-success);
  border: 1px solid rgba(92,245,158,0.2);
}

.quiz-feedback.incorrect {
  background: var(--color-danger-soft);
  color: var(--color-danger);
  border: 1px solid rgba(255,107,107,0.2);
}

/* ============================================================
   Global Cheat Sheet Section
   ============================================================ */
.cheat-sheet-global {
  margin-bottom: var(--space-12);
}

.cheat-sheet-global .section-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.cheat-sheet-global .section-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--color-border);
}

.cheat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
}

.cheat-block {
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base);
}

.cheat-block:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cheat-block h3 {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}

.cheat-block ul {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.cheat-block li {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  padding-left: var(--space-3);
  position: relative;
}

.cheat-block li::before {
  content: "·";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
}

.cheat-block strong {
  color: var(--color-text-secondary);
  font-weight: 600;
}

/* ============================================================
   Button System
   ============================================================ */
button {
  font-family: var(--font-sans);
  cursor: pointer;
  border: none;
}

/* Primary Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--gradient-accent);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition:
    opacity var(--duration-fast),
    transform var(--duration-fast),
    box-shadow var(--duration-fast);
  box-shadow: 0 4px 16px rgba(108,119,255,0.3);
}

.btn-primary:hover {
  opacity: 0.92;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(108,119,255,0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* ============================================================
   Back to Top / Footer
   ============================================================ */
.site-footer-bottom {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  padding: var(--space-8) 0;
  margin-top: auto;
}

.footer-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  text-align: center;
}

.footer-text {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: var(--color-accent-soft);
  border: 1px solid rgba(108,119,255,0.2);
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-top: var(--space-3);
  transition:
    background var(--duration-fast),
    border-color var(--duration-fast),
    transform var(--duration-fast);
}

.back-to-top:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
  transform: translateY(-2px);
}

/* ============================================================
   Google Fonts Import
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=JetBrains+Mono:wght@400;500;700&display=swap');

/* ============================================================
   Animations
   ============================================================ */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(108,119,255,0); }
  50%       { box-shadow: 0 0 20px 4px rgba(108,119,255,0.15); }
}

.lecture-section {
  animation: fadeInUp 0.5s var(--ease-out) both;
}

.dashboard-card {
  animation: fadeInUp 0.4s var(--ease-out) both;
}

.dashboard-card:nth-child(2) { animation-delay: 50ms; }
.dashboard-card:nth-child(3) { animation-delay: 100ms; }
.dashboard-card:nth-child(4) { animation-delay: 150ms; }
.dashboard-card:nth-child(5) { animation-delay: 200ms; }
.dashboard-card:nth-child(6) { animation-delay: 250ms; }

.lecture-highlight .lecture-number {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* ============================================================
   Scrollbar (global)
   ============================================================ */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: rgba(108,119,255,0.25);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(108,119,255,0.45);
}

/* ============================================================
   Responsive — Tablet (≤1024px)
   ============================================================ */
@media (max-width: 1024px) {
  :root {
    --sidebar-width: 220px;
  }

  .header-inner {
    padding: 0 var(--space-4);
  }

  .main-content {
    padding: var(--space-6) var(--space-6) var(--space-16);
  }

  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .search-input {
    width: 180px;
  }

  .site-subtitle {
    display: none;
  }

  .cheat-sheet ul {
    grid-template-columns: 1fr;
  }
}

/* ============================================================
   Responsive — Mobile (≤768px)
   ============================================================ */
@media (max-width: 768px) {
  .layout-wrapper {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
    border-right: none;
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-4) 0;
    overflow-x: auto;
    overflow-y: visible;
  }

  .sidebar-nav {
    display: flex;
    gap: var(--space-6);
    padding: 0 var(--space-4);
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
  }

  .sidebar-nav::-webkit-scrollbar { display: none; }

  .nav-list {
    flex-direction: row;
    gap: var(--space-1);
    margin-bottom: 0;
    flex-wrap: nowrap;
  }

  .nav-link {
    flex-shrink: 0;
    white-space: nowrap;
  }

  .sidebar-tools {
    border-top: none;
    border-left: 1px solid var(--color-border);
    padding-top: 0;
    padding-left: var(--space-6);
  }

  .nav-label {
    display: none;
  }

  .main-content {
    padding: var(--space-5) var(--space-4) var(--space-12);
  }

  .header-inner {
    padding: 0 var(--space-4);
    height: 56px;
  }

  .site-title {
    font-size: 1.2rem;
  }

  .search-input {
    width: 130px;
    font-size: 0.8rem;
  }

  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-3);
  }

  .dashboard-card {
    padding: var(--space-4);
  }

  .card-value {
    font-size: 1.3rem;
  }

  .lecture-title {
    font-size: 1.35rem;
  }

  .lecture-summary,
  .example-block,
  .must-memorize,
  .cheat-sheet,
  .mnemonics,
  .exam-questions {
    padding: var(--space-5);
  }

  .concept-grid {
    grid-template-columns: 1fr;
  }

  .scholar-grid {
    grid-template-columns: 1fr;
  }

  .flashcard-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .flashcard {
    height: 140px;
  }

  .quiz-section {
    padding: var(--space-5);
  }

  .cheat-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    padding: 0 var(--space-5);
  }

  .comparison-table {
    font-size: 0.75rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: var(--space-2) var(--space-3);
  }
}

/* ============================================================
   Responsive — Small Mobile (≤480px)
   ============================================================ */
@media (max-width: 480px) {
  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .dashboard-card {
    padding: var(--space-3);
  }

  .card-value {
    font-size: 1.1rem;
  }

  .card-icon {
    font-size: 1.2rem;
  }

  .card-label {
    font-size: 0.6rem;
  }

  .flashcard-grid {
    grid-template-columns: 1fr;
  }

  .flashcard {
    height: 120px;
  }

  .search-bar {
    display: none;
  }

  .lecture-checklist {
    flex-direction: column;
  }
}

/* ============================================================
   Print Styles
   ============================================================ */
@media print {
  .sidebar,
  .site-header,
  .back-to-top,
  .quiz-section {
    display: none !important;
  }

  body {
    background: #fff;
    color: #111;
    font-size: 11pt;
  }

  .main-content {
    padding: 0;
  }

  .lecture-section {
    page-break-before: always;
  }
}
