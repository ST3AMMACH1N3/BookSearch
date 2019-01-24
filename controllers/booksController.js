const db = require('../models');
const axios = require('axios');
const key = process.env.API_KEY;

module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {c
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    search: function(req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&key=${key}`)
            .then(result => res.json(result.data.items))
            .catch(err => res.json(err));
    }
};