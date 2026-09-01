# Uncles in Space — Website Content & Asset Data Specification

**Document type:** Companion specification  
**Register:** Uncles in Space (UIS)  
**Version:** v01

## Purpose

Define minimum data and asset relationships for a scalable implementation.

## Canonical Uncle record

Recommended fields:

```yaml
id:
number:
name:
entryTitle:
slug:
galleryImage:
mainImage:
phrase:
translation:
meaning:
essay:
publicationDate:
```

The exact storage format is implementation-dependent.

## Stable identifier

Use the existing Uncle taxonomy number/identifier as canonical identity, e.g.:

```text
TAXO_No13333
```

Do not use gallery position, randomized position, or filename alone.

## Gallery asset

Optimized for:

- compact display
- horizontal browsing
- fast loading
- selection/navigation

It is independent of the main essay image.

## Main asset

The full-body Uncle image displayed in the essay.

The website should normalize its presentation through a consistent display frame.

Normal Uncles share common height/pose/body-proportion logic.

**Mr. Papi (No. 11188)** is the intentional smaller-stature exception. Preserve the canonical proportions rather than artificially stretching him.

## Essay content

Store the essay body as content rather than hard-coded layout markup where practical.

The system should not constrain future essay length.

## Meaning field

The `meaning` field is distinct from the essay and supplies the prominent quick-sense statement.

Reference example:

```text
Uncle Who Clarifies Until Nothing Remains Unclear Or Finished.
```

## Phrase and translation

Store the phrase and explanation/translation independently.

Example:

```yaml
phrase: "yat-sam-saam-saam-saam"
translation: "explaining the explanation"
```

## URL slug

Every published entry has a stable human-readable slug.

Example:

```text
explaining-the-explanation-uncle
```

Canonical route:

```text
/entries/explaining-the-explanation-uncle
```

Do not change the slug because gallery order changes.

## Obsidian/GitHub relationship

The Obsidian vault is the creative/knowledge archive.

The GitHub website repository is the implementation source.

The website repository does not replace the Obsidian production system.

## README naming convention

The governing README defines:

```text
{PILLAR}_{Slug}[_UIS]_{VersionOrDate}.{ext}
```

For cross-pillar canon inside `01_CONSTRUCTION-des-ONTOLOGIES`, use `CORE`.

Use `_UIS` when the asset is specifically the Uncles in Space register.

Use `_v01`, `_v02`, etc. for iterative/drafted material; do not use a separate `_final` suffix.

Examples for this website specification set:

```text
CORE_UnclesInSpace-Website-Prompt_UIS_v01.md
CORE_UnclesInSpace-Website-VisualSystem_UIS_v01.md
```

## Placement

Because these are governing website specifications, place them under:

```text
/OBSIDIAN/UNCLESINSPACE/
└── 01_CONSTRUCTION-des-ONTOLOGIES/
    └── Style_Brand_Guides/
```

The README says `01_CONSTRUCTION-des-ONTOLOGIES` is the canon/"answer key" area, and `Style_Brand_Guides` is an established sub-area for style/brand governance. fileciteturn3file1L1-L8

## Mockup placement

The mockup is a **self-created governing design asset**, not an externally sourced reference. The README distinguishes `_Reference/` (outside material) from `_Concepts/` (your own exploratory work) and canonical production assets. fileciteturn3file8L1-L18

For this specific governing mockup, keep it with the website's canon/style documentation:

```text
/OBSIDIAN/UNCLESINSPACE/
└── 01_CONSTRUCTION-des-ONTOLOGIES/
    └── Style_Brand_Guides/
        └── CORE_UnclesInSpace-Website-Reference_UIS_v01.png
```

The README's filename convention puts the pillar code first, uses a short hyphenated slug, permits `_UIS` for the UIS register, and uses `_v01` for iterative material. fileciteturn3file4L1-L16

## Future content workflow

Conceptually:

```text
Uncle canon
   ↓
visual assets
   ↓
essay/content
   ↓
website content record
   ↓
gallery + entry
   ↓
permalink
```

Do not build an automated Obsidian-to-website publishing pipeline until recurring handoff friction justifies it.
