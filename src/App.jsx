import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'

function App() {

  return (
    <>
    <Home />
    <Outlet />
    </>
  )
}

export default App
