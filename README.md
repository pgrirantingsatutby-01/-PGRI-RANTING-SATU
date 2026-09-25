# Guru Ranting 01 Tambakboyo

Website **Guru Ranting 01 Tambakboyo** — *Bersatu untuk Guru, Berkarya untuk Pendidikan*.

## Fitur
Beranda, profil, data guru/anggota, berita, agenda, dokumentasi, informasi, kontak, responsif, fallback demo, dan integrasi Supabase.

## Supabase
1. Buat project Supabase.
2. Jalankan `supabase.sql` di SQL Editor.
3. Isi URL project dan anon/public key pada `config.js`.
4. Jangan masukkan service_role key ke frontend.

## GitHub Pages
Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Admin & Login Pengurus
- Buka `admin.html` untuk dashboard pengurus.
- Authentication menggunakan Supabase Auth (email + password).
- CRUD tersedia untuk Guru, Berita, Agenda, Galeri, dan Dokumen.
- Galeri dan Dokumen mendukung upload ke Supabase Storage melalui bucket `galeri` dan `dokumen`.
- Jalankan `supabase.sql` terlebih dahulu.
- Buat user pengurus di Supabase Authentication → Users, lalu masukkan UUID user ke `admin_profiles` sebagai `admin` atau `editor`.

Contoh SQL setelah membuat user:
```sql
insert into public.admin_profiles(id,nama,role)
values('UUID_USER','Nama Pengurus','admin');
```

**Penting:** `config.js` hanya boleh berisi Supabase URL dan anon/public key. Jangan memasukkan `service_role` key ke website.
