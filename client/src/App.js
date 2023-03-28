import './App.css';
import Palette from "./component/palette";
import {useEffect} from "react";
import {init} from "./socketApi";

function App() {
    useEffect(() => {
        init();
    }, []);
  return (
    <div className="App">
      <Palette/>
    </div>
  );
}

export default App;
