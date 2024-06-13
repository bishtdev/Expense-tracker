import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transcations} = useContext(GlobalContext)
  const amounts = transcations.map(transcation => transcation.amount)
  const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)
  return (
    <div className='w-[400px] '>
        <h2 className='text-3xl font-bold mt-3 text-left'> Your balance</h2>
        <p className='text-3xl font-bold text-slate-500 text-left'> ${total} </p>
    </div>
  )
}

export default Balance