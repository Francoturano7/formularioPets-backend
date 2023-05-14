const express = require(`express`)


const {Router}=express

const router = new Router()

router.get(`/`,(req,res)=>{
    res.send(`Hola mundo desde Products`)
})

router.get(`/productId`,(req,res)=>{
    res.send(`Hola mundo desde Products por su Id`)
})

module.exports=router
