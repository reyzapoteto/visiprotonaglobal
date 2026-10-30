@AGENTS.md

# Code Rules – Visi Protona Global

Aturan wajib untuk semua kode di repo ini (manusia maupun AI). Arsitektur: `docs/ARCHITECTURE.md`. Token visual: `DESIGN.md`.

## Stack

Next.js (App Router, Cache Components aktif) · React · TypeScript strict · Tailwind CSS v4. Versi Next.js di sini punya perubahan besar: baca `node_modules/next/dist/docs/` sebelum memakai API Next.js yang belum dikenal.

## Struktur & tanggung jawab

1. `app/` hanya routing: `page.tsx` tipis, merakit komponen dan mengekspor `metadata`. Tanpa logika bisnis.
2. `components/ui/` = primitif tanpa konten bisnis. `components/layout/` = Header/Footer. `components/sections/` = blok halaman. `components/forms/` = form.
3. Semua teks, tautan, kontak, dan data produk hidup di `content/*.ts`. Dilarang meng-hardcode copy atau nomor/email di komponen.
4. Logika murni dan helper di `lib/` (`cn`, `assets`, `metadata`, `contact`, `mailer`). `lib/` tidak boleh mengimpor dari `components/` atau `app/`.
5. Aliran impor satu arah: `app → components → content/lib`. `content/` tidak mengimpor apa pun dari `components/`.

## Komponen

6. Server Component secara default. Tambahkan `"use client"` hanya bila perlu state/efek/event browser, dan sekecil mungkin (pecah, jangan menandai seluruh section).
7. Satu komponen per file; nama file = nama komponen (PascalCase). Named export untuk komponen, default export hanya untuk file konvensi Next.js (`page`, `layout`, dll.).
8. Props bertipe eksplisit (`type XProps`). Tanpa `any`; gunakan `unknown` lalu persempit.
9. Utamakan HTML semantik dan native (`<details>` untuk FAQ, `<nav>`, `<button>`). Tambah JS hanya jika native tidak cukup.

## Styling

10. Hanya utilitas Tailwind dan token dari `app/globals.css` (`bg-brand-500`, `text-ink`, `rounded-card`). Warna wajib lewat token (dilarang hex di JSX). Nilai arbitrer seperti `w-[539px]` hanya untuk dimensi spesifik dari Figma.
11. Mobile-first: gaya dasar untuk mobile, tambah `md:`/`lg:`/`xl:`.
12. Gabungkan class kondisional dengan `cn()` dari `lib/cn.ts`.
13. Urutan class diatur Prettier (plugin Tailwind). Jangan urutkan manual.

## Gambar, link, aksesibilitas

14. Gambar selalu lewat `next/image` dengan `alt` bermakna (dekoratif: `alt=""`). Tautan internal selalu `next/link`.
15. Semua kontrol bisa dipakai lewat keyboard; ada focus ring; kontras memenuhi WCAG AA; hormati `prefers-reduced-motion`.

## Data, form, keamanan

16. Input dari klien tidak dipercaya: validasi ulang di server (`lib/contact.ts`). Rahasia hanya di `process.env`, tidak pernah di kode atau klien; variabel klien harus berawalan `NEXT_PUBLIC_`.
17. Jangan commit `.env*` (kecuali `.env.example`).

## Kualitas

18. Sebelum commit: `npm run check` (typecheck + lint + format) harus lolos.
19. Tidak ada `console.log`, kode mati, atau komentar yang hanya mengulang kode. Komentar menjelaskan _kenapa_. Tandai kerja tertunda dengan `TODO(verify):` plus alasannya.
20. Jangan menambah dependensi bila fitur native/stdlib cukup. Setiap dependensi baru harus punya alasan di PR.

## Git

21. Commit kecil dan fokus, format Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`). Perubahan visual wajib dicek di 375, 768, 1280 px.
