---
name: Kinetic Craft
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#464555'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#41485e'
  on-tertiary: '#ffffff'
  tertiary-container: '#586076'
  on-tertiary-container: '#d4dbf5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the intersection of rigorous systems engineering and refined digital product craft. Tailored for a Senior Full-Stack Product Engineer portfolio, the visual language moves past standard developer templates into an editorial, high-precision technical presence.

The aesthetic fuses **Minimalism** with structural **Bento Grid Architecture** and **Micro-Surface Precision**. High contrast, generous negative space, crisp hairline borders, and subtle graphite-zinc micro-gradients establish depth without visual clutter. The emotional tone projects calm authority, architectural discipline, and high agency. Technical competence is communicated implicitly through microscopic attention to detail: tabular figure alignments, subtle mono accents, crisp boundaries, and understated ambient light.

## Colors

The palette is anchored by a neutral scale of zinc and graphite, structured to provide high readability and soft surface separation.

- **Canvas & Surfaces:** Primary background is `#FAFAFA` with card surfaces resting on pure `#FFFFFF`. Layered subterranean elements or inset wells utilize `#F4F4F5`.
- **Primary Accent (`#4F46E5` Indigo):** Reserved strictly for deliberate focal points: active states, primary CTA anchors, and high-signal interactive highlights.
- **Secondary Accent (`#6366F1` Violet Electric):** Applied in gradient stops, badge highlights, and interactive hover shifts.
- **Neutral Core (`#0F172A` Slate 900 to `#71717A` Zinc 500):** Typography and structural outlines. Pure `#09090B` serves as headline black, `#3F3F46` for body text, `#71717A` for tertiary metadata, and `#E4E4E7` / `#E2E8F0` for hairline borders.
- **Status Accents:** Emerald (`#10B981`) indicates live deployments, production uptime, and availability status.

## Typography

The typography leverages a dual-type engine: **Plus Jakarta Sans** delivers humanist geometry and editorial rhythm for narrative headers and UI flows, while **JetBrains Mono** introduces engineering rigor for technical tags, metric counters, git hashes, and stack pills.

Display copy utilizes deliberate negative tracking (`-0.03em`) to create dense, commanding statements. Body copy balances open aperture with relaxed line heights (`1.6x` to `1.65x`) to sustain readability across technical case studies and architectural retrospectives.

## Layout & Spacing

Layouts follow a modular 12-column Bento structure bound to a max-width container of `1200px`. Spacing runs on an exact 4px/8px modular cadence.

- **Desktop (1024px+):** 12-column grid with `1.5rem` (`24px`) gutters and `3rem` (`48px`) margins. Cards span irregular column splits (e.g., 8/4 or 4/4/4) to yield asymmetric, dynamic Bento matrices.
- **Tablet (768px - 1023px):** 8-column layout with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margins.
- **Mobile (<768px):** 4-column single-stream stack with `1rem` (`16px`) gutters and `1.25rem` (`20px`) outer canvas margins.

Generous vertical macro-spacing (`space-xl` through `5rem`) cleanly separates case studies, technical milestones, and architectural diagrams.

## Elevation & Depth

Visual hierarchy operates through planar containment, crisp 1px structural outlines, and subdued ambient lighting rather than heavy drop shadows:

- **Borders over Shadows:** Surfaces utilize sharp 1px borders colored in `#E4E4E7` (Zinc 200).
- **Subtle Surface Lift:** Hover interactions apply a micro-elevation layer via dual ambient shadows: `0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.06)`.
- **Radial Glow Accents:** Feature highlights use soft background radial gradients with 10% opacity in `#4F46E5` positioned behind key interactive Bento tiles.
- **Backdrop Blurring:** Fixed nav bars and overlays use `backdrop-filter: blur(12px)` over a 85% alpha white canvas (`rgba(255, 255, 255, 0.85)`).

## Shapes

The design system maintains a unified `roundedness: 2` scale, pairing technical sharpness with comfortable modern touchpoints:

- **Bento Tiles & Outer Cards:** `rounded-xl` (`1.5rem` / `24px`) provides a defined, soft-corner frame.
- **Nested Components & Inputs:** `rounded-lg` (`1rem` / `16px`) or base rounded (`0.5rem` / `8px`) maintains geometric harmony relative to parent containers.
- **Micro-Badges & Stack Pills:** Full pill-shaped radius (`9999px`) to create clear semantic separation between structural cards and technical tags.

## Components

### Buttons
- **Primary:** Solid `#0F172A` slate with white typography, 1px `#0F172A` border, `rounded-lg`, subtle hover shift to `#4F46E5` with `0 4px 12px rgba(79, 70, 229, 0.25)`.
- **Secondary:** Surface pure white `#FFFFFF` with 1px `#E4E4E7` border, `#18181B` text, hover background at `#F4F4F5`.
- **Ghost:** Transparent background with subtle `#71717A` text, shifting to `#0F172A` on hover with a micro `#F4F4F5` backdrop.

### Bento Cards
- Background: `#FFFFFF`. Border: 1px `#E4E4E7`. Radius: `rounded-xl` (`1.5rem`).
- Padding: `1.5rem` on mobile, `2rem` on desktop. Internal micro-components stay flush or offset via `0.75rem` inner padding.

### Stack & Monospace Badges
- Pill shape (`rounded-full`), height `24px`, horizontal padding `10px`.
- Tech Stack Tags: `#F4F4F5` background, 1px `#E4E4E7` border, `#3F3F46` label in `JetBrains Mono`.
- Active / Live Indicators: `#ECFDF5` emerald background, `#059669` text, embedded 6px pulsing emerald beacon dot.

### Interactive Metric Display
- Large numeric values formatted with tabular lining figures (`font-variant-numeric: tabular-nums`).
- Accompanied by a muted mono trend label or repository commit hash below the value.

### Code Snippets & Architecture Previews
- Inset container using `#09090B` dark contrast or `#F8FAFC` slate wash, wrapped with a 1px border.
- Headers include mock window controls (3 micro dots) and active branch / path indicators.