# Pintu Desa

## Komponen Baru

- [ ] Chart

## Catatan

Form **Keputusan Kepala Desa** menggunakan data dari **Buku Peraturan Desa**,
tetapi **tidak menggunakan** kolom **Surat Diundangkan** dan **Tanggal Surat
Diundangkan**.  
Form ini terpisah dari **Form Buku Peraturan Desa**, tetapi form tersebut juga
bisa digunakan untuk membuat **Keputusan Kepala Desa**.  
Jika opsi _Keputusan Kepala Desa_ dipilih di dalam **Buku Peraturan Desa**, maka
kolom **Surat Diundangkan** dan **Tanggal Surat Diundangkan** tidak akan
ditampilkan.

## Status Fitur

**Keterangan**:

- **Tebal** = API sudah tersedia dan siap digunakan
- _Miring_ = Catatan atau data belum tersedia
- [x] = Fitur sudah selesai dibuat

### Administrasi > Buku Administrasi > Administrasi Umum

- [ ] **A1 Buku Peraturan Desa** = peraturan
- [ ] **A2 Buku Keputusan Kepala Desa** = keputusan
- [ ] **A3 Buku Inventaris Desa** = inventaris
- [ ] A4 Buku Aparat Pemerintah Desa = aparat (_butuh data aparat pemerintah
      desa_)
- [ ] **A5 Buku Tanah Kas Desa** = tanah_kas
- [ ] **A6 Buku Tanah Desa** = tanah
- [ ] **A7 Buku Agenda Desa** = agenda
- [ ] **A8 Buku Ekspedisi** = ekspedisi
- [ ] **A9 Buku Lembaran dan Buku Berita Desa** = lembaran

### Administrasi > Buku Administrasi > Administrasi Penduduk Desa

- [ ] B1 Buku Induk Penduduk Desa = penduduk (_butuh data penduduk desa, tidak
      ada CRUD_)
- [ ] B2 Buku Mutasi Penduduk Desa = mutasi (_butuh data penduduk desa_)
- [ ] B3 Buku Rekapitulasi Jumlah Penduduk Desa = rekapitulasi (_butuh data
      penduduk desa, tidak ada CRUD_)
- [ ] B4 Buku Penduduk Sementara = penduduk_sementara
- [ ] B5 Buku KTP dan Kartu Keluarga = ktp*kk (\_butuh data penduduk desa, tidak
      ada CRUD*)

### Administrasi > Buku Administrasi > Administrasi Keuangan Desa

- [ ] C1 Buku Anggaran Pendapatan dan Belanja Desa = anggaran (_lihat contoh
      form_)
- [ ] **C2 Buku Rencana Anggaran Biaya Desa** = rab
- [ ] C3 Buku Kas Pembantu Kegiatan = kas_pembantu_kegiatan
- [ ] C4 Buku Kas Umum = kas_umum
- [ ] C5 Buku Kas Pembantu = kas_pembantu
- [ ] C6 Buku Bank Desa = bank

### Administrasi > Buku Administrasi > Administrasi Pembangunan

- [ ] D1 Buku Rencana Kerja Pembangunan Desa = rencana_kerja_pembangunan
- [ ] D2 Buku Kegiatan Pembangunan Desa = kegiatan_pembangunan
- [ ] D3 Buku Inventaris Hasil-hasil Pembangunan Desa =
      inventaris_hasil_pembangunan
- [ ] D4 Buku Kader Pemberdayaan Masyarakat Desa = kader_pemberdayaan_masyarakat

### Administrasi > Lainnya

- [ ] Disposisi Surat (_tidak ada CRUD_)
- [ ] Pendaftaran Akun (_hanya perlu form untuk verifikasi, ubah nama menjadi
      Pendaftaran Pengguna_)
