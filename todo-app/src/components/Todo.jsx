import { useState, useEffect } from "react";
import Form from "./form";
import List from "./list";
import Head from "./head";

export default function Todo() {
    const [todos, setToDos] = useState([]);
    useEffect(() => {
        if (todos.length === 0) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setToDos(JSON.parse(storedTodos));
        }
    }, []);


    const cnt = todos.filter((todo) => todo.done).length;
    const total = todos.length;

    return (
        <>
            <Head cnt={cnt} cmplt={total} />
            <Form todos={todos} setToDos={setToDos} />
            <List todos={todos} setToDos={setToDos} />
        </>
    );
}
