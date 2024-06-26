import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTranscation = () => {
    const {addTranscation} = useContext(GlobalContext)
    const [text , setText] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = e =>{
        e.preventDefault();

        const newTranscation = {
            id: Math.floor(Math.random()* 100000),
            text,
            amount: +amount
        }
        addTranscation(newTranscation)
        setText('')
        setAmount('')

    }
  return (
    <>
      <h3 className="text-3xl">Add new transaction</h3>
      <form onSubmit={onSubmit}  className="w-[400px] text-left" >
        <div className="form-control">
          <label htmlFor="text" className="font-bold">Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label className="text-left font-bold" htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button  className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTranscation;
