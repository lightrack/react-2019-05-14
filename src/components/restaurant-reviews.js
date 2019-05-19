import React from "react";
import Review from "./review";

function RestaurantReviews(props) {
  return (
    <div>
      {props.reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
}

export default RestaurantReviews;
