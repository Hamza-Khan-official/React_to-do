import React, { useState } from 'react'
import styles from './Todo.module.css'
import { use } from 'react'
import SignUP from '../Components/SignUP/SignUP'
import { Link, useNavigate } from 'react-router-dom'

const Todo = () => {

    // Add Input / Add_TODO
    const [input, setInput] = useState({
        addtodo: "",
    })

    // Merge TODO IN ARRAY
    const [InputArray, setInputArray] = useState([])

    // DELL SINGLE TODO
    // const [delSignleTodo, setDelSignleTodo] = useState("")

    let todo = () => {
        setInputArray([...InputArray, input])
        setInput({ addtodo: "" });

    }

    let delAll = () => {
        setInputArray([])
        setInput({ addtodo: "" });
    }

    let del_todo = (i) => {
        var newArray = [...InputArray]
        newArray.splice(i, 1)
        setInputArray(newArray)

    }

    let edit_todo = (e, i) => {
        var edit_copy_array = [...InputArray];
        var edit_prom = prompt("Enter a Updated Value")
        edit_copy_array.splice(i, 1, { addtodo: edit_prom })
        setInputArray(edit_copy_array)
    }

    // BUttons 


    let navigate = useNavigate();

    return (
        <div>
            <div className={styles.first_div}>
                <h1 className={styles.heading}>Todos</h1>
                <div className={styles.butttons}>
                    <button
                        onClick={() => navigate('login/')}
                        className={styles.login}>Login
                    </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                        onClick={()=>navigate('SignUP/')} 
                        className={styles.login}>SignUP
                    </button>
                </div>
            </div>
            <br />
            <div className={styles.container} style={{ textAlign: "center" }}>
                <div className={styles.inputwrapper}>
                    <input
                        value={input.addtodo}
                        onChange={(e) => setInput({ addtodo: e.target.value })}
                        placeholder="Enter Todo..." id="todoInput" type="text" />
                    <button onClick={todo} className={styles.editbtn} >Add Todo</button>
                    <button onClick={delAll} className={styles.deletebtn}>Delete All</button>
                </div>
                <hr />
                <br /><br />
                <ul id="list">

                    {
                        InputArray.map((e, i) => {
                            return <li key={i}>{e.addtodo}
                                <button
                                    onClick={() => {
                                        // setDelSignleTodo(i),
                                        del_todo(i);
                                    }} className='btn btn-warning'>Delete</button>

                                <button onClick={() => { edit_todo(e, i) }} className='btn btn-danger'>edit</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Todo
