import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterView from './feature/counter/CounterView'
import MyBooks from './components/MyBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Learn React Redux
      </p>
      <CounterView />
      <MyBooks />
    </>
  )
}

export default App
