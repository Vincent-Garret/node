let Category = require('../models').Category

exports.list_category = (req, res, next) => {

    Category.findAll()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.add_category = (req, res, next) => {
    Category.create(req.body)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => console.log(err))
}

exports.delete_category = (req, res, next) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json({message: "Catégorie supprimée"});
    })
    .catch(err => console.log(err))
}

exports.update_category = (req, res, next) => {
        Category.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
}

exports.detail_category = (req, res, next) => {
    let id = req.params.id
    Category.findByPk(id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}