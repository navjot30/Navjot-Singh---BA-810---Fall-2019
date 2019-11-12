'use strict';
var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger'),
    mongoose = require('mongoose'),
    Gadget = mongoose.model('Gadgets');

module.exports = function(app, config) {
    app.use('/api', router);
    router.route('/gadgets').get((req, res, next) => {
        logger.log('info', 'Get All Widgets');
        const query = Gadget.find()
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: 'No Gadgets found' });
                }
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/gadgets').post((req, res, next) => {
        logger.log('info', 'Create a Gadget');
        const gadget = new Gadget(req.body);
        gadget
            .save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/gadgets/:id').get((req, res, next) => {
        const { id } = req.params;
        logger.log('info', 'Getting a Gadget with id: ' + id);

        Gadget.findById(id)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                return next(err);
            });
    });

    router.route('/gadgets/:id').put((req, res, next) => {
        const { id } = req.params;
        logger.log('info', 'Updating a Gadget with id: ' + id);

        Gadget.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            multi: false
        })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                return next(error);
            });
    });

    router.route('/gadgets/:id').delete((req, res, next) => {
        const { id } = req.params;
        logger.log('info', 'Delete a Gadget with id: ' + id);

        Gadget.remove({ _id: id })
            .then(result => {
                res.status(200).json({ msg: 'Gadget Deleted' });
            })
            .catch(err => {
                return next(err);
            });
    });
};
