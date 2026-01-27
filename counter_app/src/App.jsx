import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function handleInc(){
    setCount(perv => perv + 1)
  }

  function handleDec(){
    setCount(perv => perv > 0 ? perv - 1 : 0)
  }

  function handleRes(){
    setCount(0)
  }
  return (
    <div>
      <h2 className='p-5 text-3xl'>{count}</h2>
      <button onClick={handleInc} className='m-3 px-2 py-3 bg-emerald-600 rounded-md'>increment</button>
      <button onClick={handleDec} disabled={count === 0} className={`px-2 py-3 m-3 rounded-md ${count === 0 ? 'bg-red-300 cursor-not-allowed' : 'bg-red-500'}`}>decrement</button>
      <button onClick={handleRes} className='m-3 px-2 py-3 bg-yellow-500 rounded-md'>rest</button>


    </div>
  )
}

export default App




