import express from "express"
import router from "./routes/user.route.js"

const app = express()
const port = 3000
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('./public'))

    
app.get('/', (req, res) => { 
    res.render('index',{
        name:"huy"
    })
  })

app.use('/users',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})