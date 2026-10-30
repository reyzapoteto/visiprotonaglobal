# Visi Protona Global – Website

Situs company profile pemasok kraft paper, paper bag, dan raw paper roll. Next.js + Tailwind CSS.

## Menjalankan

```bash
npm install
cp .env.example .env.local   # isi sesuai kebutuhan
npm run dev                  # http://localhost:3000
```

## Skrip

| Perintah                      | Fungsi                                                     |
| ----------------------------- | ---------------------------------------------------------- |
| `npm run dev`                 | Server pengembangan                                        |
| `npm run build` / `npm start` | Build dan jalankan produksi                                |
| `npm run check`               | Typecheck + lint + cek format (wajib lolos sebelum commit) |
| `npm run format`              | Format otomatis dengan Prettier                            |

## Dokumen

- [`CLAUDE.md`](CLAUDE.md): aturan kode
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): arsitektur dan keputusan
- [`DESIGN.md`](DESIGN.md): token dan spesifikasi visual

## Yang masih perlu diverifikasi

Cari `TODO(verify)` di kode. Ringkasnya: angka statistik, teks FAQ persis, isi halaman kategori/About, warna & font asli, dan unduh aset ke `public/images`.
