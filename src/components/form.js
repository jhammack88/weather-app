import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="inputs" type="text" name="city" placeholder="Enter your city..."/>
                <input className="inputs" type="text" name="country" placeholder="Enter your country..."/>
                <div className="submit">
                <button className="btn">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;
