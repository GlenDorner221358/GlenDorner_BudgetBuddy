import React, { useState, useEffect } from 'react'
import TaxBlock from './items/TaxBlock'

function Taxes(props) {

  // init some vars
  // getting the totalIncome b4 tax
  const [b4tax, setb4tax] = useState(0);
  // this one is like monthlyIncome, array of objs
  const [finalPplTaxxed, setFinalPplTaxxed] = useState([]);

  // So the array doesnt clear when you refresh
  useEffect(() => {
    const totalIncomeB4Tax = sessionStorage.getItem("TotalIncomeB4Tax");
    if (totalIncomeB4Tax) {
      setb4tax(parseFloat(totalIncomeB4Tax));
    }
  }, []);

  // South african tax brackets as of 2024:
  // R1 - 237K = 18%
  // 237K - 370K = 26%
  // 370K - 512K = 31%
  // 512K - 673K = 36%
  // 673K - 857K = 39%
  // 857K - 1817K = 41%
  // 1817K < = 45%

  // function that takes your income, and returns the amount of taxes you pay, as well as your tax rate
  const calculateTaxes = (income) => {
    const brackets = [
      { limit: 237000, rate: 0.18 },
      { limit: 370500, rate: 0.26 },
      { limit: 512800, rate: 0.31 },
      { limit: 673000, rate: 0.36 },
      { limit: 857900, rate: 0.39 },
      { limit: 1817000, rate: 0.41 },
      { limit: Infinity, rate: 0.45 }
    ];

    let taxAmount = 0;
    let taxBracket = '';

    for (let bracket of brackets) {
      if (income <= bracket.limit) {
        taxAmount = income * bracket.rate;
        taxBracket = `${bracket.rate * 100}%`;
        break;
      }
    }

    return { taxAmount, taxBracket };
  }

  // calculates the total money left after taxes
  const calculateTotalAfterTax = () => {
    let afterTaxTotal = 0;

    for (let i = 0; i < finalPplTaxxed.length; i++) {
      afterTaxTotal += finalPplTaxxed[i].afterTaxIncome;
      sessionStorage.setItem("AfterTax", afterTaxTotal);
    }
  }

  // the meat of the taxes functions
  // creates an array and calculates the taxes for everyone in the array.
  // said array is pulled from session storage
  const calculateYOURTaxes = () => {
    const pplTaxxed = JSON.parse(sessionStorage.getItem("Salaries") || '[]');

    const updatedFinalPplTaxxed = pplTaxxed.map(person => {
      const { taxAmount, taxBracket } = calculateTaxes(person.salary);
      const afterTaxIncome = person.salary - taxAmount;
      return { 
        icon: person.icon, 
        name: person.name, 
        taxAmount,
        taxBracket,
        afterTaxIncome
      };
    });

    setFinalPplTaxxed(updatedFinalPplTaxxed);
    calculateTotalAfterTax();
  }

  useEffect(() => {
    calculateYOURTaxes();
  }, [b4tax]); // Recalculate when b4tax changes


  return (
    <div data-toggle="tooltip" title="Those bastards!">
        <h3>Tax Bracket Calculation</h3>

        <div className='scroll-row hide-scroll'>
            {finalPplTaxxed.map((item, index) => (
                <TaxBlock key={index} tax={item} />
            ))}
        </div>
    </div>
  )
}

export default Taxes