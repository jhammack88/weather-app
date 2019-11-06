import React, { Component } from "react";

export default class DisplayReviews extends Component {
  constructor() {
    super();

    this.state = {
      reviewList: []
    };
  }

  //   handleReviews = () => {
  //     this.setState({
  //       data: event.target.value
  //     });
  //     console.log();
  //   };

  getReviews = () => {
    fetch(`https://weather-backend2019.herokuapp.com/reviews`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          reviewList: data
        });
        console.log("hello", this.state.reviewList);
      });

    //   .then(
    //     response => response.json(),
    //     this.setState({
    //       reviewList: this.state.reviewList.response
    //     }),
    //     console.log(this.state.reviewList)
    //   )
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  //   console.log(reviewList)

  render() {
    return (
      <div>
        <h2>Your Reviews</h2>
        {/* <button className="btn" onSubmit={this.handleReviews}> */}
        {/* <button className="btn" onClick={this.getReviews}>
          Reviews
        </button> */}
        {/* <textarea
          type="text"
          value={this.state.reviewList}
          placeholder="reviewfield"
        ></textarea> */}

        {/* <div className="review-div"> */}
        {/* hello */}
        {/* {this.state.reviewList.filter(this.reviewList === "New Post")} */}
        {/* </div> */}
      </div>
    );
  }
}
