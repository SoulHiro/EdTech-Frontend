# ADR 0002 — Slider com Swiper.js

## Contexto

A seção de slider precisava de um componente de carrossel, e construir um slider do zero em vanilla JS envolve uma lógica considerável, como ocontrole de posição, drag, bullets, navegação e acessibilidade...

O Swiper foi mencionado diretamente no PDF de instruções do projeto, e como eu nunca havia utilizado antes, então a decidi ler a documentação oficial e implementar seguindo o guia de instalação

Minha referência foi: https://swiperjs.com/get-started#installation

## Decisão

Utilizar Swiper.js para a implementação do slider, via importmap com os módulos de Navigation e Pagination

## Razões

- Evita trabalho desnecessário reimplementando funcionalidades que a lib já entrega testadas
- Foi explicitamente recomendado nas instruções do projeto
- Documentação clara e bem estruturada, o que tornou fácil de implementar e customizar
- Suporte a módulos ES nativos via importmap, sem necessidade de bundler

## Consequências

- Adiciona uma dependência externa ao projeto
- Os estilos injetados pelo Swiper são unlayered, tendo prioridade sobre nosso `@layer(components)`, o que faz com que overrides críticos precisam de `!important`
