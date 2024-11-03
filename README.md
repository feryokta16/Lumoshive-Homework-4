# Home Work 4
## Project Sructure
```
project-root/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/              # Folder untuk komponen presentasional (UI)
│   │   ├── TaskInput.js         # Komponen input untuk menambah task baru
│   │   └── TaskList.js          # Komponen untuk menampilkan daftar task
│   ├── containers/              # Folder untuk komponen container (logic)
│   │   └── TaskManagerContainer.js # Container untuk menangani state dan logic utama
│   ├── App.js                   # Entry point utama aplikasi
│   ├── index.js                 # Root React DOM rendering
│   └── styles.css               # File CSS tambahan (opsional)
├── package.json                 # Konfigurasi npm
└── README.md                    # Dokumentasi proyek
```

## Penjelasan Struktur
- components/: Folder ini berisi komponen presentasional yang hanya bertanggung jawab untuk rendering UI tanpa menyimpan state. Komponen seperti TaskInput (untuk input task) dan TaskList (untuk daftar task) ditempatkan di sini.
- containers/: Folder ini berisi komponen container yang menangani state dan logika bisnis. Dalam proyek ini, TaskManagerContainer.js berfungsi sebagai container utama yang mengelola state task dan fungsi untuk menambah atau mengubah status task.
- App.js: File ini adalah root dari aplikasi React Anda dan berfungsi sebagai tempat untuk mengatur container utama TaskManagerContainer.
- index.js: File entry utama untuk React yang menghubungkan aplikasi ke index.html di folder public.
- styles.css: Berisi styling khusus untuk tampilan atau responsivitas tambahan.
Dengan struktur ini, kode menjadi lebih terorganisir dan memisahkan antara tampilan (presentational components) dan logika (container components).