//Declare variables in use
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())

//Create GET request
app.get('/', (request, response) => {
    
})

//Create port to listen on 
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})