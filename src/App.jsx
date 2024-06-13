import "./App.css";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TranscationaliList from "./components/TranscationaliList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
      <div className="font-mono flex flex-col">
      <center>
        <h1 className=" font-bold text-4xl mt-10"> EXPENSE TRACKER</h1>
        <div>
          <Balance/>
          <IncomeExpenses/>
          <TranscationaliList/>
          <AddTranscation/>
        </div>
      </center>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
