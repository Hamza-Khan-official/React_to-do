import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input/Input_.jsx'
import Button from './Components/Buttons/Button.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div style={{display:'flex', gap: 20}}>
        <Input />
        <Button butt_Name="Add" />
      </div>


    </>
  )
}

export default App
