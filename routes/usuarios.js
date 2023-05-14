const express = require(`express`)


const {Router}=express

const uuid4= require(`uuid4`)

const router = new Router()

let users=[]

router.get(`/`,(req,res)=>{
    res.json({data:users})
})

router.post(`/`,(req,res)=>{
    let user= req.body
    user.id =uuid4()
    console.log(user)
    users.push(user)
    res.json({data:user,message:`Usuario creado con exito`})
})

module.exports=router