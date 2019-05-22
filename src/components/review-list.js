import React from "react";
import { List } from "antd";
import Review from "./review";
import PropTypes from "prop-types";

function ReviewList({ reviews }) {
  return (
    <div data-automation-id="reviewList">
      <List>
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </List>
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ReviewList;
