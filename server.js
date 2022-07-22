//Declare variables in use
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//Declare MongoDB variables and connect to database
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'gratitude-journal',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to database`)
        db = client.db(dbName)
        collection = db.collection('daily-entry')
    })

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Create GET request
app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch(error) {
        response.status(500).send({message: error.message})
    }
})

//Create port to listen on 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})