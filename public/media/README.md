# /public/media

Coloque aqui as mídias do cover. Tudo nessa pasta é servido em `/media/<arquivo>` no site.

## Galeria (fotos e gifs)

Formatos aceitos: `.jpg`, `.png`, `.webp`, `.gif`, `.mp4` (loop mudo, funciona como "gif pesado").

Para aparecer na galeria, edite [src/components/Gallery.vue](../../src/components/Gallery.vue) e aponte os slots:

```js
const items = [
  { type: 'image', src: '/media/show-seoul.jpg', alt: 'Abertura em Seul' },
  { type: 'video', src: '/media/pink-venom-loop.mp4', alt: 'Pink Venom' },
  // ...
]
```

Enquanto `src` estiver vazio, o slot mostra um placeholder com a coroa.

## Vídeos (performances completas)

Suporta YouTube e arquivos locais. Edite [src/components/Videos.vue](../../src/components/Videos.vue):

```js
const videos = [
  { youtubeId: 'dQw4w9WgXcQ', title: 'Pink Venom · Cover ao vivo' },
  { src: '/media/kill-this-love.mp4', title: 'Kill This Love · Ensaio' },
]
```

## Dicas de performance

- Comprima fotos antes de subir (use [Squoosh](https://squoosh.app) → WebP a 80% qualidade).
- GIFs "reais" pesam muito — prefira `.mp4` com `autoplay muted loop playsinline` (a Gallery já faz isso automaticamente).
- Vídeos longos: suba no YouTube e use `youtubeId`. Não hospede MP4 de 20MB+ aqui.
