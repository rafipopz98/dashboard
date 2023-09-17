export default function lol(){

    const todos=document.querySelectorAll('.mainWindow')

    const box=document.querySelector('.box')

    todos.forEach(todo=>{
        todo.addEventListener("dragover",e=>{
            e.preventDefault();
            todo.classList.add("hovered")
        })
        todo.addEventListener("dragleave",()=>{
            todo.classList.remove("hovered")
        })
        todo.addEventListener("drop",()=>{
            todo.appendChild(box)
            todo.classList.remove("hovered")
        })
    })
}

