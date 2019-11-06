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
    if (this.state.reviewList[0] === 0) {
      this.getReviews();
    } else {
      this.setState({
        reviewList: [0]
      });
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
        <div className="single-review-wrapper">
          <div className="review-item-title">{item.title}</div>
          <div className="review-item-content">{item.content}</div>
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
        <h3>Your Reviews</h3>
        {/* <button className="btn" onSubmit={this.handleReviews}> */}
        <button className="btn" onClick={this.handleShowReviewToggle}>
          Reviews
        </button>
        <div
          type="text"
          value={this.state.reviewList}
          placeholder="reviewfield"
        ></div>{" "}
        <div className="review-div">{this.renderReviews()}</div>
      </div>
    );
  }
}
