let User = require('../models').User
let Property = require('../models').Property
let Category = require('../models').Category
let { Op } = require('sequelize')

exports.list_property = (req, res, next) => {

    Property.findAll()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))

}

exports.add_property = (req, res, next) => {
    Property.create(req.body)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => console.log(err))
}

exports.delete_property = (req, res, next) => {
    Property.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json({message: "Propriété supprimée"});
    })
    .catch(err => console.log(err))
}

exports.update_property = (req, res, next) => {
        Property.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json({message: "Propriété modifiée"})
    })
    .catch(err => console.log(err))
}

exports.detail_property = (req, res, next) => {
    Property.findByPk(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.search_property = (req, res, next) => {
    const search = `%${req.params.search}%`;
    Property.findAll({
        where : {
            name: {
                [Op.like]: search
            }
        }
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
}

exports.property_category = (req, res, next) => {
    Property.findAll({
        where: {
            CategoryId: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
}

exports.property_user = (req, res, next) => {
    Property.findAll({
        where: {
            UserId: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
}


