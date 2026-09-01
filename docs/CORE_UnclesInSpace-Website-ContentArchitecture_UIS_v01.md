# Uncles in Space — Website Content Architecture Specification

**Document type:** Companion specification  
**Register:** Uncles in Space (UIS)  
**Version:** v01

## Purpose

Define how Uncle records, essays, navigation, and permanent URLs relate.

The website is a **continuous literary archive**, not a conventional post-card blog.

## Canonical entry

Each published Uncle is one canonical record:

```text
Uncle
 ├── identity / number
 ├── gallery image
 ├── main image
 ├── phrase
 ├── translation / explanation
 ├── Meaning statement
 ├── essay
 └── permalink
```

Gallery and essay stream reference the same records.

## Entry structure

1. Uncle number / identity
2. Essay title
3. Phrase / conceptual artifact
4. Explanation / translation box
5. Meaning:
6. Large Meaning statement
7. Full essay

## Continuous archive

The homepage contains the full essay content for the current entry and subsequent entries. Readers continue downward naturally.

Do not add an “Older Entries” block.

## Individual permalinks

Every entry has a stable human-readable route:

```text
/entries/{slug}
```

Example:

```text
/entries/explaining-the-explanation-uncle
```

The slug is canonical and independent of gallery position or randomization.

## Gallery-to-entry mapping

Every gallery item resolves to exactly one canonical Uncle record.

Clicking/tapping it should identify the Uncle and navigate the reader to the corresponding essay, preferably by in-page scrolling.

Avoid a modal reading environment.

## Ordering

The archive has a canonical essay order. Gallery order is a separate presentation concern:

```text
Canonical essay order ≠ randomized gallery order
```

Changing gallery order must never change essay identity or order.

## Future expansion

The architecture should allow the catalogue to grow substantially without hard-coding each Uncle into unrelated UI components.

Adding an Uncle should primarily involve adding/editing its record and assets.

## Image roles

Each record references:

```text
galleryImage
mainImage
```

These are independently replaceable.

## Canonical identity

Use a stable Uncle identifier/number. Never derive identity from array index, randomized position, or image filename alone.

## Example conceptual record

```yaml
id: TAXO_No13333
slug: explaining-the-explanation-uncle
name: Explaining the Explanation Uncle
essayTitle: Explaining the Explanation Uncle
galleryImage: /images/gallery/TAXO_No13333-ExplainingTheExplanation-Gallery_UIS_v01.png
mainImage: /images/entries/TAXO_No13333-ExplainingTheExplanation-Main_UIS_v01.png
phrase: "yat-sam-saam-saam-saam"
translation: "explaining the explanation"
meaning: "Uncle Who Clarifies Until Nothing Remains Unclear Or Finished."
```

This is an illustrative schema; YAML is not mandatory.

## Separation of content and presentation

Keep canonical essay content separate from visual component definitions where practical so entries can be added, reordered, randomized in the gallery, or exposed through permalinks without rewriting layout code.

## Editorial principle

The site should encourage:

> browse → curiosity → essay → continued reading → further discovery

rather than card → isolated article → return to index.
