const express = require('express');
const app = express();
const cors = require('cors');
const skorRoutes = require('./routes/quizRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api', skorRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server aktif di http://localhost:${PORT}`));