# UNIVERSAL SERVICE WEBSITE REQUIREMENTS (2026)

## PURPOSE

This document defines the universal architecture, design direction, frontend standards, UX principles, and configuration requirements for building premium multi-page service websites.

The goal is to create scalable, modern, high-end websites for different service industries while maintaining:

- premium visual quality
- maintainable architecture
- reusable structure
- scalable configuration system
- strong UX/UI consistency
- modern 2026 design standards

This system should work for:

- locksmith
- roofing
- HVAC
- plumbing
- pest control
- electrical
- restoration
- windows & doors
- remodeling
- automotive
- legal/service lead-gen
- local service brands
- affiliate / aggregator service brands

---

# CORE STACK

Core technologies:

- HTML5
- CSS3
- Vanilla JavaScript

Avoid:

- React
- Vue
- Angular
- heavy frontend frameworks
- unnecessary build systems
- Sass/Less unless absolutely required

The project should remain lightweight, maintainable, and portable.

---

# LIBRARIES & VISUAL FREEDOM

IMPORTANT:

Visual implementation is NOT restricted.

You may freely use:

- animation libraries
- motion systems
- scroll libraries
- icon libraries
- sliders/carousels
- visual effect libraries
- WebGL/canvas systems
- interaction libraries
- lightweight CDN tools
- premium UI enhancement libraries

Allowed examples:

- GSAP
- ScrollTrigger
- Lenis
- Swiper
- Splide
- AOS
- Lucide
- Font Awesome
- Phosphor
- Remix Icons
- Three.js
- Canvas effects
- shader/noise systems
- SVG animation libraries

If a tool improves the final result:
USE IT.

The goal is visual quality, not artificial technical limitation.

---

# REQUIRED PROJECT STRUCTURE

```text
/index.html
/services.html
/service-detail.html
/about.html
/contact.html
/cookie.html
/privacy.html
/terms.html

/css/base.css
/css/bundle.css

/css/pages/home.css
/css/pages/services.css
/css/pages/service.css
/css/pages/about.css
/css/pages/contact.css
/css/pages/legal.css

/js/main.js
/js/site-config.js

/img/home/
/img/services/
/img/common/
GLOBAL CONFIG SYSTEM (CRITICAL)

All projects must include:

/js/site-config.js

This file acts as the global website configuration layer.

Example:

window.SITE_CONFIG = {

  companyName: "",
  companyLegalName: "",
  companyId: "",

  phone: "",
  phoneDisplay: "",
  phoneButtonLabel: "",

  email: "",

  addressLine1: "",
  addressLine2: "",
  serviceArea: "",

  businessHours: "",

  footerTextPrimary: "",
  footerTextSecondary: "",

  disclaimerShort: "",
  disclaimerFull: "",

  copyrightLine: "",

  ctaPrimary: "",
  ctaSecondary: ""

};
CONFIG SYSTEM REQUIREMENTS

IMPORTANT:

Business information must NEVER be hardcoded across multiple pages.

Everything should be dynamically injected from config.

This includes:

company name
legal company name
phone number
phone labels
email
address
company ID
footer texts
CTA labels
disclaimer blocks
legal notes

Changing ONE config file must update the entire site.

REQUIRED DATA ATTRIBUTES

Use reusable hydration attributes:

data-company-name
data-phone-link
data-phone-text
data-email-link
data-email-text
data-company-id
data-company-address
data-footer-text-primary
data-footer-text-secondary
data-disclaimer-short
data-disclaimer-full
MAIN.JS RESPONSIBILITIES

main.js should handle:

config injection
mobile menu logic
sticky header behavior
CTA updates
dynamic footer rendering
interaction systems
animation triggers
smooth scrolling
current year updates
accessibility helpers
DESIGN DIRECTION — 2026

The website must feel:

premium
architectural
editorial
cinematic
structured
high-trust
modern
refined
expensive
interactive

NOT:

generic local business template
cheap marketing page
crowded contractor layout
outdated service website
VISUAL PRINCIPLES

Use:

strong typography hierarchy
expressive spacing
layered backgrounds
subtle textures
premium transitions
cinematic composition
refined hover states
smooth scroll choreography
elegant motion systems
depth without clutter

Allowed visual systems:

grain/noise overlays
glassmorphism accents
subtle parallax
reveal animations
masked transitions
scroll-triggered motion
layered gradients
ambient lighting effects
canvas backgrounds
AVOID

Do NOT use:

cheap UI cards everywhere
overly rounded interfaces
cluttered layouts
excessive gradients
spammy marketing language
“BEST #1 FASTEST”
keyword stuffing
AI-fluff paragraphs
repetitive sections
simplistic slide drawers
outdated local-business design patterns
HEADER REQUIREMENTS

Sticky header:

transparent initially
solid on scroll
smooth transitions
no layout jumping
accessible navigation
desktop + mobile behavior

Anchor links must account for sticky offset.

MOBILE MENU REQUIREMENTS

Create a fullscreen overlay navigation.

Required behavior:

soft fade
spatial motion
staggered reveal
body scroll lock
vertically scrollable if needed
premium transitions
CTA inside menu
support/trust line
ESC close support
proper accessibility handling

The menu must feel:

premium
architectural
cinematic

NOT:

a simple mobile drawer
FOOTER REQUIREMENTS

Footer must include:

company information
navigation links
legal links
contact information
disclaimer area
company/legal details
copyright line

All dynamic content must come from config.

PAGE REQUIREMENTS
HOME PAGE

Recommended structure:

Hero
Trust strip
Service overview
Featured categories
Why choose us
Process section
FAQ preview
CTA sections
Footer

Hero should include:

strong headline
supporting copy
CTA buttons
trust layer
visual depth
SERVICES PAGE

Avoid:

boring card grids

Use:

category grouping
visual hierarchy
alternating layouts
featured services
editorial spacing
structured navigation
SERVICE DETAIL PAGE

Must include:

Hero
Overview
Common situations
Process
FAQ
Related services
CTA section

The structure should be reusable for future dedicated pages.

ABOUT PAGE

Include:

company positioning
philosophy
service approach
trust-building content
standards/process
community angle if relevant

Avoid generic filler.

CONTACT PAGE

Include:

contact methods
phone CTA
email CTA
business hours
address/service area
inquiry form UI
emergency/support messaging
LEGAL PAGES

Required:

Privacy Policy
Terms of Service
Cookie Policy

Legal pages must:

feel realistic
be readable
structured
modern
adaptable to different industries

Legal/disclaimer blocks should come from config where possible.

CONTENT REQUIREMENTS

Content must be:

fully written
realistic
trustworthy
structured
easy to scan
useful

Avoid:

lorem ipsum
repetitive filler
generic AI language
vague service descriptions

Each service should explain:

what it is
when customers need it
expected outcomes
practical situations
trust signals
UX REQUIREMENTS

The site must:

be mobile-first
feel fast
remain highly readable
prioritize conversion clarity
support urgency without panic
maintain trust-heavy UX
be easy to navigate
IMAGE STRATEGY

Use placeholders and comments for future assets.

Suggested themes:

technicians at work
equipment close-ups
architectural details
tools/materials
branded vehicles
modern hardware
service process imagery

Organize images:

/img/home/
/img/services/
/img/common/
PERFORMANCE PRINCIPLES

Even with advanced visuals:

maintain reasonable performance
avoid bloated scripts
optimize animations
avoid excessive visual noise
prioritize smoothness

The experience should feel:

expensive
intentional
refined

NOT:

chaotic
gimmicky
overloaded
FINAL QUALITY STANDARD

The final website must feel like:

a premium 2026 brand
a professionally art-directed service company
a modern conversion-focused experience

NOT:

a cheap template
a basic contractor site
a low-effort local business page

Every project should feel:

custom
high-end
immersive
scalable
visually cohesive
```
