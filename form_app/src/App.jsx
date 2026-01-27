import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''

  })

  function handleChange(e){
    const {name, value} = e.target

    setFormData(perv => ({
      ...perv,
      [name]: value
    }))
  }



  function handleSubmit(e){
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div className='h-screen bg-gradient-to-br from-cyan-400 to-cyan-500 flex justify-center items-center '>

      <form 
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 bg-white p-8 rounded-lg'
      >
        <h2 className='text-center font-semibold text-lg mb-3'>Sing up</h2>

        <input 
        type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='name'
          className='w-full px-3 py-1 rounded-md border border-gray-100'
        />

        <input 
        type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='email'
          className='w-full px-3 py-1 rounded-md border border-gray-100'

        />

        <input 
        type="password"
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='password'
          className='w-full px-3 py-1 rounded-md border border-gray-100'

        />

        <button 
          className='w-full px-3 py-1 rounded-md bg-cyan-500 text-white'
          >
          submit
        </button>
      </form>

    </div>
  )
}

export default App