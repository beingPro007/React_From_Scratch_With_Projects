import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Hitesh",
    age: 21
  }
  return (
    <>
      <h1 className='mb-5 text-black bg-green-400 rounded-xl'>Tailwind Test</h1>
      <Card username = "Chai aur Code" btnTxt = "Click Me"/>
      <Card username = "Gautam" btnTxt = "Visit Name"/>
    </>
  )
}

export default App
