import { SyntheticEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [value, setValue] = useState("")
  const [emisoras,setEmisoras]=useState([])
  const changeHandler = (e:any)=>{
    setValue(e.target.value)
  }
  const searchHandler = async (e:SyntheticEvent)=>{
    try {
      e.preventDefault();
      const result = await axios.get(`http://95.179.139.106/json/stations/search?name=${value}`)
      setEmisoras(()=> result.data.length > 0?
      result.data:[{name:'No se han encontrado emisoras para esta búsqueda'}])
      setValue("");
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className="App">
      <h1>RADIO FACTORIA</h1>
    <form>
      <input
      placeholder='Escribe el nombre de la emisora'
      value={value || ""}
      onChange={changeHandler}
      />
      <button onClick={searchHandler}>buscar</button>
    </form>
    <ul aria-label='radio-list'>
      {emisoras.length >0 && emisoras.map((emisora:any,index) =>
          <li key={index}>{emisora.name}</li>
      ) }
    </ul>
    </div>
  )
}

export default App
