import { useSelector } from "react-redux";

import logo from "./logo.svg";
import TipInputList from "./components/layout/TipInputList";
import Input from "./components/UI/Input";
import ResetButton from "./components/UI/ResetButton";
import TotalFieldList from "./components/layout/TotalFieldList";

function App() {
  const { bill, people } = useSelector((state) => state.tips);

  return (
    <div className="App">
      <img src={logo} alt="app logo" />
      <div className="AppContent">
        <div className="inputs">
          <Input type="bill" state={bill} />
          <Input type="people" state={people} />
          <TipInputList />
        </div>
        <div className="outputs">
          <TotalFieldList />
          <ResetButton />
        </div>
      </div>
    </div>
  );
}

export default App;
