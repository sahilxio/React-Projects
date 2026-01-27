import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function handleAdd(){
    if(input.trim() === '') return

    setTodos(prev => [...prev, input])
    setInput('')
  }


  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-br from-sky-500 to-blue-700'>
     <div className='bg-white w-full max-w-md p-6 rounded-xl max-h-[80vh] flex flex-col'>

        
        <h1 className='text-xl text-blue-500 text-center mb-6 font-bold '>
          Todo App
        </h1>
  
        <div className='flex gap-3 mb-6'>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className='flex-1 text-black border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500'

          />
  
          <button
            onClick={handleAdd}
            className='bg-sky-600 px-4 py-2 rounded-lg hover:bg-sky-700 transition ease-out'
           
          >
            Add
          </button>
        </div>
  
        <ul className='space-y-2 overflow-y-auto flex-1 pr-1'>
          {todos.map((todo, index) => (
            <li
              key={index}
              className='flex items-center justify-between text-black px-4 py-3 bg-gray-100 rounded-lg'
    
            >
              <span>{todo}</span>
            </li>
          ))}
        </ul>
  
    
      </div>
    </div>
  )
  
}

export default App