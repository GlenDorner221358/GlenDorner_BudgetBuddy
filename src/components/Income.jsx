import React from 'react'
import PersonIncomeRow from './items/PersonIncomeRow'
import { Button, Form } from 'react-bootstrap'
import { dummyIncome, iconOptions } from '../utils'

function Income(props) {

  return (
    <div>
        <h3>Household Montly Salaries</h3>

        {/* Form */}
        <div className='form-row'>
            <Form.Select 
                name="icon" 
                defaultValue="-" 
                autoComplete="off">
                <option disabled>-</option>
                {iconOptions.map((icon, index) => (
                    <option key={index} value={icon}>{icon}</option>
                ))}
            </Form.Select>
            <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder='Member Name'
                autoComplete="off"
            />
            <Form.Control
                type="number"
                id="income"
                name="income"
                step="0.01"
                placeholder='0.00'
                autoComplete="off"
            />
            <Button className='add-income'>Add</Button>
        </div>

        {/* List */}
        <div className='income-outer hide-scroll'>
            {dummyIncome.map((item, index) => (
                <PersonIncomeRow key={index} index={index+1} person={item} />
            ))}
        </div>
        

    </div>
  )
}

export default Income