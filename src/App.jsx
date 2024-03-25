import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount/ShowCount";
// const [nombre, setNombre] = useState(valor - inicial);

function App() {
  console.log("Conectado??")
  // const [nombre, setNombre] = useState(valor - inicial);
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <h1>Vamos a Contar!</h1>
      <ShowCount count={counter} />
      <div>
        <button onClick={() => setCounter(counter - 1)} className="restar">
          Restar</button>
        <button onClick={() => setCounter(counter + 1)} className="sumar">
          Sumar</button>
      </div>
    </div>
  )

}
export default App;