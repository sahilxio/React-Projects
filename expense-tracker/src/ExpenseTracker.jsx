import React, { useEffect, useState } from 'react'

const ExpenseTracker = () => {

  const [expenseShow, setExpenseShow] = useState(() => {

    const saved = localStorage.getItem('expense')
    return saved ? JSON.parse(saved) : []
  })

  const [formData, setformData] = useState({
    title: '',
    category: '',
    date: '',
    amount: ''
  })
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [editId, setEditId] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target

    setformData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (editId) {
      setExpenseShow(prev =>
        prev.map(item =>
          item.id === editId ? { ...formData, id: editId, amount: Number(formData.amount) } : item
        )
      )
      setEditId(null)
      setformData({
        title: '',
        category: '',
        date: '',
        amount: ''
      })
    } else {
      setExpenseShow(prev => [
        ...prev,
        {
          ...formData,
          id: Date.now(),
          amount: Number(formData.amount)
        }
      ])

      setformData({
        title: '',
        category: '',
        date: '',
        amount: ''
      })
    }

  }

  function deleteExpense(item) {
    setExpenseShow(expenseShow.filter((element) => element.id !== item.id))
  }

  function handleEdit(item) {
    setformData(item)
    setEditId(item.id)
  }



  useEffect(() => {
    setExpenseTotal(
      expenseShow.reduce((sum, total) => {
        return sum + total.amount
      }, 0)
    )

    localStorage.setItem('expense', JSON.stringify(expenseShow))

  }, [expenseShow])

  
  





  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className='border-b border-neutral-300 pb-3 text-2xl font-semibold'>
        Add Expense
      </h1>

      <div className='grid md:grid-cols-2 gap-8 mt-6'>

        {/* Expense Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md"
        >

          <div className='grid grid-cols-2 gap-6'>

            <label className="font-medium text-gray-700">
              Title <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />

            <label className="font-medium text-gray-700">
              Category <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />

            <label className="font-medium text-gray-700">
              Date <span className='text-red-500'>*</span>
            </label>
            <input
              type="date"
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />

            <label className="font-medium text-gray-700">
              Amount <span className='text-red-500'>*</span>
            </label>
            <input
              type="number"
              name='amount'
              value={formData.amount}
              onChange={handleChange}
              className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />

          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className={`${editId ? "bg-green-500 w-full py-2 hover:bg-green-600" : ''}w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 shadow-sm`}
            >
              {editId ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </form>

        {/* Expense Dashboard */}
        <div className='bg-white text-black p-6 rounded-xl shadow-md max-h-[400px] overflow-y-auto'>


          {expenseShow.map((item) => (

              <li
                key={item.id}
                className='flex justify-between items-center border-b border-gray-700 py-3'
              >
                <div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-sm text-gray-400">
                    {item.category} • {item.date}
                  </p>
                </div>

                <div className="text-right space-x-3 ">
                  <h1 className="font-bold text-green-400">₹ {item.amount}</h1>
                  <button
                    className="text-red-400 text-xs hover:underline"
                    onClick={() => deleteExpense(item)}
                  >
                    Delete
                  </button>

                  <button
                    className="text-blue-400 text-xs hover:underline"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </div>
              </li>

          ))}

          <div className="mt-6 border-t border-gray-700 pt-4 text-right">
            <h1 className='text-lg font-semibold'>
              Total: <span className="text-green-400">₹ {expenseTotal}</span>
            </h1>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ExpenseTracker