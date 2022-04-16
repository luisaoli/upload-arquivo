const express = require('express')
	, app = express()
    , multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    
        // error first callback
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
    
        // error first callback
        cb(null, file.originalname)
    }
});
    
// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });


app.post('/file/upload', upload.single('file'), 
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));  

app.use(express.static('public'));
app.listen(3000, () => console.log('App na porta 3000'));
