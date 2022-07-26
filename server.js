//Declare variables in use
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//Set middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Declare MongoDB variables and connect to database
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'gratitude-journal',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to database`)
        db = client.db('gratitude-journal')
        collection = db.collection('daily-entry')
    })
    .catch(error => console.error(error))

    //Display homescreen
    app.get('/', (request, response) => {
            collection.find().toArray()
                .then(results => {
                    console.log(results)
                    response.render('index.ejs', {entries: results})
                })
                .catch(error => console.error(error))
    })

    //POST a new entry to the database
    app.post('/', (request, response) => {
            collection.insertOne(request.body)
                .then(result => {
                    console.log(result)
                    response.redirect('/')
                })
                .catch(error => console.error(error))
    })

    //Create port to listen on 
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`)
    })