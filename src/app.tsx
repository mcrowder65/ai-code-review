import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 5) {
      console.log("count is ", count)
    }
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{String(count)}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

export default App
