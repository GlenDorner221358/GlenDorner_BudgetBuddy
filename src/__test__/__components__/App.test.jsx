import { render, screen } from "@testing-library/react"
import App from "../../App"

// Here we test if the app renders or not

test("Create a snapshot of the app when rendered for first time", () => {
    render(<App />)

    var app = screen.getByTestId("outer-app")

    expect(app).toBeInTheDocument()
    
    // take a snapshot
    expect(app).toMatchSnapshot()
})
