import React from "react"
import { logger } from "./logger"

function App() {
  const [count, setCount] = React.useState(0)

  const changeCount = (delta: number) => {
    setCount((prevCount) => {
      const newCount = prevCount + delta
      logger(newCount)
      return newCount
    })
  }

  return (
    <div>
      <button onClick={() => changeCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
    </div>
  )
}

export default App
