import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transcations} = useContext(GlobalContext)
  const amounts = transcations.map(transcation => transcation.amount)
  const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)
  return (
    <div>
        <h2 className='text-3xl mt-3'> Your balance</h2>
        <p className='text-3xl font-bold text-slate-500'> ${total} </p>
    </div>
  )
}

export default Balance