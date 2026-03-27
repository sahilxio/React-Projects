import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/photoSlice'
import { useState } from 'react'

const SearchBar = () => {

  const [userInput, setUserInput] = useState('')

  const dispatch = useDispatch()
  
  function handleSubmit(e){
     e.preventDefault()
     dispatch(setQuery(userInput))

     setUserInput('')
  }
  return (

    <div>
      <form 
      onSubmit={handleSubmit}
      className=':w-full bg-tale-800 flex gap-5 px-8 py-8 mb-5  '
      >
        <input 
        type="text" 
        placeholder='search image....'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className='w-full rounded-md px-5 py-3 text-black'
        />

        <button 
        className='rounded-md bg-slate-600 px-5 py-3 '
        >Search</button>
      </form>

    </div>
  )
}

export default SearchBar