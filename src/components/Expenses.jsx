import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ExpenseRow from './items/ExpenseRow'
import { dummyExpenses } from '../utils'
// import { addNewMonthlyExpense } from '../functions/monthlyExpenses';

function Expenses(props) {

  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ title: '', cost: 0 });

  const addNewMonthlyExpense = (list, newItem) => {
    return [...list, newItem];
  }


  const handleAddExpense = () => {
    addNewMonthlyExpense(monthlyExpenses, newExpense);
    setMonthlyExpenses([...monthlyExpenses, newExpense]);
    setNewExpense({ title: '', cost: 0 }); // Reset form
  };

  return (
    <div >
      <h3>Household Monthly Expenses</h3>
      {/* Form */}
      
      <div className='form-row'>
          <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder='Expense Title'
              autoComplete="off"
              value={newExpense.title}
              onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
          />
          <Form.Control
              type="number"
              id="expense"
              name="expense"
              step="0.01"
              placeholder='0.00'
              autoComplete="off"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
          />
          <Button className='add-expenses' onClick={handleAddExpense} disabled={!newExpense.title || newExpense.amount === 0}>Add</Button>
      </div>

      {/* List */}
      <div className='expense-outer hide-scroll'>
        {monthlyExpenses.map((item, index) => (
            <ExpenseRow key={index} expense={item} />
        ))}
      </div>

    </div>
  )
}

export default Expenses