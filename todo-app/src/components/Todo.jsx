import { useState } from "react"
import Form from "./form"
import List from "./list"
import Head from "./head"
export default function Todo(){
    const [todos,setToDos] = useState([])
    const cnt = todos.filter((todo) => todo.done).length
    const total = todos.length
    return(
        <>
        <Head cnt={cnt} cmplt={total}/>
        <Form todos={todos} setToDos={setToDos}/>
        <List todos={todos} setToDos={setToDos}/>
        </>
    )
}