const express = require('express');
const router = express.Router();
const db = require('../db');

// GET semua skor
router.get('/skor', (req, res) => {
  db.query('SELECT * FROM skor_quiz ORDER BY waktu_selesai DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST skor baru
router.post('/skor', (req, res) => {
  const { skor } = req.body;
  if (skor == null) {
    return res.status(400).json({ message: 'Skor tidak boleh null' });
  }

  db.query('INSERT INTO skor_quiz (skor) VALUES (?)', [skor], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Skor berhasil disimpan!' });
  });
});

// DELETE skor tertentu (by ID)
router.delete('/skor/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM skor_quiz WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Skor dihapus!' });
  });
});

// DELETE semua skor
router.delete('/skor', (req, res) => {
  db.query('DELETE FROM skor_quiz', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Semua skor dihapus!' });
  });
});

module.exports = router;