import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const[height, setHeight] = useState(window.innerHeight);

  const handleResize = () =>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);

    return ()=>{
    window.removeEventListener("resize", handleResize)
  }
  },[]
);



  return (
    <div>
      <h1>useEffect Hook - Window Resize</h1>
      <h4>Width: {width}px</h4>
      <h4>Height: {height}px</h4>
    </div>
  )
}

export default App
