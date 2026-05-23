---
name: Gallery Minimal
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system is a sophisticated, gallery-inspired framework tailored for design professionals. It prioritizes content over container, utilizing a high-contrast palette of deep black and off-white to create a prestigious, editorial atmosphere. 

The aesthetic leans heavily into **Minimalism** with a focus on precision. Every element is intentional; whitespace is treated as a functional component rather than empty space, allowing visual work—posters, logos, and photography—to breathe and command attention. The emotional response is one of calm authority, clarity, and uncompromising quality.

## Colors

The palette is anchored by **Deep Black** for typography and structural elements, and **Off-white** for the primary canvas to reduce eye strain compared to pure white. 

The secondary palette consists of muted, desaturated pastels (Sage, Rose, Sky). These are used strictly for functional highlights—such as active states, category tags, or hover indicators—to ensure the interface never competes with the portfolio pieces. Borders are kept in a light neutral grey to maintain structure without creating heavy visual breaks.

## Typography

This design system uses a dual-font approach. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary, and slightly bold presence. **Geist** is used for body text and labels; its technical, monospaced-influenced clarity provides a "meticulous" feel to descriptions and metadata.

Large headings use tight tracking (letter-spacing) to feel like intentional graphic design, while labels are spaced out and uppercased to act as navigational anchors.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to mimic the structured layout of a printed lookbook. A 12-column grid is used for portfolio entries, allowing for varied compositions (e.g., a single image spanning 8 columns with text in the remaining 4).

Spacing is aggressive. Vertical gaps between sections should be significant (128px+) to reinforce the airy, premium feel. Content is centered within the container-max width, with wide outer margins that expand on larger displays.

## Elevation & Depth

This design system avoids traditional heavy drop shadows. Depth is achieved through **Low-contrast outlines** and **Tonal layering**.

- **Level 0 (Base):** Off-white background (#F9F9F9).
- **Level 1 (Cards/Floating):** 1px solid border (#E5E5E5) with an extremely subtle, wide-spread shadow (0px 4px 20px rgba(0,0,0,0.02)).
- **Interactions:** Hovering over a grid item should remove the border and apply a slight scale-up effect or a subtle color tint from the pastel palette, rather than increasing shadow depth.

## Shapes

The shape language is primarily rectangular and architectural. A **Soft** (Level 1) roundedness is applied to buttons and small UI components (4px radius) to prevent the design from feeling too clinical or aggressive. Images and large portfolio cards should remain sharp (0px) to preserve the integrity of the original artwork.

## Components

### Buttons
- **Primary:** Deep Black background, Off-white text. No border. Sharp or 4px radius.
- **Secondary:** Transparent background, 1px Deep Black border.
- **Ghost:** Transparent background, Pastel text on hover.

### Portfolio Cards
- No background fill or shadow by default.
- 1px border only visible on hover or used to frame the image container.
- Captions use `label-sm` for categories and `body-md` for titles.

### Input Fields
- Minimalist style. No background fill.
- 1px bottom border only (#121212).
- Focus state: Bottom border thickens to 2px or changes to an accent pastel color.

### Chips & Tags
- Pill-shaped with a 1px border.
- Used for project categories (e.g., "Branding", "Print").
- Backgrounds use the soft pastel palette at 20% opacity.

### Navigation
- Sticky top header with a blur effect or solid Off-white background.
- 1px bottom border to separate the navigation from the content.
- Links use `label-sm` with a subtle underline transition on hover.