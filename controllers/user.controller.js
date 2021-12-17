let User = require('../models').User
let Property = require('../models').Property
const jwt = require('jsonwebtoken')
const passwordService = require('../services/password.service');
const bcrypt = require('bcrypt');



exports.list_user = (req, res, next) => {
    User.findAll({
        include: [
            {
                model: Property,
                attributes: ['id', 'name']
            }
        ]
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))

}

exports.add_user = (req, res, next) => {
    passwordService.verifyPassword(req.body.password)
    .then(result => {
        if(result){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    // res.status(500).json("MDP obigatoire")
                    throw err
                }
                let authorization =  req.headers.authorization.split(' ')[1];
                let decoded = jwt.decode(authorization) 
                console.log(decoded)
                    if(decoded.role == "admin"){
                        let user = req.body;
                        user.password = hash
                        User.create(user)
                        .then(userCreated => {
                            res.status(201).json(userCreated)
                        })
                        .catch(err => res.status(400).json(err))
                    } 
                    else {
                        res.status(400).json({message: "Vous n'etes pas admin"})
                    }
            })
        }
        else {
            res.status(400).json({message: 'wrong password'})
        }
    })
    .catch(err => res.status(400).json(err))
}

exports.user_login = (req, res, next) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    })
    .then(user => {
        //test de récup du user
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    res.status(500).end
                }
                //renoie si ok
                else if(result){
                    const token = jwt.sign({name: user.name, role: user.role}, process.env.SECRET, {expiresIn:'1h'})
                    res.status(200).json(({token: token}))
                }
                //sinon dis au revoir
                else{
                    res.status(404).json({message: 'Bad Login/Password'})
                }
            })
        }
    })
    .catch( err => res.status(500).end())
}

exports.delete_user = (req, res, next) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json({message: "agent supprimé"});
    })
    .catch(err => console.log(err))
}

exports.update_user = (req, res, next) => {
        User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => console.log(err))
}

exports.detail_user = (req, res, next) => {
    User.findByPk(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

