import React, { useState, useEffect } from 'react'
import { percentageOptions } from '../utils'
import { Form } from 'react-bootstrap'
import SavingsBlock from './items/SavingsBlock'

function Savings() {
    // sets some consts, gets them from session storage
    const [salaries, setSalaries] = useState(() => JSON.parse(sessionStorage.getItem("Salaries")) || []);
    const [finalSave, setFinalSave] = useState(() => JSON.parse(sessionStorage.getItem("FinalSave")) || []);

    // same thing here incase the above ones dont exist
    useEffect(() => {
        setSalaries(JSON.parse(sessionStorage.getItem("Salaries")) || []);
        setFinalSave(JSON.parse(sessionStorage.getItem("FinalSave")) || []);
    }, []);

    // calculates the total savings from an array of objs
    const calculateTotalSavings = (list) => {
        let result = list.reduce((acc, curr) => acc + curr.saves, 0);
        console.log(result);
        sessionStorage.setItem("TotalSavings", result);
    };

    // does all the work in the relationship
    const handleSavings = (e) => {
        const percentage = e.target.value;
        sessionStorage.setItem("percentageSaved", percentage);
        
        const updatedSavings = salaries.map(salary => ({
            ...salary,
            saves: salary.salary * percentage / 100
        }));

        setFinalSave(updatedSavings);
        calculateTotalSavings(updatedSavings); 
        sessionStorage.setItem("FinalSave", JSON.stringify(updatedSavings));
        window.location.reload();
    };

  return (
    <div data-testid="savingsContainer">
        <div className='title-row'>
            <h3>Savings Calculation</h3>
            <span>
                <p>% you want to save</p>
                <Form.Select
                    id="percentage" 
                    name="percentage" 
                    value={sessionStorage.getItem("percentageSaved")}
                    onChange={handleSavings} 
                    autoComplete="off"
                    data-testid="savingsSelect">
                        <option disabled value={0}>-</option>
                        {percentageOptions.map((amount, index) => (
                            <option key={index} value={amount}>{amount}%</option>
                        ))}
                </Form.Select>
            </span>
        </div>
       
        {/* List */}
        {salaries.length === 0 ? (
          <p>Add an income to get started</p>
        ) : (
        <div className='scroll-row hide-scroll'>
            {finalSave.map((item, index) => (
                <SavingsBlock key={index} savings={item} />
            ))}
           
        </div>
        )}
    </div>
  )
}

export default Savings