  import React, { useEffect, useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    try {

      const savedTasks = localStorage.getItem('todos')
      if (savedTasks) {
        setTodos(JSON.parse(savedTasks))
      }

    }

    catch (error) {
      console.error("invalid localStorage data", error)
      localStorage.removeItem('todos')

    }
  }, [])

  function handleAdd() {
    if (input.trim() === '') return

    setTodos(prev => [...prev, input])
    setInput('')
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleDelete(index) {
    const updatedTasks = todos.filter((_, i) => i !== index)
    setTodos(updatedTasks)
  }



  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-br from-sky-500 to-blue-700'>
      <div className='bg-white w-full max-w-md p-6 rounded-xl max-h-[80vh] flex flex-col sm: w-auto'>

        <h1 className='text-xl text-blue-500 text-center mb-6 font-bold sm: text-2xl'>
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
            className='bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition ease-out'
          >
            Add
          </button>
        </div>

        <ul className='space-y-2 overflow-y-auto flex-1 '>
          {todos.map((todo, index) => (
            <li
              key={index}
              className='flex items-center justify-between text-black px-4 py-3 bg-gray-100 rounded-lg'
            >
              <span>{todo}</span>


              <button
                onClick={() => handleDelete(index)}
                className='px-3 py-2 text-white bg-red-400 rounded-md hover:bg-red-600'>

                delete
              </button>
            </li>

          ))}
        </ul>

      </div>
    </div>
  )
}

export default App