# Uncles in Space — Gallery Behavior Specification

**Document type:** Companion specification  
**Register:** Uncles in Space (UIS)  
**Version:** v01

## Purpose

Define Uncle Taxonomy Gallery behavior independently from visual styling.

## Position

The gallery appears near the top of the main page, immediately after navigation.

There is no separate left-side gallery panel.

## Horizontal scrolling

The gallery is a compact single horizontal row.

Desktop:

- scroll left/right
- do not wrap into multiple rows simply to fit all Uncles
- preserve usable thumbnail size

Mobile:

- preserve horizontal browsing
- support natural touch/trackpad scrolling
- do not shrink every thumbnail to unusable size

## No visible labels

Do not display text captions beneath gallery images.

Accessible names may exist in the DOM for screen readers, but should not become visible captions.

## Individual background colors

Each gallery image retains its own reference-specific background color.

Do not normalize all gallery tiles to the page background.

## Randomized presentation

Randomize gallery order for presentation while keeping it stable for the current page/session where practical.

Conceptually:

```text
canonical catalogue
        ↓
randomized presentation order
        ↓
horizontal gallery
```

## Canonical data must not be randomized

Never randomize:

- Uncle ID/number
- essay association
- permalink
- canonical essay content
- canonical archive order

> **The presentation is randomized; the archive is not.**

## Gallery selection

Click/tap should:

1. resolve the canonical Uncle
2. identify its entry
3. navigate/scroll to that entry
4. preserve the continuous-page context

Prefer in-page navigation over modals.

## Active state

A subtle selected/focused state may be used if useful, but it must remain consistent with the reference. Avoid heavy modern controls.

## Accessibility

Gallery items must be keyboard accessible and have meaningful accessible names and focus states.

## Scaling

The gallery must remain functional as the catalogue grows from a few Uncles to dozens or more.

## Asset separation

Each gallery item references its own gallery asset. The essay references a separate main-image asset.

Do not automatically use the main image as the gallery thumbnail.

## Performance

Gallery assets should be optimized for compact display. Do not load every full-resolution main image merely to render the gallery.

## Failure behavior

A missing gallery asset must not break the entire gallery. Use a controlled fallback or omit the item until the asset is ready.

A missing main image should preserve the entry layout with a deliberate fallback.

## Design principle

The gallery is the site's **visual index**, not a decorative carousel.

Its purpose is to make the reader curious enough to select an Uncle and enter the writing.
