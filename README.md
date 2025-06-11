# Pintu Desa

## Komponen Baru

- [ ] Chart

## Catatan

Form Keputusan Kepala Desa menggunakan data dari Buku Peraturan Desa, tetapi
tidak menggunakan kolom Surat Diundangkan dan Tanggal Surat Diundangkan.  
Form ini terpisah dari Form Buku Peraturan Desa, tetapi form tersebut juga bisa
digunakan untuk membuat Keputusan Kepala Desa.  
Jika opsi Keputusan Kepala Desa dipilih di dalam Buku Peraturan Desa, maka kolom
Surat Diundangkan dan Tanggal Surat Diundangkan tidak akan ditampilkan.

## Status Fitur

**Keterangan**:

- **Tebal** = API sudah tersedia dan siap digunakan atau tidak perlu API
- _Miring_ = Catatan atau data belum tersedia
- - [x] = Fitur sudah selesai dibuat

### Administrasi > Buku Administrasi > Administrasi Umum

- [ ] **A1 Buku Peraturan Desa** = peraturan
- [ ] **A2 Buku Keputusan Kepala Desa** = keputusan
- [ ] **A3 Buku Inventaris Desa** = inventaris
- [ ] A4 Buku Aparat Pemerintah Desa = aparat (_butuh data aparat pemerintah
      desa_)
- [ ] **A5 Buku Tanah Kas Desa** = tanahKas
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
- [ ] B4 Buku Penduduk Sementara = pendudukSementara
- [ ] B5 Buku KTP dan Kartu Keluarga = ktpKk (_butuh data penduduk desa, tidak
      ada CRUD_)

### Administrasi > Buku Administrasi > Administrasi Keuangan Desa

- [ ] C1 Buku Anggaran Pendapatan dan Belanja Desa = anggaran (_lihat contoh
      form_)
- [ ] **C2 Buku Rencana Anggaran Biaya Desa** = rab
- [ ] C3 Buku Kas Pembantu Kegiatan = kasPembantuKegiatan
- [ ] C4 Buku Kas Umum = kasUmum
- [ ] C5 Buku Kas Pembantu = kasPembantu
- [ ] C6 Buku Bank Desa = bank

### Administrasi > Buku Administrasi > Administrasi Pembangunan

- [ ] D1 Buku Rencana Kerja Pembangunan Desa = rencanaKerjaPembangunan
- [ ] D2 Buku Kegiatan Pembangunan Desa = kegiatanPembangunan
- [ ] D3 Buku Inventaris Hasil-hasil Pembangunan Desa =
      inventarisHasilPembangunan
- [ ] D4 Buku Kader Pemberdayaan Masyarakat Desa = kaderPemberdayaanMasyarakat

### Administrasi > Lainnya

- [ ] Disposisi Surat (_tidak ada CRUD_)
- [ ] Pendaftaran Akun (_hanya perlu form untuk verifikasi, ubah nama menjadi
      Pendaftaran Pengguna_)
