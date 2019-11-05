import React from "react";

class Review extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            error: ""
        }
    }
    render() {
        return (
            <form className="review-form">
                <textarea className="title-input" type="text" name="title" placeholder="Enter Title Here"/>
                <textarea className="content-input" type="text" name="content" placeholder="What would you like to say?.."/>
                <div className="submit">
                <button type="submit" className="btn">Submit</button>
                </div>
                <div>
                {this.state.error}

                </div>
            </form>
        )
    }
}

export default Review;