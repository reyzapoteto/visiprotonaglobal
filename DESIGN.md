# DESIGN.md – Visi Protona Global

Sumber: file Figma `3Bnbop8BjrqIrA2ofDYJr7` (VPG Project), page Presentation. Desktop 1440 px, mobile 440 px. Token ada di `app/globals.css`.

## Warna

| Token Tailwind         | Hex                  | Pakai untuk                                                         |
| ---------------------- | -------------------- | ------------------------------------------------------------------- |
| `brand-700`            | `#224e32`            | Hijau tua: aksen italic "Reliable", label `//`, banner Our Services |
| `brand-500`            | `#317249`            | Hijau tombol utama                                                  |
| `ink` / `brand-900`    | `#1e1e1e`            | Teks utama, header, banner CTA, footer                              |
| `muted`                | `#777777`            | Teks deskripsi                                                      |
| `brand-100`            | `#f4f4f4`            | Latar hero                                                          |
| `ink/5`                | `rgba(30,30,30,.05)` | Kartu statistik, item FAQ                                           |
| `ink/72`               | `rgba(30,30,30,.72)` | Label statistik                                                     |
| `white/56`, `white/72` |                      | Teks di atas latar gelap                                            |
| `black/5`              | `rgba(0,0,0,.05)`    | Teks watermark besar                                                |

## Tipografi

Font: **Plus Jakarta Sans** (400, 500, 600, 700; italic 600/700) via `next/font/google`.

| Elemen             | Desktop / Mobile | Gaya                                                           |
| ------------------ | ---------------- | -------------------------------------------------------------- |
| Hero H1            | 56 / 32 px       | Medium, leading 1.3; kata "Reliable" semibold italic hijau tua |
| Hero deskripsi     | 16 px            | Regular, leading 1.8, `muted`, lebar 539 px                    |
| Label section      | 14 px            | Bold italic, uppercase, awalan `//  ` (dua spasi)              |
| H2 section         | 40 / 32 px       | Bold, uppercase, leading 1.3                                   |
| Paragraf About     | 24 px            | Leading 2; kalimat pertama semibold `ink`                      |
| Angka statistik    | 40 px            | Semibold; label 20 px                                          |
| Judul kartu produk | 24 px            | Bold, uppercase                                                |
| Item layanan       | 24 px            | Bold, uppercase, daftar bernomor                               |
| Pertanyaan FAQ     | 20 px            | Semibold                                                       |
| Tombol             | 18 px            | Medium, putih                                                  |
| Watermark          | 200 / 150 px     | Bold, `black/5`                                                |

## Layout

- Hero: tinggi 800 px, latar `brand-100`; teks di kiri (62 px desktop, 24 px mobile), gambar gulungan di kanan (desktop) atau di bawah teks (mobile).
- Konten section: lebar maks 1440 px, padding horizontal 48 px (desktop) / 24 px (mobile).
- Header: bilah melayang `ink`, tinggi 91 px, margin 16 px dari tepi, radius 4 px.
- Produk: grid 2 kolom (desktop), 1 kolom (mobile), jarak 24 px; gambar rasio 660:586, radius 4 px.
- Our Services: banner `brand-700` lebar maks 1410 px, radius 4 px, teks kiri dan foto kanan.
- FAQ: 2 kolom (desktop), 1 kolom (mobile), jarak 16 px; item padding 24 px, radius 4 px.
- CTA dan footer: dua kotak `ink` radius 8 px, padding 32 px (24 px untuk CTA mobile), jarak 16 px.

## Komponen

- **Button**: 165 × 55 px, `brand-500`, radius 4 px, bentuk dekoratif di pojok kanan atas (`ButtonDecor`).
- **StatCounter**: kartu `ink/5`, ikon dalam lingkaran `ink` (32 px, padding 16 px), angka menghitung naik saat terlihat.
- **ProductCard**: seluruh kartu adalah tautan ke halaman kategori.
- **FAQ**: `<details>` native, ikon caret 24 px berputar saat terbuka.

Aset gambar: lihat `docs/ASSETS.md`.
