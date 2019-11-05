import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="inputs" type="text" name="city" placeholder="Enter your city..."/>
                <input className="inputs" type="text" name="country" placeholder="Enter your country..."/>
                <div className="weather-submit">
                <button className="weather-btn">Get Weather</button>
                </div>
            </form>
        )
    }
}

export default Form;
