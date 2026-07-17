# ADR 0001 — Player de vídeo com Plyr

## Contexto

A seção de vídeo precisava de um player para embed do YouTube. A opção mais simples seria um `<iframe>` direto do YouTube, mas isso entrega o player padrão do Google, sem controle visual nenhum

Então como eu nunca havia utilizado o Plyr antes. A decisão foi testá-lo justamente para ganhar experiência com a lib e entregar um player visualmente mais alinhado ao design do projeto

Minha referência foi: https://github.com/sampotts/plyr

## Decisão

Utilizar Plyr.js para encapsular o embed do YouTube e customizar a aparência do player

## Razões

- Permite customizar completamente a interface do player via CSS, ao contrário do iframe nativo do YouTube
- Possuí uma API simples, facil de implementar
- Suporte nativo a YouTube, Vimeo e `<video>` sem necessidade de adaptações
- Oportunidade de aprender e testar uma lib nova no contexto do projeto

## Consequências

- Adiciona uma dependência externa ao projeto
- O player depende de JS para inicializar, sem JS, o iframe do YouTube ainda renderiza normalmente como fallback
