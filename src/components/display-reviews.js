import React, { Component } from "react";

export default class DisplayReviews extends Component {
  constructor() {
    super();

    this.state = {
      reviewList: [0]
    };
  }

  //   handleReviews = () => {
  //     this.setState({
  //       data: event.target.value
  //     });
  //     console.log();
  //   };

  handleShowReviewToggle = () => {
    if (this.reviewList[0] !== 0) {
      this.setState({
        reviewList: []
      });
      console.log("toggle works");
    } else {
      this.getReviews();
      console.log("toggle is false");
    }
  };

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
        console.log(this.state.reviewList);
      });
  };

  renderReviews = () => {
    return this.state.reviewList.map(item => {
      return (
        <div>
          <h1>{item.title}</h1>
          <h2>{item.content}</h2>
        </div>
      );
    });
  };

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

  //   console.log(reviewList)

  render() {
    return (
      <div className="reviewfield">
        <h2>Your Reviews</h2>
        {/* <button className="btn" onSubmit={this.handleReviews}> */}
        <button className="btn" onClick={this.handleShowReviewToggle}>
          Reviews
        </button>
        <div
          type="text"
          value={this.state.reviewList}
          placeholder="reviewfield"
        ></div>{" "}
        <div className="review-div">
          {this.renderReviews()}
          {/* {this.state.reviewList.this.reviewList === "New Post"} */}
        </div>
      </div>
    );
  }
}
