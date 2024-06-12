import React, { useState } from "react";

const AddTranscation = () => {

    const [text , setText] = useState([])
    const [amount, setAmount] = useState([])
  return (
    <>
      <h3>Add new transaction</h3>
      <form className="w-[400px]" >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTranscation;
