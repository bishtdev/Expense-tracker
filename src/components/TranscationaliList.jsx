import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TranscationaliList = () => {
    const {transcations} = useContext(GlobalContext)
    
  return (
   <div>
     <h3 className='text-3xl'>History</h3>
    <ul id="list" className="list w-[360px]">
        {transcations.map(transcation=>(
            <li className="minus" key={transcation.id}>
            {transcation.text} <span>{transcation.amount}</span><button className="delete-btn">x</button>
          </li>
        ))}
      
    </ul>
   </div>
  )
}

export default TranscationaliList