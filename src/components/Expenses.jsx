import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ExpenseRow from './items/ExpenseRow'
import { dummyExpenses } from '../utils'

function Expenses(props) {

  return (
    <div >
      <h3>Household Montly Expenses</h3>
      {/* Form */}
      
      <div className='form-row'>
          <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder='Expense Title'
              autoComplete="off"
          />
          <Form.Control
              type="number"
              id="expense"
              name="expense"
              step="0.01"
              placeholder='0.00'
              autoComplete="off"
          />
          <Button className='add-expenses'>Add</Button>
      </div>

      {/* List */}
      <div className='expense-outer hide-scroll'>
        {dummyExpenses.map((item, index) => (
            <ExpenseRow key={index} expense={item} />
        ))}
      </div>

    </div>
  )
}

export default Expenses