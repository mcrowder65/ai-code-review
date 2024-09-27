import "@testing-library/jest-dom"
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "../app"

test("count is incremented when + button is clicked", async () => {
  render(<App />)
  const count = screen.getByText("0")
  const incrementButton = screen.getByText("+")
  await userEvent.click(incrementButton)
  expect(count).toHaveTextContent("1")
})

test("count is decremented when - button is clicked", async () => {
  render(<App />)
  const count = screen.getByText("0")
  const decrementButton = screen.getByText("-")
  await userEvent.click(decrementButton)
  expect(count).toHaveTextContent("-1")
})

test("count is incremented and decremented when + and - buttons are clicked", async () => {
  render(<App />)
  const count = screen.getByText("0")
  const incrementButton = screen.getByText("+")
  const decrementButton = screen.getByText("-")
  await userEvent.click(incrementButton)
  await userEvent.click(incrementButton)
  await userEvent.click(decrementButton)
  expect(count).toHaveTextContent("1")
})
