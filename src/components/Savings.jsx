import React from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome, percentageOptions } from '../utils'
import { Form } from 'react-bootstrap'
import SavingsBlock from './items/SavingsBlock'

function Savings(props) {
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
                            <option key={index} value={amount}>{amount}%</option>
                        ))}
            </Form.Select>
            </span>
        </div>
       
        {/* List */}
        <div className='scroll-row hide-scroll'>
            {dummyIncome.map((item, index) => (
                <SavingsBlock key={index} savings={item} />
            ))}
           
        </div>
    </div>
  )
}

export default Savings