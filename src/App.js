import React, { Component } from 'react';
import WeatherDisplay from './Components/WeatherDisplay';
import Form from './Components/Form';
import Title from './Components/Title';

const API_KEY ="89e72cdb1347ebb5054da6cacf6dbdda";

class App extends Component {

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
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();

  if (city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.hunidity,
      description: data.weather[0].description,
      error: "" 
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the values."
    });
  }
}

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <WeatherDisplay 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}  
        />
      </div>
    );
  }
}

export default App;
