import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Input from './Components/Input/Input_.jsx'
import Button from './Components/Buttons/Button.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)
  let input;

  
  // function click_Button() {
    //   console.log("Hyyy")
    // }
    var click_Button = () => {
      console.log(input.value)
    }
  return (
    <>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* <input type="text" name="" id="" /> */}

        {
          input = <input onClick={click_Button()} type="text" name="" id="" />
        }
        {/* <Input /> */}
        {/* <Button butt_Name="Add" /> */}
        <button onClick={click_Button()} type="submit">Add</button>
      </div>


    </>
  )

}

export default App
