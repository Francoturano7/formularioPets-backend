const express=require(`express`)
const app=express()
const PORT=8080


const routesProducts=require(`./routes/products`)
const routesUsers=require(`./routes/usuarios`)
const routesPets=require(`./routes/pets`)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(function(req,res,next){
console.log("Time: ",Date.now())
next()
})


app.use(`/static`,express.static(__dirname + `/public`))

app.use(`/products`, routesProducts)

app.use(`/users`, routesUsers)

app.use(`/pets`,routesPets)



app.listen(8080,()=>{
    console.log(`Escuchando puerto ${PORT}`)
})