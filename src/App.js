import React, { useState }  from "react";
import axios from "axios";
function App() {

  const[data, setData]=useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b4462f2397236f163838a7f4ce0d38cb&units=metric`

  const searchLocation=(event) =>{

    if(event.key === 'Enter') {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
   
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>
     <div className="container">
      <div className="top">
        <div className="location">
          <p className="bold" >{data.name}</p>
        </div>
        <div className="temp">
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>  


      {data.name !== undefined && 
        <div className="bottom">
        <div className="feels">
        {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
        {data.main ? <p>{data.main.humidity.toFixed()}</p> : null}
        <p>Humidity</p>
        </div>
        <div className="wind">
        {data.main ? <p>{data.wind.speed.toFixed()} kmph</p> : null}
        <p>Wind</p>
        </div>
      </div>
      }

     </div>
    </div>
  );
}

export default App;
