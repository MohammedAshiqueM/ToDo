import { useState } from "react"
import styles from './form.module.css'
export default function Form({ todos,setToDos }){
    const [todo,setToDo] = useState({name:"",done:false})
    const [msg,setMsg] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if (todo.name.trim() === ""){
            setMsg("empty string")
            return
        }
        const duplicate = todos.some((x) => x.name === todo.name)
        if (!duplicate){
            setToDos([...todos,todo])
            setToDo({name:"",done:false})
            setMsg("")
        }
        else{
            setToDo({name:"",done:false})
            setMsg("duplicate element")
        }
        console.log(todos)
    }

    return (
    <div>
        {msg && <p className={styles.msg}>*{msg}</p>}
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <input
                className={styles.inp}
                onChange={(e) => setToDo({name:e.target.value,done:false})}
                type="text"
                value={todo.name}
                placeholder="Enter your todo"
                />
            </div>
            <button className={styles.btn} type="submit">
                 Add
            </button>
        </form>
    </div>
    )
}