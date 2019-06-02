import React from "react";
import { List } from "antd";
import Review from "../review";
import ReviewForm from "../review-form";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  return (
    <>
      <List data-automation-id="review-list">
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </List>
      <ReviewForm />
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ReviewList;
