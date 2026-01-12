import React, { useState } from 'react'
import styles from './Todo.module.css'

const Todo = () => {

    const [input, setInput] = useState("")

    let todo = () => {
        console.log(input)
    }

    return (
        <div>
            <div className={styles.container} style={{ textAlign: "center" }}>
                <div className={styles.inputwrapper}>
                    <input onChange={(e) => setInput(e.target.value)} placeholder="Enter Todo..." id="todoInput" type="text" />
                    <button onClick={todo} className={styles.editbtn} >Add Todo</button>
                    <button className={styles.deletebtn}>Delete All</button>
                </div>
                <hr />
                <br /><br />
                <ul id="list">
                </ul>
            </div>
        </div>

    )
}

export default Todo
