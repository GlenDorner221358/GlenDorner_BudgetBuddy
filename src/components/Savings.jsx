import React, { useState, useEffect } from 'react'
import { percentageOptions } from '../utils'
import { Form } from 'react-bootstrap'
import SavingsBlock from './items/SavingsBlock'

function Savings(props) {
    const [salaries, setSalaries] = useState(() => JSON.parse(sessionStorage.getItem("Salaries")) || []);
    const [finalSave, setFinalSave] = useState(() => JSON.parse(sessionStorage.getItem("FinalSave")) || []);

    useEffect(() => {
        setSalaries(JSON.parse(sessionStorage.getItem("Salaries")) || []);
        setFinalSave(JSON.parse(sessionStorage.getItem("FinalSave")) || []);
    }, []);

    const calculateTotalSavings = (list) => {
        let result = list.reduce((acc, curr) => acc + curr.saves, 0);
        console.log(result);
        sessionStorage.setItem("TotalSavings", result);
    };

    const handleSavings = (e) => {
        const percentage = e.target.value;
        sessionStorage.setItem("percentageSaved", percentage);
        const updatedSavings = salaries.map(salary => ({
            ...salary,
            saves: salary.salary * percentage / 100
        }));
        setFinalSave(updatedSavings);
        calculateTotalSavings(updatedSavings); // Moved inside to ensure it uses the updated state
        sessionStorage.setItem("FinalSave", JSON.stringify(updatedSavings));
        window.location.reload();
    };

  return (
    <div>
        <div className='title-row'>
            <h3>Savings Calculation</h3>
            <span>
                <p>% you want to save</p>
                <Form.Select
                    id="percentage" 
                    name="percentage" 
                    value={sessionStorage.getItem("percentageSaved")}
                    onChange={handleSavings} 
                    autoComplete="off">
                        <option disabled value={0}>-</option>
                        {percentageOptions.map((amount, index) => (
                            <option key={index} value={amount}>{amount}%</option>
                        ))}
                </Form.Select>
            </span>
        </div>
       
        {/* List */}
        <div className='scroll-row hide-scroll'>
            {finalSave.map((item, index) => (
                <SavingsBlock key={index} savings={item} />
            ))}
           
        </div>
    </div>
  )
}

export default Savings