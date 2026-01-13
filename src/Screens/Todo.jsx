import React, { useState } from 'react'
import styles from './Todo.module.css'
import { use } from 'react'

const Todo = () => {

    // Add Input / Add_TODO
    const [input, setInput] = useState({
        addtodo:"",
    })

    // Merge TODO IN ARRAY
    const [InputArray, setInputArray] = useState([])

    // DELL SINGLE TODO
    // const [delSignleTodo, setDelSignleTodo] = useState("")

    let todo = () => {
        setInputArray([...InputArray, input])
        setInput({ addtodo: "" }); 
        // console.log(InputArray);
      
    }

    let delAll = () => {
        setInputArray([])
    }

    let del_todo = (i) => {
        var newArray = [...InputArray]
        newArray.splice(i, 1)
        setInputArray(newArray)

    }

    return (
        <div>
            <div className={styles.container} style={{ textAlign: "center" }}>
                <div className={styles.inputwrapper}>
                    <input onChange={(e) => setInput({addtodo: e.target.value})} placeholder="Enter Todo..." id="todoInput" type="text" />
                    <button onClick={todo} className={styles.editbtn} >Add Todo</button>
                    <button onClick={delAll} className={styles.deletebtn}>Delete All</button>
                </div>
                <hr />
                <br /><br />
                <ul id="list">

                    {
                        InputArray.map((e, i)=>{
                            return  <li key={i}>{e.addtodo}
                                    <button 
                                     onClick={()=>{
                                        // setDelSignleTodo(i),
                                        del_todo(i);
                                        }} className='btn btn-warning'>Delete</button>
                                    <button className='btn btn-danger'>edit</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Todo
