var express = require('express');
var router = express.Router();
var formidable = require('formidable'); //instalando o formidable
var fs = require('fs') //nativo do node para tratar arquivos

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/file', (req, res)=>{
  let form = new formidable.IncomingForm({ //envia o formulario com o diretorio da pasta upload que esta na raiz
    uploadDir: './upload', //envia o diretório 
    keepExtensions: true //mantem as extensões do arquivo
  })

    form.parse(req, (err, fields, files)=>{ //pega o arquivo e da um parse para interpretar
      //recebendo o req(JSON), e na arrow function ele recebe o erro(caso haja), 
      //o fields e o files separa os dados enviados via post para verificar oque é arquivo e oque nao é
      //colocando em 2 JSONS diferentes

      let path = "./" +   fields.path

      if(fs.existsSync(path)){
          fs.unlink(path, err=>{

            if(err){
              res.status(400).json();
            }
          });//remove arquivo fisico

      }
      res.json({
        fields
      })
    })

});
router.post('/upload', (req, res) =>{ //criando a rota upload
  let form = new formidable.IncomingForm({ //envia o formulario com o diretorio da pasta upload que esta na raiz
    uploadDir: './upload', //envia o diretório 
    keepExtensions: true //mantem as extensões do arquivo
  })

    form.parse(req, (err, fields, files)=>{ //pega o arquivo e da um parse para interpretar
      //recebendo o req(JSON), e na arrow function ele recebe o erro(caso haja), 
      //o fields e o files separa os dados enviados via post para verificar oque é arquivo e oque nao é
      //colocando em 2 JSONS diferentes
      res.json({
        files
      })
    })

   

})
module.exports = router;

