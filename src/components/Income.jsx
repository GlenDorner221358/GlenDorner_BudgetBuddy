import React, { useState } from 'react' 
import PersonIncomeRow from './items/PersonIncomeRow'
import { Button, Form } from 'react-bootstrap'
import { dummyIncome, iconOptions } from '../utils'
import { addNewMonthlySalary } from '../functions/monthlySalaries'; 

function Income(props) {

  const [monthlyIncome, setMonthlyIncome] = useState(dummyIncome);
  const [newSalary, setNewSalary] = useState({ icon: '', name: '', salary: 0 });

  const handleAddSalary = () => {
    addNewMonthlySalary(monthlyIncome, newSalary);
    setMonthlyIncome([...monthlyIncome, newSalary]);
    setNewSalary({ icon: '', name: '', salary: 0 }); 
  };

  const handleIconChange = (e) => {
    setNewSalary({ ...newSalary, icon: e.target.value }); // Function to handle icon change
  };

  return (
    <div>
        <h3>Household Montly Salaries</h3>

        {/* Form */}
        <div className='form-row'>
            <Form.Select 
                name="icon" 
                defaultValue="-" 
                autoComplete="off"
                onChange={handleIconChange} 
            >
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
                value={newSalary.name}
                onChange={(e) => setNewSalary({ ...newSalary, name: e.target.value })}
            />
            <Form.Control
                type="number"
                id="income"
                name="income"
                step="0.01"
                placeholder='0.00'
                autoComplete="off"
                value={newSalary.salary}
                onChange={(e) => setNewSalary({ ...newSalary, salary: parseFloat(e.target.value) })} 
            />
            <Button className='add-income' onClick={handleAddSalary} >Add</Button>
        </div>

        {/* List */}
        <div className='income-outer hide-scroll'>
            {monthlyIncome.map((item, index) => (
                <PersonIncomeRow key={index} index={index+1} person={item} />
            ))}
        </div>
        

    </div>
  )
}

export default Income