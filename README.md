📘 Quiz JS UAS — Kuis Interaktif Web
Aplikasi kuis pilihan ganda berbasis HTML, JavaScript, Node.js, dan MySQL. Menyimpan skor ke database, menampilkan riwayat, serta memberi umpan balik visual pada jawaban pengguna.

🚀 Fitur Utama
- Ambil soal dari Open Trivia API
- Tandai jawaban benar (hijau) dan salah (merah)
- Hitung skor & simpan ke MySQL via REST API
- Tampilkan riwayat di riwayat.html
- Hapus skor satu per satu atau sekaligus
- Tampilan responsive & karakter HTML ter-decode

🛠 Teknologi
- Frontend: HTML, CSS, JS
- Backend: Node.js + Express
- Database: MySQL
- API: opentdb.com

⚙️ Cara Menjalankan
- Install backend dependencies:
cd backend
npm install

- Buat file .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=quizdb

- Jalankan server:
node server.js

- Buka frontend/index.html di browser

🧾 Struktur Tabel
CREATE DATABASE quizdb;
CREATE TABLE skor_quiz (
  id INT AUTO_INCREMENT PRIMARY KEY,
  skor INT NOT NULL,
  waktu_selesai DATETIME DEFAULT CURRENT_TIMESTAMP
);


🙌 Kontribusi
Proyek ini dibuat oleh Aisy sebagai bagian dari eksplorasi web modern dan pembelajaran mandiri. Bebas digunakan dan dikembangkan.
