import React from "react";
import DisplayReviews from "./display-reviews";

class Review extends React.Component {
  constructor() {
    super();

    this.state = {
      title: [],
      content: ""
    };
  }

  resetFields = event => {
    this.setState({
      title: "",
      content: ""
    });
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleContentChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  addContent = event => {
    // event.preventDefault();
    fetch("https://weather-backend2019.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Successfull Post");
        this.resetFields();
      });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.addContent();
  }

  deleteContent = id => {
    fetch(`https://weather-backend2019.herokuapp.com/review/<id>`, {
      method: "DELETE"
    }).then(
      this.setState({
        title: this.state.title.filter(content => content.id !== id)
      })
    );
  };

  render() {
    return (
      <div className="write-reviews-container">
        <div className="App">
          <h2>Leave your comments here!</h2>
          <form className="form-container" onSubmit={e => this.handleSubmit(e)}>
            <textarea
              onChange={this.handleTitleChange}
              className="title-input"
              type="text"
              placeholder="Enter title here"
              value={this.state.title}
              name="title"
            />
            <textarea
              onChange={this.handleContentChange}
              className="content-input"
              type="text"
              placeholder="What would you like to say?.."
              name="content"
              value={this.state.content}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="reviews-container">
          <DisplayReviews />
        </div>
      </div>
    );
  }
}

//   return (
//             <form className="review-form">
//                 <textarea onChange={ (event)=>{ this.setState( title: event.target.value)}} className="title-input" type="text" name="title" placeholder="Enter Title Here"/>
//                 <textarea onChange={ (event)=>{ this.setState( title: event.target.value)}} className="content-input" type="text" name="content" placeholder="What would you like to say?.."/>
//                 <div className="submit">
//                 <button type="submit" className="btn">Submit</button>
//                 </div>
//                 <div>
//                 {this.state.error}

//                 </div>
//             </form>

export default Review;
