# Teste Técnico – Desenvolvedor(a) Frontend (EdTech)

Página interativa desenvolvida como teste técnico, implementando fielmente o layout do Figma com HTML5, CSS3 e JavaScript puro, sem nenhum framework de UI.

## Demo

**https://soulhiro.github.io/EdTech-Frontend/**

---

## Como rodar

### Online (recomendado)

Acesse diretamente a versão publicada no link acima.

### Localmente

```bash
git clone https://github.com/soulhiro/EdTech-Frontend.git
cd EdTech-Frontend
pnpm install
```

> Sem o `pnpm install`, Plyr e Swiper não estarão disponíveis e o vídeo e o slider não funcionarão.

Abra o `index.html` via servidor HTTP local — o projeto usa ES Modules (`type="module"`), que o browser bloqueia via `file://`.

**VS Code Live Server:** botão direito em `index.html` → "Open with Live Server"

---

## Tecnologias

- HTML5 semântico
- CSS3 — Custom Properties, `@layer`, Flexbox, Grid, desktop-first
- JavaScript Vanilla — ES Modules via `importmap`, sem bundler
- [Plyr.js](https://github.com/sampotts/plyr) — player de vídeo
- [Swiper.js](https://swiperjs.com) — slider de imagens
- `sessionStorage` — persistência de estado das atividades

---

## Estrutura do projeto

```
edtech-frontend/
├── index.html
├── assets/
│   ├── audio/
│   │   └── lofi-sound.mp3
│   ├── icons/
│   │   ├── sprite.svg                   # SVG sprite com todos os ícones inline
│   │   ├── logo.svg
│   │   ├── discursive-activity-icon.svg
│   │   ├── objective-activity-icon.svg
│   │   ├── question-icon.svg
│   │   └── arrow-right.svg
│   └── images/
│       ├── hero-waves.svg
│       ├── hero-chart.svg
│       ├── hero-floating-card.png
│       ├── nature-wallpaper-slider-01.webp
│       ├── nature-wallpaper-slider-02.webp
│       ├── nature-wallpaper-slider-03.webp
│       └── Nature-waves-crashing.webp
├── css/
│   ├── style.css                        # Entrypoint — declara @layer e importa tudo
│   ├── variables.css                    # Design tokens (cores, tipografia, espaçamento)
│   ├── reset.css                        # Reset minimalista
│   ├── base.css                         # Estilos globais, tipografia, :focus-visible
│   ├── layout.css                       # main, container, seções
│   ├── utilities.css                    # .sr-only, .skip-link, .animate-on-scroll
│   ├── responsive.css                   # Media queries (1024 / 768 / 480px)
│   └── _components/
│       ├── button.css
│       ├── hero.css
│       ├── video-player.css
│       ├── lateral-image.css
│       ├── slider.css
│       ├── featured.css
│       ├── cards.css                    # Flip cards
│       ├── audio-player.css
│       ├── discursive-activity.css
│       ├── objective-activity.css
│       ├── faq.css
│       └── footer.css
├── js/
│   ├── main.js                          # DOMContentLoaded — inicializa todos os módulos
│   ├── player.js                        # Plyr.js (vídeo)
│   ├── slider.js                        # Swiper.js
│   └── _components/
│       ├── audio-player.js              # Player de áudio nativo
│       ├── flip-cards.js                # Geração dinâmica e flip com inert
│       ├── discursive-activity.js       # Atividade discursiva + sessionStorage
│       ├── objective-activity.js        # Atividade objetiva + sessionStorage
│       ├── faq.js                       # Accordion com animação de abertura/fechamento
│       └── scroll-animations.js        # IntersectionObserver para fade-in nas seções
└── docs/
    └── decisions/
        ├── 0001-player-de-video-com-plyr.md
        ├── 0002-slider-com-swiper.md
        └── 0003-flip-cards-gerados-via-js.md
```

---

## Decisões técnicas

### Arquitetura CSS com `@layer`

O CSS é organizado em camadas explícitas declaradas em `style.css`:

```css
@layer reset, base, layout, components, utilities;
```

Isso garante que a cascata seja totalmente previsível e sem conflitos de especificidade. O `responsive.css` é importado **fora** de qualquer layer para ter prioridade máxima sobre todos os estilos de componente.

### Design tokens

Todas as cores, tamanhos, espaçamentos, sombras e transições vivem em `variables.css` como Custom Properties. Isso permite sobrescrever tokens inteiros dentro de media queries (por exemplo, escalar toda a tipografia em mobile sobrescrevendo `--font-size-2xl` no `:root` do breakpoint).

### Desktop-first

O projeto parte do layout desktop como base e usa `max-width` para adaptar. Três breakpoints: `1024px` (tablet), `768px` (mobile) e `480px` (mobile pequeno).

### ES Modules com importmap

Sem bundler. Os módulos são carregados nativamente pelo browser via `<script type="importmap">` no HTML. Plyr e Swiper são resolvidos como bare specifiers (`import Plyr from 'plyr'`) sem precisar de caminhos de node_modules.

### Player de vídeo — Plyr.js

O player de vídeo encapsula um embed do YouTube via Plyr, permitindo customização visual completa via CSS. Sem Plyr, o `<iframe>` do YouTube ainda renderiza como fallback. [Ver ADR completo](docs/decisions/0001-player-de-video-com-plyr.md).

### Slider — Swiper.js

Swiper foi adotado com os módulos `Navigation` e `Pagination`. A integração é feita via ES Module nativo. Os estilos do Swiper são injetados fora de `@layer`, então overrides visuais usam `!important` onde necessário. [Ver ADR completo](docs/decisions/0002-slider-com-swiper.md).

### Flip cards gerados dinamicamente

Os cards são gerados a partir de um array de dados em `flip-cards.js`. O HTML contém apenas o container. Quando virado, o atributo `inert` é alternado entre frente e verso, impedindo que leitores de tela e navegação por teclado acessem o lado oculto. [Ver ADR completo](docs/decisions/0003-flip-cards-gerados-via-js.md).

### Persistência com sessionStorage

As atividades discursiva e objetiva persistem estado via `sessionStorage` (conforme especificado no PDF). Ao recarregar a página, o conteúdo preenchido, o feedback exibido, o estado dos botões e a opção selecionada são restaurados automaticamente.

### FAQ accordion com `<details>/<summary>`

O accordion usa elementos HTML nativos, evitando JavaScript para a lógica de abrir/fechar. O JS (`faq.js`) adiciona apenas dois comportamentos: accordion exclusivo (fechar o item anterior ao abrir um novo) e animação de fechamento — já que o `<details>` não suporta transição CSS na saída nativamente.

### SVG sprite

Todos os ícones inline foram extraídos para um único arquivo `sprite.svg` com `<symbol>` e referenciados via `<use href="sprite.svg#icon-name">`. Isso resolve o problema do `currentColor` com `<img>` e centraliza a manutenção dos ícones.

---

## Componentes

| Componente | Descrição |
|---|---|
| Hero | Grid 2 colunas com glassmorphism card e elementos decorativos; animação de float contínua no card |
| Player de vídeo | Embed do YouTube via Plyr.js com customização visual |
| Imagem lateral | Grid responsivo imagem + texto |
| Slider | Swiper.js com navegação, estados normal/hover/disabled |
| Recurso de destaque | Card escuro com layout featured |
| Flip cards | Gerados via JS, animação 3D, `inert` no lado oculto |
| Player de áudio | Nativo `HTMLAudioElement`, seekbar, volume, play/pause |
| Atividade discursiva | Textarea com fluxo responder/alterar e persistência |
| Atividade objetiva | Seleção única com radio inputs ocultos e persistência |
| FAQ | `<details>/<summary>` com animação de abertura e fechamento |
| Footer | Logo + copyright |

---

## Acessibilidade

- HTML semântico (`<main>`, `<section>`, `<nav>`, `<footer>`, `<label>`, `<details>`)
- Skip link ("Pular para o conteúdo") visível ao foco via teclado
- `aria-hidden="true"` em todos os elementos decorativos
- `aria-label` em todos os botões icônicos (play, pause, settings, fechar, navegação do slider)
- `role="status"` nos banners de feedback das atividades (aria-live implícito)
- `role="group"` + `aria-labelledby` no grupo de opções da atividade objetiva
- `<input type="radio" class="sr-only">` dentro de cada `<label>` nas opções — navegação por teclado funcional sem JS adicional
- `:focus-visible` global com `outline: 2px solid var(--ring)`
- `@media (prefers-reduced-motion: reduce)` zera todas as transições e animações

---

## Animações

- **Hero card:** float contínuo (`translateY 0 → -12px`) com duração de 4s
- **Flip cards:** transição 3D com `rotateY`, hover `scale(1.02)`, card virado em `scale(1.06)`
- **FAQ:** fade + slide-up na abertura e fechamento do body via `@keyframes`
- **Seções:** fade-in com `translateY(24px → 0)` via `IntersectionObserver` ao entrar no viewport
- **Botões:** `opacity` no hover, `scale(0.97)` no `:active`
- **Feedbacks das atividades:** slide-down (`opacity 0 → 1` + `translateY`) ao aparecer
- **Todos os acima são desativados automaticamente** com `prefers-reduced-motion: reduce`

---

## Autor

**Victor M. Santos** — [Portfólio](https://victormts.dev/) · [LinkedIn](https://www.linkedin.com/in/victormts/)
