import React, { useEffect, useState } from 'react'





const App = () => {





  const [todos, setTodos] = useState(() => {



    const saved = localStorage.getItem("todos")



    return saved ? JSON.parse(saved) : []



  })



  const [input, setInput] = useState('')



  const [editIndex, setEditIndex] = useState(null)



  const [editText, setEditText] = useState('')







  useEffect(() => {





    localStorage.setItem("todos", JSON.stringify(todos))



  }, [todos])






  function addTask() {



    if (input.trim() === '') return





    setTodos((prev) => [...prev, { text: input, completed: false }])



    setInput('')



  }





  function toggleCompleted(index) {



    const updated = [...todos]





    updated[index].completed = !updated[index].completed





    setTodos(updated)



  }






  function deleteTask(index) {





    let updateTask = todos.filter((_, i) => i !== index)



    setTodos(updateTask)





  }





  function handleEdit(index) {



    setEditIndex(index)



    setEditText(todos[index].text)



  }





  function handleSave(index) {





    if (editText.trim() === '') return





    const updated = [...todos]





    updated[index].text = editText





    setTodos(updated)





    setEditIndex(null)



    setEditText('')



  }






  return (



    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] '>



      <div className='bg-[#242424] p-6 h-[500px] max-h-[90vh] rounded-xl w-[420px] flex flex-col border border-[#333]'>





        <h1 className='text-lg font-semibold tracking-wide mb-6 text-white/90' >🔖 TODO APP</h1>






        <div className=' flex gap-3 mb-6 '>





          <input type="text"



            placeholder='Add Task'



            value={input}



            onChange={(e) => (setInput(e.target.value))}



            className='px-4 py-3 text-md rounded-lg text-[#fff] bg-[#222] border border-[#333] w-[90%] flex-1'






          />





          <button



            onClick={addTask}



            className='px-5 py-3 text-black rounded-lg bg-yellow-200'



          >+</button>





        </div>






        <ul className='space-y-2 overflow-y-auto flex-1 pr-1 scrollbar-thin scrollbar-thumb-gray-500'>



          {todos.map((todo, index) => (







            <li key={index}



              className='flex items-center border border-[#333] justify-between text-[#fff] rounded-lg r px-4 py-4 bg-[#111]'





            >





              <div className='flex items-center gap-2'>





                <input



                  type="checkbox"



                  checked={todo.completed}



                  onChange={() => toggleCompleted(index)}



                  className='w-5 h-5 appearance-none rounded-full border-2 border-[#333] checked:bg-blue-400 text-white'



                />





                {editIndex === index ? (



                  <input type="text"



                    value={editText}



                    onChange={(e) => setEditText(e.target.value)}



                    className='bg-[#222] border border-[#333] px-2 py-1 rounded '



                  />



                ) : (



                  <span className={`${todo.completed ? "line-through opacity-60" : ''}`}>



                    {todo.text}



                  </span>



                )



                }





              </div>





              <div className='flex gap-3'>





                {editIndex === index ? (



                  <button onClick={() => handleSave(index)}>💾</button>



                ) : (





                  <button onClick={() => handleEdit(index)}>✏️</button>



                )}






                <button onClick={() => deleteTask(index)}>🗑</button>





              </div>



            </li>



          ))}



        </ul>



      </div>



    </div>



  )



}





export default App