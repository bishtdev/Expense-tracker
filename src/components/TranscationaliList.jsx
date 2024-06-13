import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation'

const TranscationaliList = () => {
    const {transcations} = useContext(GlobalContext)
    
  return (
   <div className='w-[400px]  '>
     <h3 className='text-3xl text-left font-bold '>History</h3>
    <ul id="list" className="list w-[360px]">
        {transcations.map(transcation=>(
           <Transcation key={transcation.id} transcation={transcation}/>
        ))}
      
    </ul>
   </div>
  )
}

export default TranscationaliList