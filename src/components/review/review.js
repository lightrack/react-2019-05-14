import React from "react";
import { Comment, Rate } from "antd";
import PropTypes from "prop-types";
import "./review.css";
import { connect } from "react-redux";
import { createUserSelector } from "../../selectors";

function Review({ review, user }) {
  return (
    <Comment
      className="review"
      author={user.name}
      content={review.text}
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={review.rating}
          className="review-rating"
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

const initMapStateToProps = () => {
  const userSelector = createUserSelector();
  return (state, ownProps) => {
    const oUser = { id: ownProps.review.userId };
    return {
      user: userSelector(state, oUser)
    };
  };
};

export default connect(initMapStateToProps)(Review);
