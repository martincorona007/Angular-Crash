const express = require('express');
const app = express();
const productRoutes = express.Router();
///Product model from our routes module
let Product = require('../models/Product');
//Defined store route
productRoutes.route('/add').post(function (req,res){
    let product = new Product(req.body);
    product.save()
    .then(product => {
        res.status(200).json({'Product':'Product has been added successfully'});
    })
    .cath(err => {
        res.status(400).send("unable to save to database");
    });
});
//Defined get data(index or listing) route
productRoutes.route('/').get(function (req,res){
    Product.find(function (err,products){
        if(err){
            console.log(err);
        }
        else{
            res.json(products);
        }
    });
});
// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product){
        res.json(product);
    });
  });
//defined edit route
productRoutes.route('/update/:id').post(function (req,res){
    Product.findById(req.params.id,function(err,product){
        if(!product)
            res.status(404).send("Record not found.");
        else{
            product.ProductName = req.body.ProductName;
            product.ProductDescription = req.body.ProductDescription;
            product.ProductPrice = req.body.ProductPrice;
            
            product.save().then(product => {
                res.json('Update complete');

            })
            .cath(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
});
//defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req,res){
    Product.findByIdAndRemove({_id: req.params.id},function(err,product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = productRoutes;