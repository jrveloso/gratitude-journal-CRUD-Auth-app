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

//Create GET request
app.get('/', (request, response) => {
    
})

//Create port to listen on 
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})