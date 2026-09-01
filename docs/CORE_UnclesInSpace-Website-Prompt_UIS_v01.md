# Uncles in Space — Website Consolidated Build Prompt

**Document type:** Governing build prompt  
**Register:** Uncles in Space (UIS)  
**Version:** v01

## Objective

Build the **Uncles in Space** website as a responsive long-form literary archive based directly on the supplied final visual mockup. The mockup is the **governing visual reference**. Translate it into a working website; do not redesign it into a generic modern blog.

Core experience:

> **Browse the taxonomy → discover an Uncle → select the Uncle → read the corresponding essay → continue scrolling through the archive.**

## Governing reference

Use `CORE_UnclesInSpace-Website-Reference_UIS_v01.png` as the primary visual reference.

Preserve its compactness, narrow document-like canvas, left/right margins, proportions, visual hierarchy, gallery placement, character-image treatment, typography hierarchy, borders, spacing, density, and archival aesthetic.

Do not make the page full-width, card-heavy, dashboard-like, or conventionally blog-like.

## Page architecture

1. Header / site identity
2. Main navigation
3. Uncle Taxonomy Gallery
4. Latest/current entry
5. Additional entries below it in continuous reading order
6. Footer

There is **no left-side article panel**.

## Header and navigation

Header:

**UNCLES IN SPACE**

Use the rocket icon from the reference.

Subtitle:

**A TAXONOMIC WORLDBUILDING SERIES**

Do not use “TAXONOMIC WORLD BUILDING SERIES”.

Do not include “FIELD LOG JOURNAL ENTRY”.

Navigation:

**ENTRIES · ABOUT UNCLES IN SPACE · ABOUT MOBY OTOMO · FUTURE WORKS**

Remove “GU-ARCHIVE 13333”; do not replace it with another fake archive number unless explicitly specified later.

## Uncle Taxonomy Gallery

The gallery:

- sits at the top of the content area
- is a compact horizontal row
- scrolls left/right
- preserves each gallery image’s individual background color
- has no visible label under each image
- can contain many Uncles
- uses separate gallery/thumbnail assets from the main essay images

### Randomization

Randomize gallery order for presentation, but never randomize canonical identity, essay association, permalink, or archive order.

Prefer a stable randomized order for the current page/session rather than constantly reshuffling while the reader interacts.

> **The presentation is randomized; the archive is not.**

### Selection

Clicking an Uncle navigates to its corresponding essay entry, preferably through in-page scrolling rather than a modal.

## Main entry

The complete long-form essay is read directly on the page.

Do not include:

- “Read Full Entry”
- excerpt-only treatment
- a separate reading gate
- “Older Entries”

The main Uncle image must remain large as in the reference; do not shrink it merely to create more whitespace.

## Entry hierarchy

Support:

- Uncle number / identity
- essay title
- conceptual phrase
- translation/explanation box
- **Meaning:**
- large quick-sense statement
- full essay

Preserve this order:

`yat-sam...` text  
↓  
bordered Chinese/explanation box  
↓  
`Meaning:`  
↓  
large Meaning statement

Reference Meaning statement:

**Uncle Who Clarifies Until Nothing Remains Unclear Or Finished.**

Preserve its distinctive serif treatment, size, and prominence.

## Continuous archive and permalinks

The homepage is a continuous reading stream. Older entries appear naturally below the current entry.

Every essay nevertheless has an individual stable permalink, e.g.:

`/entries/explaining-the-explanation-uncle`

Gallery randomization must never affect permalinks.

## Images

Gallery and main images are separate assets.

Main Uncle images use a standardized presentation frame/bounding box so inconsistent source dimensions or whitespace do not make one Uncle appear accidentally larger or smaller.

Normal Uncles share a standardized height/pose system.

**Mr. Papi (No. 11188)** is an intentional smaller-stature exception. Preserve his canonical proportions without treating him as a malformed asset or artificially stretching him.

## Canvas, background, typography, color

Desktop must retain the reference’s narrow compact document canvas with explicit maximum width, left/right margins, gallery/content alignment, image/text proportions, and readable text measure.

Responsive behavior should adapt the layout without turning it into a different modern design.

Use the final **slightly grayer off-white** page background. Gallery tile backgrounds remain independent.

Use restrained dark-neutral primary text. Orange remains an accent for applicable labels/details, not the default body text.

## Footer

Use a real publication footer with links such as:

- Twitter / X
- GitHub
- YouTube
- Instagram
- Substack, if active

The footer is the bridge between the fictional/archive interface and the real Uncles in Space / Moby Otomo project.

## Content model

Separate content data from presentation where practical. Each entry should support:

- stable Uncle ID/number
- identity/title
- essay title
- permalink slug
- gallery image path
- main image path
- phrase
- translation/explanation
- Meaning statement
- essay body
- publication/order metadata

## Accessibility and performance

Use semantic HTML, correct heading hierarchy, meaningful alt text, keyboard-accessible gallery items, visible focus states, accessible navigation, appropriate lazy loading, optimized images, and stable layout dimensions where practical.

Do not let these improvements materially change the reference design.

## Explicit exclusions

Do not add:

- left-side article panel
- “Read Full Entry”
- “Older Entries”
- FIELD LOG JOURNAL ENTRY
- GU-ARCHIVE 13333
- visible gallery captions
- generic blog cards
- excessive whitespace
- full-width stretched layout
- modal reading experience
- dashboard-style UI
- unnecessary hero redesign
- separate thumbnail section elsewhere

## Implementation principle

When unspecified, choose the solution that best preserves the governing reference and the archival/taxonomic character.

> **Horizontal browsing discovers the world. Vertical reading explores it. The archive connects the two.**
