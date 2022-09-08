const mongoose = require('mongoose')

const EntriesSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  second: {
    type: String,
    required: true,
  },
  third: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Entries', EntriesSchema)
