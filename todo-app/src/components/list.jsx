import TodoItems from "./TodoItems"
import style from "./TodoItems.module.css"

export default function List({ todos,setToDos }){
    const sorteditem = todos.slice().sort((a,b) => Number(a.done) - Number(b.done))
    return(
        <div className={style.item}>
            {sorteditem.map((item,index) => (<TodoItems key={item.name} items={item} index={index} todos = {todos} setToDos={setToDos}/>))}
        </div>
    )
}