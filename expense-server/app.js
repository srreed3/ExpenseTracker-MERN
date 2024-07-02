const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const Expense = require('./Schemas/expenseSchema')

//connect to mongoose database
main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://rosereed1212:5sH5hGk0wVlQ0Srz@expenses.o60l2oe.mongodb.net/expenses_database?retryWrites=true&w=majority&appName=Expenses')
}

//enable cors; allow other domains access to server
app.use(cors())

//enable express; body parser
app.use(express.json())

//expenses
app.get('/expenses', async (req, res) => {
    const expenses = await Expense.find({})
    res.json(expenses)
})

//create expense
app.post('/expenses', async (req, res) => {
    const body = req.body
    const expense = new Expense({
        date: body.date,
        type: body.type,
        amount: parseFloat(body.amount).toFixed(2),
        description: body.description
    })

    const newExpense = await expense.save()
    res.json(newExpense)
})

//delete single expense
app.delete('/expense/:id', async (req, res) => {
    const expenseId = req.params.id;
    const result = await Expense.findByIdAndDelete(expenseId);
  
    if (result) {
      res.status(200).send({ message: 'Expense deleted successfully' });
    } else {
      res.status(404).send({ message: 'Expense not found' });
    }
  });

//delete all expenses
app.delete('/expenses', async (req, res) => {
    try {
        await Expense.deleteMany({});
        res.status(200).send({ message: 'All expenses deleted successfully' });
      } catch (error) {
        res.status(500).send({ message: 'Error deleting expenses', error });
      }
  });

//http://localhost:8080/expenses
app.listen(8080, () => {
    console.log('Server is running...')
})