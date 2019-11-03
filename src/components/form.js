import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <input type="text" name="city" placeholder="What city?"/>
                <input type="text" name="state" placeholder="What state?"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;
