import React from 'react'

const Transcation = ({transcation}) => {
    const sign = transcation.amount < 0 ? '-': '+'
  return (
    <li className={transcation.amount < 0 ?'minus' : 'plus'}>
    {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span><button className="delete-btn">x</button>
  </li>
  )
}

export default Transcation