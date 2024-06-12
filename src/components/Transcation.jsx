import React from 'react'

const Transcation = ({transcation}) => {
  return (
    <li className="minus" >
    {transcation.text} <span>{transcation.amount}</span><button className="delete-btn">x</button>
  </li>
  )
}

export default Transcation