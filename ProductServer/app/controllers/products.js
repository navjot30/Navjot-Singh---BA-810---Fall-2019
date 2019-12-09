'use strict'
var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger'),
    mongoose = require('mongoose'),
    Product = mongoose.model('products');

module.exports = function (app, config) {
    app.use('/api', router);//middleware that installs the router all routes will go below here in this loop only 
    router.route('/products').get((req, res, next) => {
        logger.log('info', 'Get all products');

        var query = Product.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "No products" });
                }
            })
            .catch(err => {
                return next(err);
            });


    });

    router.route('/products/user/:id').get((req, res, next) => {
        logger.log('info', 'Get all user products', req.params.id);

        var query = Product.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "No products" });
                }
            })
            .catch(err => {
                return next(err);
            });

    });

    router.route('/products/:id').get((req, res, next) => {
        logger.log('info', 'Get Product %s' + req.params.id);

        Product.findById(req.params.id)
            .then(products => {
                if (products) {
                    res.status(200).json(products);
                } else {
                    res.status(404).json({ message: "No Product found" });
                }
            })
            .catch(error => {
                return next(error);
            });


    });

    router.route('/products/:id').put((req, res, next) => {
        logger.log('info', 'Get Product %s' + req.params.id);

        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(Product => {
                res.status(200).json(Product);
            })
            .catch(error => {
                return next(error);
            });


    });

    router.route('/products').post((req, res, next) => {
        logger.log('info', 'Create Product');

        var product = new Product(req.body);
        product.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch((err) => {
                return next(err);
            });

    });

    router.route('/products/:id').delete((req, res, next) => {
        logger.log('info', 'Get Product %s', req.params.id);

        Product.remove({ _id: req.params.id })
            .then(Product => {
                res.status(200).json({ msg: "Product Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });


};