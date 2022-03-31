var express = require('express');
var router = express.Router();
var formidable = require('formidable'); //instalando o formidable

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{ //criando a rota upload
  let form = new formidable.IncomingForm({ //envia o formulario com o diretorio da pasta upload que esta na raiz
    keepExtensions: true, //mantem as extensões do arquivo
    uploadDir: './upload' //envia o diretório 
  })

    form.parse(req, (err, fields, files)=>{ //pega o arquivo e da um parse para interpretar
      //recebendo o req(JSON), e na arrow function ele recebe o erro(caso haja), 
      //o fields e o files separa os dados enviados via post para verificar oque é arquivo e oque nao é
      //colocando em 2 JSONS diferentes
      res.json({
        files
      })
    })

    res.json(req.body) //ela recebe o JSON

})
module.exports = router;
