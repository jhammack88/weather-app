import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.getWeather}>
                <input className="inputs" type="text" name="city" placeholder="CITY..."/>
                <input className="inputs" type="text" name="country" placeholder="COUNTRY..."/>
                <button className="btn">Submit</button>
            </form>
        )
    }
}

export default Form;
