const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const connectionstring = process.env.DB_STRING

MongoClient.connect(connectionstring)
.then(client =>{
    console.log('Connected to database')
    const db = client.db('twitter-clone')
    const taskCollection = db.collection('tasks')
    
    //CRUD request
})
.catch(error=> console.error(error));