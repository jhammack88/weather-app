import React from 'react';
import Form from "./components/form"
import Title from "./components/title"
import Weather from "./components/weather";
import Review from "./components/review"


const API_KEY = "de05a2ce52c32e89d8758a64518f00ee";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 
    
     
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const response = await api_call.json();
    console.log(response)
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values above"
      })
    }
  }
  render() {
    return (
      <div className="app-container">
          <div className="title-bar">
            <Title />
          </div>
        <div className="form-wrapper">

          <div className="left-column">
            <Review />
          </div>

          <div className="right-column">
            <Form getWeather={this.getWeather}/>
            <Weather className="weather"
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}/>
          </div>
        </div>
        

      </div>
    )
    
  }
}


export default App;
