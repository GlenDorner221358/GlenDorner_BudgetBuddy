import React from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome } from '../utils'

function Taxes(props) {

  // South african tax brackets:
  // R1 - 237K = 18%
  // 237K - 370K = 26%
  // 370K - 512K = 31%
  // 512K - 673K = 36%
  // 673K - 857K = 39%
  // 857K - 1817K = 41%
  // 1817K < = 45%

  const calculateTaxes = () => {
    let x = 0;
    if (x > 237000) {
      // Code block for R1 - 237K = 18%
      return x * 100 / 18;

    } else if (x > 370500) {
      // Code block for 237K - 370K = 26%
      return x * 100 / 26;

    } else if (x > 512800) {
      // Code block for 370K - 512K = 31%
      return x * 100 / 31;

    } else if (x > 673000) {
      // Code block for 512K - 673K = 36%
      return x * 100 / 36;

    } else if (x > 857900) {
      // Code block for 673K - 857K = 39%
      return x * 100 / 39;

    } else if (x > 1817000) {
      // Code block for 857K - 1817K = 41%
      return x * 100 / 41;

    } else {
      // Code block for 1817K < = 45%
      return x * 100 / 45;

    }
  }

  return (
    <div data-toggle="tooltip" title="Those bastards!">
        <h3>Tax Bracket Calculation</h3>

        {/* List */}
        <div className='scroll-row hide-scroll'>
            {dummyIncome.map((item, index) => (
                <TaxBlock key={index} tax={item} />
            ))}
        </div>
    </div>
  )
}

export default Taxes