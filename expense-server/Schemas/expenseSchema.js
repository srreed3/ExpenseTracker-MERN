const mongoose = require('mongoose')

//creating schemato deinfe structure
const expenseSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    description: String
})

//create model using schema
const Expense = mongoose.model('Expense', expenseSchema)

//export expense model for other files 
module.exports = Expense