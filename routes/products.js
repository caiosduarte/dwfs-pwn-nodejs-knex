var express = require('express');
var router = express.Router();
const Products = require('../store/Products');
const Comments = require('../store/Comment');

router.get('/:id', function(req, res, next) {   
    Products.getById(req.params.id)
    .then(function(produto) {      
      res.render('products', { produto });
    })
});


router.post('/', function(req, res, next) {
    console.log(req.body);
    Comments.create(req.body).then(() => console.log('Comentário criado.')).catch(console.log("dfdfdf"));    
    Products.getById(req.body.product_id)
    .then(function(produto) {      
      res.render('products', { produto });
    })

});


module.exports = router;