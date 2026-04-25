# Legacy Blackpink Cover

Site oficial do cover **Legacy Blackpink Cover** — uma homenagem à BLACKPINK, construída como SPA em Vue 3 seguindo o design system *pink-on-black editorial* exportado pelo Claude Design.

> *"Levamos ao palco o show do BLACKPINK com a mesma energia, esforço e espírito do original — para que cada performance tenha o sentimento de um show de verdade."*

---

## Sobre o site

Single-page com as seguintes seções, navegáveis por âncoras no topo:

| Seção | Âncora | Descrição |
|---|---|---|
| Hero | `#top` | Coroa animada, wordmark e CTAs para contato / repertório |
| Repertório | `#setlist` | Lista das músicas do BLACKPINK que o cover toca (Pink Venom, Kill This Love, How You Like That, DDU-DU DDU-DU, Shut Down, Boombayah, Whistle, Playing With Fire, Lovesick Girls, As If It's Your Last) com pills de status |
| Galeria | `#gallery` | Mosaico de fotos e vídeos de bastidores e palco |
| Vídeos | `#videos` | Seleção de covers em palco e estúdio |
| Capítulos | `#chapters` | Três cards de proposta: Produção, Repertório e Estrada |
| Manifesto | `#program` | Citação editorial sobre a proposta do show |
| Contato | `#contato` | Cards de WhatsApp, Instagram e email |
| Footer | — | Marca, links de contato, copyright |

---

## Stack

- **Vue 3** (`^3.4.38`) — Composition API, `<script setup>`, SFCs
- **Vite 5** (`^5.4.2`) — dev server com HMR, build de produção
- **CSS custom properties** — design tokens em `styles/tokens.css`, estilos em `src/styles/site.css`
- **Google Fonts** — Playfair Display, Cormorant Garamond, Inter, JetBrains Mono (via `@import` em `tokens.css`)

Sem dependências de UI libraries — todos os componentes são construídos à mão sobre os tokens.

---

## Design system

O sistema é derivado do handoff bundle em `design_extract/blackpink/` (ignorado pelo Git; ver abaixo). Regras fundamentais:

- **Paleta**: 90% preto + pearl, 10% pink. `#000000` como fundo padrão, `#F4A6BD` (legacy-pink) como accent.
- **Tipografia**: Playfair Display para display/headlines, Inter para UI, Cormorant Garamond para body editorial, JetBrains Mono para código.
- **Eyebrows**: small-caps com tracking de `0.22em`, sem traços decorativos.
- **Corners**: maioria sharp. Radius 20px apenas nos "gems" em destaque, pills a 999px.
- **Elevação**: inner rings em pink 12–30% sobre onyx (`#141013`), sem outer shadows pra flutuar.
- **Glow pink** reservado para a coroa e focus em CTAs primários.
- **Motion**: easing `cubic-bezier(0.65, 0, 0.35, 1)` (*curtain-raise*), duração base 260ms, reveal da coroa a 900ms.

Os tokens completos estão em [styles/tokens.css](styles/tokens.css) (cores, tipografia, espaçamento, radii, shadows, easing).

---

## Arquitetura do projeto

```
Legacy/
├── index.html                 # entrypoint Vite
├── vite.config.js             # plugin Vue, porta 5173
├── package.json
├── public/
│   └── assets/                # servido em /assets/*
│       ├── crown-flat.png     # coroa flat — favicon, nav, footer
│       ├── crown-gem.png      # coroa gem — hero
│       ├── logo-full.png
│       └── logo-wordmark.png
├── styles/
│   └── tokens.css             # design tokens (CSS vars)
└── src/
    ├── main.js                # createApp + imports de CSS
    ├── App.vue                # orquestra seções + estado do modal
    ├── styles/
    │   └── site.css           # classes .bp-* (nav, hero, tour, gem, cta, modal…)
    └── components/
        ├── Eyebrow.vue        # label small-caps com hairlines
        ├── Button.vue         # variantes: primary | ghost | hot — md | sm
        ├── Pill.vue           # pink | hot | ghost | onyx
        ├── Field.vue          # input com v-model e variante boxed
        ├── Nav.vue            # sticky + blur, lockup crown+wordmark
        ├── Hero.vue           # aura radial, coroa com rise anim
        ├── Setlist.vue        # <ol> de 10 músicas com pills de status
        ├── Chapters.vue       # 3 gems (featured no meio)
        ├── Manifesto.vue      # blockquote editorial
        ├── CTA.vue            # cards de contato: WhatsApp, Instagram e email (com mensagem pré-preenchida)
        ├── Footer.vue         # marca + rule + links
        └── SeatModal.vue      # teleport + ESC + trava de scroll
```

**Convenção de naming CSS**: prefixo `bp-` (*blackpink*) em todas as classes de site. Os tokens usam o prefixo `--legacy-*` (pink, pearl, ink, onyx, etc.).

**Fluxo de estado**: `App.vue` mantém `modalOpen: ref(false)`. `Nav`, `Hero` e `CTA` emitem eventos que resolvem em `openModal()`. `SeatModal` emite `close` (clique no scrim / botão × / tecla ESC).

---

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
npm run preview   # serve o build local
```

**Requisitos**: Node 18+ (testado em Node 24).

---

## Arquivos ignorados pelo Git

Listados em [.gitignore](.gitignore):

- `node_modules/`, `dist/`, `.vite/` — regeneráveis
- `design_extract/` — bundle de design do Claude Design, mantido localmente como referência
- `.claude/` — config local do Claude Code
- `.env*`, logs, arquivos de SO e editor

---

## Créditos

Design system derivado do bundle *Blackpink* gerado em 2026-04-22 no [claude.ai/design](https://claude.ai/design). Prototipagem original em HTML/React; port para Vue 3 + Vite mantendo paridade visual 1:1.

Cover project e conteúdo de palco © Legacy Blackpink Cover, 2026.
