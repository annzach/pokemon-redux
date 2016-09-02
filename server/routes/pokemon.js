const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

router.route('/')
      .get((req,res)=>{
        Pokemon.find({})
        .then(pokemon =>res.send(pokemon))
        .catch(err => res.status(400).send(err))
      })
       .post((req,res)=>{
        Pokemon.create(req.body)
        .then(pokemon =>res.send(pokemon))
        .catch(err => res.status(400).send(err))
      })



router.route('/:id')
      .get((req,res)=>{
        Pokemon.findOne(req.params.id)
        .then(pokemon =>res.send(pokemon))
        .catch(err => res.status(400).send(err))
      })
       .delete((req,res)=>{
        Pokemon.findByIdAndRemove(req.params.id)
        .then(pokemon =>res.send(req.params.id))
        .catch(err => res.status(400).send(err))
      })
        .put((req,res)=>{
        Pokemon.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        .then(pokemon =>res.send(pokemon))
        .catch(err => res.status(400).send(err))
      })






module.exports = router;
