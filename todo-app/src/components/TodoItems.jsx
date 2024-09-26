import style from "./TodoItems.module.css"

export default function TodoItems(props){
    function handleDelete(items){
        // console.log("key",index)
        props.setToDos(props.todos.filter((x,i)=>x.name !== items))
    }
    function handleCheck(items){
        // console.log("key",index)
        props.setToDos(props.todos.map((x,i) => x.name === items ? {...x,done:!x.done} : x))
        console.log(props.todos)
    }
    const cls_value = props.items.done ? style.mark : ""
   return(
    <>
      <div className={style.item}>
        <div className={style.inp}>
          <p className={style.todoText}><span className={cls_value}>{props.items.name}</span></p>
          <button className={style.tick} onClick={() => handleCheck(props.items.name)}>
          <i className="fa-solid fa-check"></i>
          </button>
          <button className={style.btn} onClick={() => handleDelete(props.items.name)}>
          <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <hr className={style.separator}/>
    </>
)}
