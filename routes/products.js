var express = require('express');
var router = express.Router();
const Products = require('../store/Products');
const Comments = require('../store/Comment');


router.post('/', function(req, res, next) {
  let id = req.body.product_id;
  Comments.create(req.body)
  .then( 
    function() {
      Products.getById(id)
      .then(function(produto) {  
        Comments.find().where("product_id", id)
        .then(function(comentarios) {res.render('products', { produto, comentarios})})
        .catch(function() {res.render('products', { produto})});
      });  
    }   
  )
  .catch(
    function() {
      res.render('products');
    }
  ); 
});

router.get('/:id', function(req, res) {   
  let id = req.params.id;
  Products.getById(id)
  .then(function(produto) {  
    Comments.find().where("product_id", id)
    .then(function(comentarios) {res.render('products', { produto, comentarios})})
    .catch(function() {res.render('products', { produto})});
  });
});





module.exports = router;