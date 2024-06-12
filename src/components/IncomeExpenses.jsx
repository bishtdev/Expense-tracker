import React from 'react'

const IncomeExpenses = () => {
  return (
    <div className='rounded-md shadow-md border border-white w-[400px] flex justify-around items-center mt-2'>
        <div className=''>
            <h4 className='font-bold text-3xl'> Income</h4>
            <p className='text-3xl text-green-500'> $+0.00</p>
        </div>
        <div>
            <h4 className=' font-bold text-3xl'> Expense</h4>
            <p className='text-3xl text-red-500 '> $-0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpenses