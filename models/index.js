require('dotenv').config() 

const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/katims'

mongoose.connect(MONGODB_URI)

const db = mongoose.connection


db.once('open', () => {
    console.log(`Connected to ${MONGODB_URI} at ${db.host}:${db.port}`)
})

db.on('error', (err)=> {
    console.error(`Database error: \n ${err}`)
})

module.exports.Users = require('./users')
module.exports.Inventory = require('./inventory')