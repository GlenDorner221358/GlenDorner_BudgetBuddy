import React, { useEffect, useState } from 'react' ;
import PersonIncomeRow from './items/PersonIncomeRow';
import { Button, Form } from 'react-bootstrap';
import { iconOptions } from '../utils';


function Income(props) {

    // the array of new salaries
    const [monthlyIncome, setMonthlyIncome] = useState(() => {
        const savedIncome = sessionStorage.getItem("Salaries");
        return savedIncome ? JSON.parse(savedIncome) : [];
    });
    // one object in monthly income
    const [newSalary, setNewSalary] = useState({ icon: '', name: '', salary: 0 });
    const [newIncome, setNewIncome] = useState([]);

    useEffect(() => {
        sessionStorage.setItem("Salaries", JSON.stringify(monthlyIncome));
    }, [monthlyIncome]);

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
        const updatedMonthlyIncome = addNewMonthlySalary(monthlyIncome, newSalary);
        setMonthlyIncome(updatedMonthlyIncome);
        setNewSalary({ icon: '', name: '', salary: 0 }); 
        calculateTotalIncome(updatedMonthlyIncome); 
        window.location.reload();
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

            {monthlyIncome && monthlyIncome.length > 0 && (
                <div className='income-outer hide-scroll'>
                    {monthlyIncome.map((item, index) => (
                        <PersonIncomeRow key={index} index={index+1} person={item} />
                    ))}
                </div>
            )}

            {newIncome && newIncome.length > 0 && (
                <div className='income-outer hide-scroll'>
                    {newIncome.map((item, index) => (
                        <PersonIncomeRow key={index} index={index+1} person={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Income
