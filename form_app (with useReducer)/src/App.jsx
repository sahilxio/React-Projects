import React from 'react'
import { useReducer } from 'react'


const initialState = {
  values: {
    name: '',
    email: '',
    password: ''
    
  },
  errors: {}
}

function reducer(state, action){
  if(action.type === "CHANGE_FIELD"){
    return {
      ...state, 
      values:{
        ...state.values,
        [action.field]: action.value
      }
    }
  }
  else if(action.type === 'SET_ERRORS'){
    
    return{
      ...state, 
      errors: action.errors
    }
    
  }
  else if(action.type === 'RESET_FORM'){
    return initialState
  }
  
  else{
    return state
  }
  
  
}

function validate(values){

  const errors = {}

  if(!values.name.trim()){
    errors.name = "name is required"
  }

  if(!values.email.includes("@")){
    errors.email = 'email is invalid'
  }

  if(values.password.length < 6){
    errors.password = 'Password must be at least 6 characters'
  }

  return errors

}





const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

  function handleChange(e){

    const {name, value} = e.target

    dispatch({
      type: "CHANGE_FIELD",
      field: name,
      value

    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const errors = validate(state.values)

    if(Object.keys(errors).length > 0){
      dispatch({type: "SET_ERRORS", errors})
      return
    }

    console.log("FORM DATA", state.values);

    dispatch({type: "RESET_FORM"})
  }

  return (
    <div className="h-screen flex justify-center items-center bg-cyan-400">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg w-80 space-y-4"
    >
      <h2 className="text-center font-semibold text-lg">Sign Up</h2>

      <div>
        <input
          name="name"
          value={state.values.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
        />
        {state.errors.name && (
          <p className="text-red-500 text-sm">{state.errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          value={state.values.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        {state.errors.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={state.values.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2 w-full"
        />
        {state.errors.password && (
          <p className="text-red-500 text-sm">{state.errors.password}</p>
        )}
      </div>

      <button className="bg-cyan-500 text-white w-full py-2 rounded">
        Submit
      </button>
    </form>
  </div>
)
}


export default App