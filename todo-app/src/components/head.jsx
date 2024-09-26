import style from "./head.module.css"
export default function Head({ cnt,cmplt }){
    return (
        <div>
        <h1 className={style.head} >To Do List <i className="fa-solid fa-check-double"></i></h1>
        <p className={style.count}>Total: <span className={style.countNumber}>{cmplt}</span></p>
        <p className={style.count}>Completed: <span className={style.countNumber}>{cnt}</span></p>
        </div>        
    )
}