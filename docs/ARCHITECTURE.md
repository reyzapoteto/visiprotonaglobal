# Arsitektur

Situs company profile statis (tanpa CMS/database). Satu-satunya server-side adalah `POST /api/contact`.

## Struktur folder

```
app/
  layout.tsx              Root: font, metadata dasar, Header, Footer
  page.tsx                Home (rakit 6 section)
  about/ raw-materials/ finished-paper-packaging/
  industrial-chemicals/ export-division/ contact-us/   page.tsx tiap rute
  api/contact/route.ts    Handler form kontak
  sitemap.ts robots.ts not-found.tsx
components/
  ui/         Container, Section, SectionHeading, Button, StatCounter, PageHeader
  layout/     Header, MobileMenu, Footer
  sections/   Hero, AboutSection, ProductsSection, ServicesSection,
              FaqSection, CtaBanner, ProductCard, CategoryPage
  forms/      ContactForm
content/      site.ts, navigation.ts, products.ts, services.ts, faq.ts
lib/          cn.ts, assets.ts, metadata.ts, contact.ts, mailer.ts
docs/         ARCHITECTURE.md
```

## Aturan dependensi

```
app  ──►  components  ──►  content, lib
```

- `content/` dan `lib/` tidak mengimpor `components/` atau `app/`.
- Komponen UI tidak tahu konten bisnis; section mengambil data dari `content/`.

## Keputusan utama

| Topik                  | Keputusan                                                           | Alasan                                            |
| ---------------------- | ------------------------------------------------------------------- | ------------------------------------------------- |
| Rendering              | Semua halaman statis (prerender)                                    | Konten tidak berubah per request; cepat dan murah |
| Interaktivitas         | Client Component hanya: MobileMenu, StatCounter, ContactForm        | Minimalkan JS di klien                            |
| FAQ & dropdown desktop | `<details>` dan CSS `group-hover`/`focus-within`                    | Tanpa JS, aksesibel bawaan                        |
| Konten                 | File TypeScript bertipe di `content/`                               | Tanpa CMS; mudah diubah dan dicek tipe            |
| Validasi form          | Fungsi `validateContact` bersama (klien + server)                   | Satu sumber aturan, tanpa dependensi              |
| Email                  | Resend lewat `fetch` di Route Handler                               | Tanpa SDK tambahan                                |
| Gambar                 | `next/image`; saat ini hot-link dari situs lama via `lib/assets.ts` | Ganti ke `public/images` setelah aset diunduh     |
| Metadata               | Helper `pageMetadata()` per halaman + `sitemap.ts` + `robots.ts`    | SEO konsisten                                     |

## Alur form kontak

`ContactForm` (klien) → `validateContact` → `POST /api/contact` → validasi ulang di server → honeypot → kirim email via Resend → respons JSON `{ ok }` atau `{ ok: false, errors }`.

## Menambah halaman produk baru

1. Tambah entri di `content/products.ts`.
2. Buat `app/<slug>/page.tsx` yang merender `<CategoryPage slug="<slug>" />` dan ekspor `metadata`.
3. Tautan di navigasi/footer ikut dari `content/navigation.ts`.
