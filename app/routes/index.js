var express = require('express');
var router = express.Router();
var formidable = require('formidable'); //instalando o formidable

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res)=>{ //criando a rota upload

    res.json(req.body) //ela recebe o JSON

})
module.exports = router;
