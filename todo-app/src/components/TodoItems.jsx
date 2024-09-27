import { useState } from "react";
import style from "./TodoItems.module.css";

export default function TodoItems(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.items.name);
    
    function handleDelete(items) {
        props.setToDos(props.todos.filter((x) => x.name !== items));
    }
    function handleCheck(items) {
        props.setToDos(props.todos.map((x) =>
            x.name === items ? { ...x, done: !x.done } : x
        ));
    }
    function handleUpdate() {
        if (newName.trim() === "") {
            return;
        }
        props.setToDos(
            props.todos.map((x) =>
                x.name === props.items.name ? { ...x, name: newName } : x
            )
        )
        setIsEditing(false);
    }

    const cls_value = props.items.done ? style.mark : "";

    return (
        <>
            <div className={style.item}>
                <div className={style.inp}>
                    {isEditing ? ( <input className={style.editInput}
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onBlur={handleUpdate}
                            autoFocus
                        />) : (<p className={style.todoText}><span className={cls_value}>{props.items.name}</span></p>)}

                    <button className={style.tick} onClick={() => handleCheck(props.items.name)}>
                        <i className="fa-solid fa-check"></i>
                    </button>

                    <button className={style.btn} onClick={() => setIsEditing(true)}>
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <button className={style.btn} onClick={() => handleDelete(props.items.name)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
            <hr className={style.separator} />
        </>
    );
}
