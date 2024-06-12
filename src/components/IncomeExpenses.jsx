import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transcations } = useContext(GlobalContext);
  const amounts = transcations.map((transcation) => transcation.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  return (
    <div className="rounded-md shadow-md border border-white w-[400px] flex justify-around items-center mt-2">
      <div className="">
        <h4 className="font-bold text-3xl"> Income</h4>
        <p className="text-3xl text-green-500"> ${income}</p>
      </div>
      <div>
        <h4 className=" font-bold text-3xl"> Expense</h4>
        <p className="text-3xl text-red-500 "> ${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
