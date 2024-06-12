import "./App.css";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TranscationaliList from "./components/TranscationaliList";

function App() {
  return (
    <>
      <div className="font-mono flex flex-col">
      <center>
        <h1 className="text-4xl mt-10"> Expense Tracker</h1>
        <div>
          <Balance/>
          <IncomeExpenses/>
          <TranscationaliList/>
          <AddTranscation/>
        </div>
      </center>
      </div>
    </>
  );
}

export default App;
