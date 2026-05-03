import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import Navbar from './components/Navbar'
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })
  const [editIndex, setEditIndex] = useState(null)

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const handleEdit = (index) => {
    setTodo(todos[index].todo)   // put text into input
  setEditIndex(index)
  }
  const handleDelete = (index) => {
     const confirmDelete = window.confirm('Are you sure you want to delete the todo?')
     if(!confirmDelete) return
    const newTodos = todos.filter((_, i) => i !== index)
    
    setTodos(newTodos)

  }
  
  const handleAdd = () => {
    if (todo.trim() === "") return
   if (editIndex !== null) {
    const updated = [...todos]
    updated[editIndex].todo = todo
    setTodos(updated)
    setEditIndex(null) 
  } else {
    setTodos([...todos, { todo, isCompleted: false }])
  }
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (index) => {
    const updated = [...todos]
    updated[index].isCompleted = !updated[index].isCompleted
    setTodos(updated)
  }
  return (
    <>
      <Navbar />
      <div className="container py-3 mx-auto rounded-2xl  ">
        <div className="bg-violet-300 rounded-xl min-h-[50vh] max-w-2xl mx-auto p-5">
          <div className='addTodo '>
            <h1 className='text-2xl font-bold text-center py-2
          '>iTask - Manage your todos at one place</h1>
            <h2 className="text-xl py-1 font-bold">Add a Todo</h2>
            <div className='flex gap-5 mt-2 '>
              <input onChange={handleChange} value={todo} type="text" className='bg-white w-150 text-black border border-gray-400   px-4 py-1 rounded-md ' />
              <button onClick={handleAdd} className='bg-violet-400 text-white hover:bg-violet-600 p-1 rounded-md'>Add</button>
            </div>
          </div>

          <h1 className='text-xl pt-1  font-bold'>Your Todos</h1>
          <h1>----------------------------------------------------------------------------------</h1>
          <div className="todos">
            {todos.map((item, index) => (

              <div key={index} className="todo flex  items-center justify-between  gap-2 ">
                <div className="flex items-center gap-2">
                  <input  onChange={() => handleCheckbox(index)
                    
                  } type="checkbox" checked={item.isCompleted} name="" id="" />

                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex gap-2">
                  <button onClick={() => handleEdit(index)} className='bg-violet-400  text-white  hover:bg-violet-600 rounded-md p-2 mt-2 mb-3 '><FaEdit /></button>
                  <button onClick={() => handleDelete(index)} className='bg-violet-400  text-white  hover:bg-violet-600 rounded-md p-2 mt-2 mb-3'><MdDelete />
                 </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
