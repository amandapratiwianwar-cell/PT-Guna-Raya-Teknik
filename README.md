# Website PT Guna Raya Teknik

Website company profile dan katalog AC. Tanpa framework dan tanpa proses build: cukup HTML, CSS, dan JavaScript biasa.

## Isi paket

```
guna-raya-teknik/
├── index.html                      Halaman utama (beranda + halaman katalog dalam satu file)
├── css/style.css                   Semua gaya tampilan
├── js/main.js                      Semua fitur interaktif dan data (portofolio, katalog, kalkulator)
├── assets/
│   ├── logo.png                    Logo perusahaan
│   └── portfolio/                  Foto dan video dokumentasi proyek
└── guna-raya-teknik-satu-file.html Versi satu berkas (semua digabung, bisa dibuka langsung)
```

## Cara membuka
- **Di komputer:** klik dua kali `index.html`. Koneksi internet diperlukan hanya untuk memuat font Google.
- **Dipasang online:** unggah seluruh folder ke hosting (Netlify, Vercel, GitHub Pages, atau hosting biasa). `index.html` harus berada di akar.

## Dua halaman
Halaman berpindah lewat alamat hash, tanpa memuat ulang:
- `index.html` : beranda
- `index.html#/katalog` : katalog semua merek
- `index.html#/katalog/daikin` : katalog satu merek (`daikin`, `panasonic`, `sharp`, `lg`, `samsung`, `gree`)

## Yang paling sering diubah

**Nomor WhatsApp, email, alamat**
- Nomor WhatsApp cukup diganti di **satu tempat**: variabel `NOMOR` di `js/main.js` (format `6283892122277`, tanpa `+` dan tanpa `0` di depan). Semua tombol, tautan, dan tulisan nomor di halaman mengikuti variabel ini.
- `NOMOR` saat ini berisi nomor perusahaan `628138886938` (0813-888-6938).
- Tautan `wa.me/...` di `index.html` ikut diperbarui otomatis oleh `NOMOR`.
- Email `pt.gunarayateknik@gmail.com` dan alamat ada di bagian Kontak dan footer pada `index.html`.

**Menambah proyek portofolio**
Buka `js/main.js`, cari `var PROJECTS=`. Tambahkan satu objek per proyek, lalu simpan berkasnya di `assets/portfolio/`:
```js
{ "judul": "Instalasi AC kantor X", "tipe": "Hasil pemasangan", "jenis": "Instalasi",
  "lokasi": "Gowa", "tahun": "2026", "unit": "8 unit", "ket": "Keterangan singkat",
  "foto": "assets/portfolio/nama-foto.jpg" }
```
- Foto sebelum dan sesudah (muncul penggeser perbandingan): ganti `foto` dengan `"sebelum"` dan `"sesudah"`.
- Video: gunakan `"video"` dan `"poster"` (gambar sampul).
- `tipe` dipakai untuk filter pertama (misalnya Proses pengerjaan, Hasil pemasangan, Lokasi proyek, Video). Anda bisa menambah `"kategori"` klien lalu mengganti filter di kode jika perlu.
- Format foto JPG dan video MP4 (H.264). Kecilkan ukuran agar halaman tetap ringan.

**Foto produk dan logo merek di katalog**
Di `js/main.js`, cari `var BR=[`. Tiap produk adalah larik:
`[nama seri, tipe, teknologi, kapasitas, [fitur...], contoh model]`
- Foto produk: tambahkan elemen ke-7 berisi alamat gambar, mis. `"assets/produk/daikin-ftkq.jpg"`. Tanpa foto, kartu memakai ilustrasi tipe.
- Logo resmi merek: tambahkan `logo:"assets/merek/daikin.png"` pada objek merek. Tanpa logo, merek tampil sebagai tulisan bergaya warna merek.

**Kalkulator kapasitas AC**
Rumus ada di fungsi `hitung()` di `js/main.js` (acuan 500 BTU per m², lalu penyesuaian tinggi plafon, lokasi, matahari, penghuni, dan peralatan). Tabel PK ke BTU ada di variabel `PKT`.

**Warna**
Semua warna ada di bagian awal `css/style.css` (variabel `--brand`, `--accent`, dan seterusnya, termasuk versi mode gelap).

## Catatan
- Formulir pemesanan **mengirim lewat WhatsApp**. Data tidak tersimpan di server. Panel admin untuk mengelola proyek dan pesanan membutuhkan backend dan belum termasuk.
- Peta lokasi bersifat skematis. Navigasi sebenarnya memakai tombol Google Maps.
- Data katalog dirangkum dari informasi publik di Indonesia (Oktober 2026). Periksa ketersediaan seri sebelum dipakai.
- Judul foto portofolio ditulis berdasarkan isi foto. Lengkapi nama proyek dan klien setelah dipastikan.
- Angka "100+ pelanggan" dan "100+ unit terjual" diambil dari company profile.

## Alur formulir pemesanan
Pengunjung mengisi formulir lalu menekan **Kirim lewat WhatsApp**. Isian divalidasi (nama, nomor WhatsApp Indonesia, alamat, dan tanggal survei tidak boleh kemarin). Pengunjung langsung dialihkan ke WhatsApp dengan pesan yang sudah terisi, tinggal menekan Kirim. Jika pengalihan terblokir (misalnya saat halaman ditampilkan di dalam bingkai), muncul pratinjau pesan beserta tombol **Buka WhatsApp**, **Salin pesan**, dan **Ubah data**.

**Pengiriman otomatis tanpa menekan Kirim** tidak bisa dilakukan hanya dengan HTML. Untuk itu dibutuhkan fungsi server dan layanan WhatsApp API atau gateway. Setelah fungsi server tersedia, isi variabel `ENDPOINT` di `js/main.js` dengan alamatnya. Formulir akan mengirim data (JSON) ke alamat itu, lalu tetap mengalihkan pengunjung ke WhatsApp. Pesan memakai format `wa.me` sehingga bekerja di HP maupun komputer. Fungsi penyusun pesan ada di `js/main.js` (antara penanda `WA-START` dan `WA-END`).

## Email
- Tautan email di Kontak dan footer membuka aplikasi email dengan subjek terisi. Alamat penerima diatur lewat variabel `EMAIL` di `js/main.js` (juga ada di `index.html`).
- Tombol **Kirim lewat email** di formulir membuka aplikasi email pengunjung dengan data pesanan terisi.
- **Salinan otomatis ke email perusahaan:** setiap kali formulir dikirim lewat WhatsApp, datanya juga dikirim ke layanan FormSubmit (`ENDPOINT` di `js/main.js`) yang meneruskannya ke email perusahaan. Pada pengiriman pertama, FormSubmit mengirim email aktivasi ke `pt.gunarayateknik@gmail.com`. Klik tautan aktivasinya satu kali, setelah itu pesanan berikutnya masuk otomatis. Data pelanggan melewati layanan pihak ketiga ini. Kosongkan `ENDPOINT` untuk mematikannya, atau ganti dengan fungsi server sendiri. Fitur ini hanya berjalan setelah website dipasang di hosting (tidak di tampilan uji yang membatasi koneksi keluar).
