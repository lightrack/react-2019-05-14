import React, { useState } from "react";

function Review(props) {
  return (
    <div>
      <span>{props.user}</span>
      <br />
      <span>{props.text}</span>
      <span style={{ float: "right" }}>{props.rating}</span>
    </div>
  );
}

export default Review;
