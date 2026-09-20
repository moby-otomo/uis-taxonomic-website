# Uncles in Space — Taxonomic Website

**Uncles in Space (UIS)** is a taxonomic worldbuilding project exploring what happens to human thought, creativity, and observation when AI becomes a collaborator.

This repository contains the public-facing website for UIS: a small digital vessel for its characters, artifacts, inquiries, and evolving taxonomy.

> **Observe. Classify. Catalogue. Continue.**

## What is Uncles in Space?

Uncles in Space is an ongoing experiment in **taxonomic worldbuilding**.

It treats characters, observations, ideas, behaviors, and artifacts not simply as content, but as specimens to be collected, classified, named, and placed into a larger system.

The project is interested in the strange territory between:

* fiction and documentation
* comedy and philosophy
* archives and worldbuilding
* human judgment and machine assistance
* classification and creativity

The website is therefore less a conventional portfolio than a **public catalogue of an evolving world**.

## The Moby Otomo Context

Uncles in Space is part of **Moby Otomo**, a broader personal research-and-making environment concerned with systems, taxonomy, AI co-thinking, and the construction of small worlds.

The relationship can be thought of as:

```text
Moby Otomo
│
├── Uncles in Space
│   └── Public taxonomic world / flagship vessel
│
├── Gentlemen Uncles
│   └── Character and literary world
│
└── Workbenches
    └── Tools, experiments, generators, and systems
```

The repositories and experiments surrounding UIS are treated as **artifacts of the larger system**, rather than isolated software projects.

## The Inquiry

UIS is built around a recurring question:

> **What happens to human thought and creativity when AI becomes a collaborator?**

The answer is not intended to be supplied in advance.

Instead, the project investigates the question through artifacts, conversations, classifications, characters, experiments, and observations.

One recurring format is the **Three-Seat Inquiry**:

* **Uncle** — human observation, personality, contradiction
* **Uncle** — another perspective, interpretation, or derailment
* **Archivist Robot** — classification, memory, and machine-assisted observation

The resulting discussion may produce another entry in the taxonomy.

## The Taxonomic Method

The basic movement is:

```text
Observation
    ↓
Classification
    ↓
Taxonomy
    ↓
System
    ↓
Worldbuilding
```

The important part is the accumulation.

A single joke, character, behavioral observation, or strange artifact may seem insignificant in isolation. Once repeatedly classified, however, patterns begin to emerge.

The taxonomy becomes a way of discovering the world rather than merely describing it.

## This Repository

`uis-taxonomic-website` contains the deployed UIS website and its supporting frontend code.

The repository is deliberately kept separate from the wider Moby Otomo archive and project registry.

### Production

**Live site:** `https://unclesinspace.pages.dev`

**Platform:** Cloudflare Pages

**Repository:** `moby-otomo/uis-taxonomic-website`

### Build

The production build uses:

```bash
npm ci --include=dev
npm run build
```

The generated site is served from:

```text
dist/
```

## Development Philosophy

UIS follows an incremental, artifact-centered development process.

Changes are intended to move through a simple cycle:

```text
One scoped change
       ↓
Evidence
       ↓
Review
       ↓
Approval
       ↓
Commit
```

This keeps the website itself from becoming an uncontrolled accumulation of experiments.

The same principle applies to the creative system behind it:

> **One verified finding → one remedy → one committed artifact.**

## Related Work

UIS is supported by a growing collection of Moby Otomo experiments and workbenches, including:

* **Random Uncle Generator** — procedural generation of Uncle specimens
* **Table Nine Workbench** — UIS character and inquiry infrastructure
* **Character Switchboard** — character selection and presentation system
* **Head Preparation** — character image preparation pipeline
* **Three-Seat Inquiry** — the recurring inquiry format embedded within UIS
* **Project Register / Systems Observatory** — the wider Moby Otomo system for observing what the project is becoming

These systems may live in separate repositories as they mature.

## Status

**Released and deployed.**

The website is an evolving artifact rather than a finished product. Its taxonomy, characters, interfaces, and supporting systems are expected to change as the larger Moby Otomo project develops.

## Part of Moby Otomo

**Moby Otomo** is the larger laboratory.

**Uncles in Space** is one of its public vessels.

The repository is therefore not simply the source code for a website.

It is one more artifact in an ongoing attempt to answer a peculiar question:

> **What does a world look like when you build it by classifying what you notice?**
