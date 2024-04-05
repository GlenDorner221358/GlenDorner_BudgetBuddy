import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Income from "../../components/Income"
import Expenses from "../../components/Expenses"
import { addNewMonthlySalary } from "../../functions/monthlySalaries"
import { addNewMonthlyExpense } from "../../functions/monthlyExpenses"

// Here we test if all the forms (icome & expenses) render or not

test("Check if all the forms are there", () => {
    render(<Income />)
    render(<Expenses />)

    // check the income forms components
    var incomeTitle = screen.getByText("Household Montly Salaries")
    var iconInput = screen.getByTestId("iconInput")
    var nameInput = screen.getByTestId("nameInput")
    var incomeInput = screen.getByTestId("incomeInput")
    var incomeButton = screen.getByTestId("incomeButton")

    // check the expense forms components
    var expenseTitle = screen.getByText("Household Monthly Expenses")
    var expenseName = screen.getByTestId("expenseName")
    var expenseCost = screen.getByTestId("expenseCost")
    var expenseButton = screen.getByTestId("expenseButton")

    // Mr bond, ive been EXPECTING you
    expect(incomeTitle).toBeInTheDocument()
    expect(iconInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(incomeInput).toBeInTheDocument()
    expect(incomeButton).toBeInTheDocument()

    // I EXPECT you to die
    expect(expenseTitle).toBeInTheDocument()
    expect(expenseName).toBeInTheDocument()
    expect(expenseCost).toBeInTheDocument()
    expect(expenseButton).toBeInTheDocument()
})

describe("Tests for each form", () => {

    test("snapshot of after a new income has been added", async () => {
        var user = userEvent.setup()

        // for some reason this add new salary just isnt pushing to the array
        var salaries = []
        const handleAddingNewMonthlySalary = (newItem) => {
            var newSalary = addNewMonthlySalary(salaries, newItem)
            salaries = newSalary
        }

        render(<Income handleAddingNewMonthlySalary={handleAddingNewMonthlySalary} />)

        // add icon
        var iconInput = screen.getByTestId("iconInput")
        await user.click(iconInput)
        await user.selectOptions(iconInput, ['👩'])

        // add username
        var nameInput = screen.getByTestId("nameInput")
        await user.click(nameInput)
        await user.keyboard("Test Name")
        expect(nameInput).toHaveValue("Test Name")

        // add income
        var incomeInput = screen.getByTestId("incomeInput")
        await user.click(incomeInput)
        await user.keyboard("1")
        await user.keyboard("2")
        await user.keyboard("0")
        await user.keyboard("0")

        expect(incomeInput).toHaveValue(1200)

        // Click add
        var incomeButton = screen.getByRole("button")
        await user.click(incomeButton)

        // because its not pushing to the array, this always fails. I've checked it in the console, it works.
        // it just doesnt push the values to the array
        expect(salaries.length).toBe(1)
        expect(salaries[0].name).toBe("Test Name")
        expect(salaries[0].salary).toBe(1200)

        // Check if the input fields reset
        expect(nameInput).toHaveValue("")
        expect(incomeInput).toHaveValue(null)
    })

    test("snapshot of after a new expense has been added", async () => {
        var user = userEvent.setup() 
    
        var expenses = []
        const handleAddNewExpense = (list, newItem) => {
            var newExpense = addNewMonthlyExpense(list, newItem)
            expenses = newExpense
        }
    
        render(<Expenses handleAddNewExpense={handleAddNewExpense} />)
    
        // add expense title
        var expenseName = screen.getByTestId("expenseName")
        await user.click(expenseName)
        await user.keyboard("Test Expense")
        expect(expenseName).toHaveValue("Test Expense")
    
        // add expense cost
        var expenseCost = screen.getByTestId("expenseCost")
        await user.click(expenseCost)
        await user.keyboard("5")
        await user.keyboard("0")
        await user.keyboard("0")
        expect(expenseCost).toHaveValue(500)
    
        //CLick add
        var expenseButton = screen.getByRole("button")
        await user.click(expenseButton)
    
        expect(expenses.length).toBe(1)
        expect(expenses[0].title).toBe("Test Expense")
        expect(expenses[0].cost).toBe(500)
    
        // Check if the input fields reset
        expect(expenseTitle).toHaveValue("")
        expect(expenseCost).toHaveValue(null)
        })
})