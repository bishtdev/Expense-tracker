import React from 'react'

const TranscationaliList = () => {
  return (
   <div>
     <h3 className='text-3xl'>History</h3>
    <ul id="list" className="list w-[360px]">
      <li className="minus">
        Cash <span>-$400</span><button className="delete-btn">x</button>
      </li>
    </ul>
   </div>
  )
}

export default TranscationaliList