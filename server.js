const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (request, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
    (request, response) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.listen(3000, () => console.log('App na porta 3000'));
