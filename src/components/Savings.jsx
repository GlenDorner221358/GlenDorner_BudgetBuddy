import React, { useState } from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome, percentageOptions } from '../utils'
import { Form } from 'react-bootstrap'
import SavingsBlock from './items/SavingsBlock'

function Savings(props) {
    const [savingsPercent, setSavingsPercent] = useState();
    const [accounts, setAccounts] = useState([]);
    const [newSavings, setNewSavings] = useState({ icon: '', name: '', savings: 0 });
    const [finalArray, setFinalArray] = useState([]);

    setAccounts(sessionStorage.getItem("Salaries"))

    const addNewSavingsAccount = (list, newItem) => {
        return [...list, newItem];
    }

    const handleSavingsPercent = () => {
        for (let i = 0; i < accounts.length; i++) {
            setNewSavings({ icon: accounts[i].icon, name: accounts[i].name, savings: (accounts[i].income) * 100 / savingsPercent });
            addNewSavingsAccount(finalArray, newSavings);
            setFinalArray([...finalArray, newSavings])
        }
    }

  return (
    <div>
        <div className='title-row'>
            <h3>Savings Calculation</h3>
            <span>
                <p>% you want to save</p>
                <Form.Select
                    id="percentage" 
                    name="percentage" 
                    defaultValue="-"
                    autoComplete="off">
                        <option disabled>-</option>
                        {percentageOptions.map((amount, index) => (
                            <option key={index} value={amount} onChange={() => { setSavingsPercent(amount); handleSavingsPercent(); }} >{amount}%</option>
                           
                        ))}
            </Form.Select>
            </span>
        </div>
       
        {/* List */}
        <div className='scroll-row hide-scroll'>
            {finalArray.map((item, index) => (
                <SavingsBlock key={index} savings={item} />
            ))}
           
        </div>
    </div>
  )
}

export default Savings