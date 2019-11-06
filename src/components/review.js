import React from "react";

class Review extends React.Component {
  constructor() {
    super();

    this.state = {
      title: [],
      content: ""
    };
  }

  // componentDidMount() {
  //   fetch("https://localhost:5000")
  //     .then(response => response.json())
  //     .then(data => {
  //       const loadedTitle = [];
  //       for (const id in data) {
  //         loadedTitle.push({ id, ...data[id] });
  //       }
  //       this.setState({ title: loadedTitle });
  //     });
  // }

  // renderTitle = () => {
  //   return this.state.title.map(content => {
  //     return (
  //       <TodoItem
  //         key={content.id}
  //         title={content.title}
  //         done={content.done}
  //         id={content.id}
  //         delete={this.deleteContent}
  //       />
  //     );
  //   });
  // };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
      .then(data =>
        this.setState({
          title: [
            ...this.state.title,
            { id: data.name, title: this.state.content }
          ],
          content: ""
        })
      );
  };

  handleSubmit(event) {
    event.preventDefault();
    this.addContent();
  }

  // createCORSRequest = (method, url) => {
  //   let xhr = new XMLHttpRequest();
  //   if ("withCredentials" in xhr) {
  //     // XHR for Chrome/Firefox/Opera/Safari.
  //     xhr.open(method, url, true);
  //   } else {
  //     // CORS not supported.
  //     xhr = null;
  //   }
  //   return xhr;
  // };

  // addContent() {
  //   // event.preventDefault();
  //   const url = "http://localhost:5000/review";
  //   const xhr = this.createCORSRequest("POST", url);
  //   if (!xhr) {
  //     console.log("CORS not supported");
  //     alert(
  //       "There is a problem with our servers right now, please try again another time. We're sorry for the inconvenience"
  //     );
  //     return;
  //   }
  //   xhr.setRequestHeader("Content-type", "application/json");

  //   // Response handlers.
  //   xhr.onreadystatechange = function() {
  //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //       console.log(xhr.response);
  //     }
  //   };
  //   xhr.onerror = function() {
  //     console.log(xhr.response);
  //     // alert("Woops, there was an error making the request.");
  //   };
  //   xhr.send(
  //     JSON.stringify({
  //       title: this.state.title,
  //       content: this.state.content
  //     })
  //   );
  // }

  deleteContent = id => {
    fetch(`https://localhost:5000/review/<id>`, {
      method: "DELETE"
    }).then(
      this.setState({
        title: this.state.title.filter(content => content.id !== id)
      })
    );
  };

  render() {
    return (
      <div className="App">
        <h2>Leave your comments here!</h2>
        <form className="form-container" onSubmit={e => this.handleSubmit(e)}>
          <textarea
            onChange={this.handleChange}
            className="title-input"
            type="text"
            placeholder="Enter title here"
            value={this.state.title}
            name="title"
          />
          <textarea
            onChange={this.handleChange}
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
        {/* <div>
                    {this.state.error}
                </div> */}
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
