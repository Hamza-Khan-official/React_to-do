import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Screens/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_ from './Components/Login/Login_'
import SignUP from './Components/SignUP/SignUP'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='React_to-do/' Component={Todo} />
      <Route path='React_to-do/login' Component={Login_} />
      <Route path='React_to-do/SignUP' Component={SignUP} />
 
    </Routes>
      {/* <Todo /> */}
    </>
  )
}

export default App
