import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import ExpenseRow from './items/ExpenseRow'

function Expenses(props) {

  const [monthlyExpenses, setMonthlyExpenses] = useState(() => {
    const savedExpenses = sessionStorage.getItem("MonthlyExpenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  
  const [newExpense, setNewExpense] = useState({ title: '', amount: 0 });

  useEffect(() => {
    sessionStorage.setItem("MonthlyExpenses", JSON.stringify(monthlyExpenses));
  }, [monthlyExpenses]);

  const addNewMonthlyExpense = (list, newItem) => {
    return [...list, newItem];
  }

  const calculateTotalExpenses = (list) => {
    let result = list.reduce((acc, curr) => acc + curr.amount, 0);
    console.log(result);
    sessionStorage.setItem("TotalExpenses", result);
    return result; // Return the total expenses
  };

  const handleAddExpense = () => {
    const updatedExpenses = addNewMonthlyExpense(monthlyExpenses, newExpense);
    setMonthlyExpenses(updatedExpenses);
    setNewExpense({ title: '', amount: 0 }); 
    const TotalExpenses = calculateTotalExpenses(updatedExpenses); 
    sessionStorage.setItem("TotalExpenses", TotalExpenses); // Corrected the key name
    window.location.reload();
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
              onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
          />
          <Button className='add-expenses' onClick={handleAddExpense} disabled={!newExpense.title || newExpense.amount <= 0}>Add</Button>
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