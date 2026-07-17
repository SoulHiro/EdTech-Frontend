# ADR 0003 — Flip cards gerados dinamicamente via JavaScript

## Contexto

A seção de flip cards possui três cards estruturalmente idênticos, diferindo apenas no conteúdo textual. A questão era onde manter esse markup, e eu tinha duas opções, entre repetir no HTML ou gerar via JavaScript

## Decisão

Os cards são gerados dinamicamente a partir de um array de dados em `js/_components/flip-cards.js`, e o `index.html` contém apenas o elemento container

## Razões

- Adicionar, remover ou reordenar cards exige mudança em um único lugar (o array)
- Elimina repetição de markup no HTML
- Crawlers modernos, incluindo o Googlebot, executam JavaScript e indexam o conteúdo gerado, sem perda de SEO

## Consequências

- O conteúdo não está visível no HTML estático, o que pode ser limitação para crawlers muito simples ou ferramentas de scraping que não executam JS
- Requer JavaScript habilitado no navegador para renderizar os cards
