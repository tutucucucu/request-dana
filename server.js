const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route untuk go.html
app.get('/go.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'go.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
