const express = require('express')
const cors = require('cors')
const app = express()

//enable cors; allow other domains access to server
app.use(cors())

//enable express; body parser
app.use(express.json())

const expenses =    [{id: 1, date: '06/01/2024', type: 'rent', amount: '1600', description: 'N/A'}, 
                    {id: 2, date: '06/05/2024', type: 'gas', amount: '66.20', description: 'N/A'}, 
                    {id: 3, date: '06/18/2024', type: 'entertainment', amount: '45', description: 'switch game'}]

//expenses
app.get('/expenses', (req, res) => {
    res.json(expenses)
})

//create expense
app.post('/expenses', (req, res) => {
    const expense = req.body
    expense.id = expenses.length + 1
    expenses.push(expense)
    res.json(expense)
})

//http://localhost:8080/expenses
app.listen(8080, () => {
    console.log('Server is running...')
})