<<<<<<< HEAD
import React, { useState } from 'react' ;
import PersonIncomeRow from './items/PersonIncomeRow';
import { Button, Form } from 'react-bootstrap';
import { dummyIncome, iconOptions } from '../utils';
=======
import React, { useState } from 'react' 
import PersonIncomeRow from './items/PersonIncomeRow'
import { Button, Form } from 'react-bootstrap'
import { dummyIncome, iconOptions } from '../utils'
import { addNewMonthlySalary } from '../functions/monthlySalaries.js'; 
<<<<<<< Updated upstream
=======
>>>>>>> ee2a816cf0e6c3e0b93bab328c81591026d776b6
>>>>>>> Stashed changes

function Income(props) {
    // const { addNewMonthlySalary, calculateTotalSalaries } = require("../functions/monthlySalaries.js");
    // the array of new salaries
    const [monthlyIncome, setMonthlyIncome] = useState([]);
    // one object in monthly income
    const [newSalary, setNewSalary] = useState({ icon: '', name: '', salary: 0 });
    
    sessionStorage.setItem("salaries", monthlyIncome);

    const addNewMonthlySalary = (list, newItem) => {
        return [...list, newItem];
    }

    const handleIconChange = (e) => {
        setNewSalary({ ...newSalary, icon: e.target.value }); // Function to handle icon change
    };

    const calculateTotalIncome = (list) => {
        let result = 0;

        console.log(list);
        
        for (let x = 0; x < list.length; x++) {
            result += list[x].salary;
        }
        
        console.log(result);
        sessionStorage.setItem("TotalIncomeB4Tax", result);
    };

    const handleAddSalary = () => {
        addNewMonthlySalary(monthlyIncome, newSalary);
        setMonthlyIncome([...monthlyIncome, newSalary]);
        setNewSalary({ icon: '', name: '', salary: 0 }); 
        calculateTotalIncome([...monthlyIncome, newSalary]); // Moved calculateTotalIncome here
        sessionStorage.setItem("Salaries", monthlyIncome);
    };

    

    return (
        <div>
            <h3>Household Montly Salaries</h3>

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
                <Button className='add-income' onClick={() => { handleAddSalary(); }} disabled={!newSalary.name || newSalary.salary === 0}>Add</Button>
            </div>

            <div className='income-outer hide-scroll'>
                {monthlyIncome.map((item, index) => (
                    <PersonIncomeRow key={index} index={index+1} person={item} />
                ))}
            </div>
        </div>
    )
}

export default Income
