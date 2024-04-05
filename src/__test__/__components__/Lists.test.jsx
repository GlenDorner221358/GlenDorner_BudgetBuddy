const { render, screen } = require("@testing-library/react")
import Taxes from "../../components/Taxes"
import TotalCard from "../../components/items/TotalCard"
import TaxBlock from "../../components/items/TaxBlock"
import Savings from "../../components/Savings"
import SavingsBlock from "../../components/items/SavingsBlock"
import LastTotalCard from "../../components/items/LastTotalCard"

// here we gonna test all of the lists on the whole page as well as the totals rows

describe("Tests for each form", () => {

    test("test taxes list empty starting state", () => {
        // Each of the tests that utilize totalcard are getting "cannot read properties of tofixed" error

        // this is supposed to render each component I will need to test
        const total = [{
            color: "red",
            icon: "👩", 
            total: 10000, 
            label: "hello"
        }]

        render(<Taxes />)
        render(<TotalCard total={total}/>)
        render(<TaxBlock />)

        // declare what everything is
        // Tax block
        var taxesComponent = screen.queryByTestId("taxesContainer")
        var taxesTitleMessage = screen.queryByText(/Tax Bracket Calculation/i)
        var taxesEmptyMessage = screen.queryByText(/Add an income to get started/i)
        var taxBlock = screen.queryByTestId("taxBlock")
        // total tax block on the right hand side
        var totalIncomeComponent = screen.queryByTestId("totalCard")
        var totalIncomeHint = screen.queryByText(/Total Income Before Tax/i)
        var emptyIncomeTotal = screen.queryByText(/R NaN/i)

        // all the tests
        // tax block
        expect(taxesTitleMessage).toBeInTheDocument()
        expect(taxesEmptyMessage).toBeInTheDocument()
        expect(taxBlock).Not.toBeInTheDocument()

        // taxes on right hand side
        expect(totalIncomeHint).toBeInTheDocument()
        expect(emptyIncomeTotal).toBeInTheDocument("0 Things To Do")

        // snapshot tests
        expect(taxesComponent).toMatchSnapshot()
        expect(totalIncomeComponent).toMatchSnapshot()
    })

    test("test savings list empty starting state", () => {
        const total = [{
            color: "red",
            icon: "👩", 
            total: 10000, 
            label: "hello"
        }]
        render(<Savings />)
        render(<TotalCard total={total}/>)
        render(<SavingsBlock />)

        // declare what everything is
        // savings calc block
        var savingsComponent = screen.queryByTestId("savingsContainer")
        var savingsTitleMessage = screen.queryByText(/Savings Calculation/i)
        var savingsEmptyMessage = screen.queryByText(/Add an income to get started/i)
        var savingsHint = screen.queryByText(/% you want to save/i)
        var savingsSelect = screen.queryByTestId("savingsSelect")
        var savingsBlock = screen.queryByTestId("savingsBlock")
        // savings total block on right side
        var totalSavingsComponent = screen.queryByTestId("totalCard")
        var savingsTotalMessage = screen.queryByText(/R NaN/i)
        var savingsHintRightSide = screen.queryByText(/Total Savings/i)

        // all the tests
        // savings block
        expect(savingsTitleMessage).toBeInTheDocument()
        expect(savingsEmptyMessage).toBeInTheDocument()
        expect(savingsHint).toBeInTheDocument() 
        expect(savingsSelect).toBeInTheDocument() 
        expect(savingsBlock).Not.toBeInTheDocument()
        // total savings block on right side
        expect(savingsTotalMessage).toBeInTheDocument() 
        expect(savingsHintRightSide).toBeInTheDocument() 

        // snapshot tests
        expect(savingsComponent).toMatchSnapshot()
        expect(totalSavingsComponent).toMatchSnapshot()

    })

    test("test total Income before tax list empty starting state", () => {
        const total = [{
            color: "red",
            icon: "👩", 
            total: 10000, 
            label: "hello"
        }]
        render(<TotalCard total={total}/>)
        

        var totalIncomeComponent = screen.queryByTestId("totalCard")
        var totalIncomeHint = screen.queryByText(/Total Income Before Tax/i)
        var emptyIncomeTotal = screen.queryByText(/R NaN/i)
        var workingIncomeTotalMessage = screen.queryByText(/R 500/i)
      
        expect(totalIncomeHint).toBeInTheDocument()
        expect(emptyIncomeTotal).toHaveTextContent("0 Things To Do")
        expect(workingIncomeTotalMessage).Not.toBeInTheDocument() 

        // snapshot test
        expect(totalIncomeComponent).toMatchSnapshot()
    })

    test("test total expenses empty starting state", () => {
        const total = [{
            color: "red",
            icon: "👩", 
            total: 10000, 
            label: "hello"
        }]
        render(<TotalCard total={total}/>)

        var totalExpensesComponent = screen.queryByTestId("totalCard")
        var totalExpensesHint = screen.queryByText(/Total Expenses/i)
        var emptyExpensesTotal = screen.queryByText(/R NaN/i)
        var workingExpensesTotalMessage = screen.queryByText(/R 500/i)
      
        expect(totalExpensesHint).toBeInTheDocument()
        expect(emptyExpensesTotal).toHaveTextContent("0 Things To Do")
        expect(workingExpensesTotalMessage).Not.toBeInTheDocument() 

        // snapshot test
        expect(totalExpensesComponent).toMatchSnapshot()
    })

    test("test last total empty starting state", () => {
        const total = [{
            color: "red",
            icon: "👩", 
            total: 10000, 
            label: "hello"
        }]
        render(<TotalCard total={total}/>)

        var lastTotalComponent = screen.queryByTestId("lastTotal")
        var lastTotalHint = screen.queryByText(/Total Left To Spend Each Month/i)
        var emptyLastTotalMoney = screen.queryByText(/R NaN/i)
        var workingLastTotalMoney= screen.queryByText(/R 500/i)
      
        expect(lastTotalHint).toBeInTheDocument()
        expect(emptyLastTotalMoney).toHaveTextContent("0 Things To Do")
        expect(workingLastTotalMoney).Not.toBeInTheDocument() 

        // snapshot test
        expect(lastTotalComponent).toMatchSnapshot()
    })
})