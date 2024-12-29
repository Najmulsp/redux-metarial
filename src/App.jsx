import { Outlet } from 'react-router-dom';
import Navbar from "../src/components/home/Navbar"
import './App.css'


function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    
    {/* <Footer /> */}
    </>
  )
}

export default App
