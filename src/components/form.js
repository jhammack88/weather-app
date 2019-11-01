import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="city" placeholder="What city?"/>
                <input type="text" name="country" placeholder="What country?"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;
