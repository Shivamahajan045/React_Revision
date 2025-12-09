import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    document.title = `Count ${count}`
  }, [count])


  const handleAdd = () =>{
    setCount(c => c + 1);
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={handleAdd}>Add</button>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default App
