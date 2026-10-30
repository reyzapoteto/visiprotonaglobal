# DESIGN.md – Visi Protona Global (Next.js + Tailwind)

Sumber kebenaran visual untuk build ulang https://visiprotonaglobal.com/.

> **Status token:** ✅ = terbaca dari situs asli · ⚠️ = USULAN sementara (belum bisa diverifikasi dari situs live).
> Ganti semua ⚠️ setelah inspect DevTools (`--e-global-color-*`, computed font). Hanya `tailwind.config` yang perlu diubah; komponen tidak.

## 1. Brand

- Perusahaan: pemasok & importir kraft paper, paper bag, raw paper roll (Indonesia) ✅
- Karakter: industrial, bersih, terpercaya, B2B ⚠️
- Logo: `/images/vpg-logo.png` (header) dan versi 1024px (footer) ✅
  - Sumber: `wp-content/uploads/2026/06/VPG_R03_color_transparent(-1024x576).png`
  - Favicon: `VPG_512x512_white-300x300.png`

## 2. Warna (⚠️ usulan, tema kraft paper)

| Token       | Hex     | Pakai untuk                     |
| ----------- | ------- | ------------------------------- |
| `brand-900` | #2B1D12 | teks heading, footer            |
| `brand-700` | #7A4E2D | tombol utama hover              |
| `brand-500` | #A9713F | tombol utama, aksen, label `//` |
| `brand-100` | #F3E9DC | latar section selang-seling     |
| `ink`       | #1F2937 | teks body                       |
| `muted`     | #6B7280 | teks sekunder                   |
| `surface`   | #FFFFFF | latar utama, kartu              |
| `line`      | #E5E7EB | border, divider                 |

## 3. Tipografi

- Font: Google Fonts, `display=swap` ✅ (nama font ⚠️ → default usulan **Inter**, via `next/font/google`)
- Skala (desktop / mobile):
  - H1 hero: 56 / 36 px, bold, leading 1.1
  - H2 section: 40 / 28 px, bold
  - H3 kartu: 22 / 20 px, semibold
  - Body: 16 px, leading 1.6
  - Label section: 14 px, uppercase, tracking-widest, awalan `// ` ✅ (contoh `// ABOUT US`)

## 4. Layout & spasi

- Container: max-w 1200 px, padding x 16 (mobile) / 24 (desktop) ⚠️
- Section: padding y 64 (mobile) / 96 (desktop) ⚠️
- Breakpoint: 375 · 768 · 1280 · 1440
- Grid produk: 1 kolom → 2 (md) → 4 (xl) ✅ (4 kartu)
- Radius: kartu 16 px, tombol 8 px ⚠️; bayangan kartu `shadow-md` ⚠️

## 5. Komponen

| Komponen        | Spesifikasi                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Header          | Logo kiri; Home, About, Product Categories (dropdown), tombol **Contact Us** ✅; sticky ⚠️; hamburger di mobile |
| Dropdown        | Raw Materials, Finished Paper Packaging, Industrial Chemicals, Export Division ✅; hover/focus + keyboard       |
| Button primer   | bg `brand-500`, teks putih, hover `brand-700`, px 24 py 12                                                      |
| Button sekunder | outline `brand-500`                                                                                             |
| Hero            | headline + subheading + tombol _View Products_ (scroll ke produk) + gambar & SVG roll kraft ✅                  |
| StatCounter     | angka + "+" , hitung naik saat masuk viewport ✅ (nilai ⚠️ ambil dari situs live)                               |
| ProductCard     | gambar 1024×909 rasio ~9:8, judul, link _Explore_ ✅                                                            |
| ServiceBlock    | SVG ilustrasi + judul + deskripsi (2 blok) ✅                                                                   |
| FaqAccordion    | 7 item, satu terbuka, `aria-expanded` ✅                                                                        |
| CtaBanner       | "Have Questions or Needed Assistance?" + Contact Us ✅, latar `brand-900` ⚠️                                    |
| Footer          | alamat BSD Tangerang Selatan, quick links, telepon, email ✅                                                    |

## 6. Gerak

- Counter: ease-out 1,5 detik, sekali saja ⚠️
- Hover kartu: naik 4 px + bayangan ⚠️; transisi 200 ms
- Hormati `prefers-reduced-motion`.

## 7. Aset gambar ✅

Hero `Group-1.png`, `KRAFT-PAPER-ROLL-1.svg`; kartu `Frame-21-1024x909.jpg` (Raw Materials), `Frame-17-1024x909.jpg` (Industrial Chemicals), `Frame-21-1-1024x909.jpg` (Export Division), `Frame-17-1-1024x909.jpg` (Finished Paper Packaging); layanan `Retail-Supply-of-Paper-Rolls.svg`. Semua di bawah `https://visiprotonaglobal.com/wp-content/uploads/2026/06/`. Unduh ke `public/images/` (perlu Anda unduh/lampirkan; akses dari sini diblokir).

## 8. Pemetaan ke Tailwind

```ts
// tailwind.config.ts (theme.extend)
colors: {
  brand: { 100: "#F3E9DC", 500: "#A9713F", 700: "#7A4E2D", 900: "#2B1D12" },
  ink: "#1F2937", muted: "#6B7280", line: "#E5E7EB",
},
fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
maxWidth: { container: "1200px" },
borderRadius: { card: "16px" },
```
