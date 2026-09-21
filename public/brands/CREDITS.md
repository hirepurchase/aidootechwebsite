# Brand handset photography — source and licence

Each photograph shows a **real handset of that brand**. Nothing here is a
different manufacturer's phone dressed up as another.

| File | Brand | Device | Source | Licence |
| --- | --- | --- | --- | --- |
| `samsung.webp` | Samsung | Galaxy S series | Pexels [21854468](https://www.pexels.com/photo/21854468/) | Pexels Licence — commercial use, no attribution required |
| `tecno.webp` | Tecno | Spark 20 Pro | Pexels [28657062](https://www.pexels.com/photo/28657062/) | Pexels Licence — commercial use, no attribution required |
| `infinix.webp` | Infinix | — | Pexels [21854468](https://www.pexels.com/photo/21854468/) | Pexels Licence — commercial use, no attribution required |
| `itel.webp` | itel | A50 | Wikimedia Commons, [Itel A50 rear.jpg](https://commons.wikimedia.org/wiki/File:Itel_A50_rear.jpg) by User:JGBlue1509 | **CC0 1.0** — public domain, no attribution required |

The Samsung and Infinix images are two crops of the same Pexels photograph,
which shows both handsets side by side.

## Why iMO is not listed

Aidoo Tech also stocks **iMO** handsets, but no openly licensed photograph of
an iMO device exists — not on the stock libraries, not on Wikimedia Commons.
Rather than show another manufacturer's phone under the iMO name, the brand
was removed from the site altogether.

To put it back: photograph an iMO handset against a plain background, save it
as `public/brands/imo.webp`, and add an entry to `PHONE_BRANDS` in
`src/lib/content.ts`:

```ts
{
  name: "iMO",
  note: "Entry-level handsets",
  photo: "/brands/imo.webp",
  photoAlt: "The rear of an iMO handset.",
},
```

Also add `"iMO"` back to the `items` list of the `smartphones` category, and to
the headline of the second hero slide, so the range reads consistently.

## Replacing any of these

The same applies to every brand here: a photograph of the handset actually
sitting on your shelf beats a stock image of the same model. Drop the file in
this folder and update the matching `photo` path in `PHONE_BRANDS`.
