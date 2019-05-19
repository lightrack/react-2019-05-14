import React, { PureComponent } from "react";
import Rate from "antd/lib/rate";
import RestaurantMenu from "./restaurant-menu";
import RestaurantReviews from "./restaurant-reviews";
import { list } from "../decorators/list";

class Restaurant extends PureComponent {
  render() {
    const {
      image,
      name,
      menu,
      reviews,
      isMenuOpen,
      isReviewOpened
    } = this.props;
    let iRating =
      reviews.length > 0
        ? Math.round(
            (reviews.reduce((a, b) => +a + +b.rating, 0) / reviews.length) * 10
          ) / 10
        : 0;
    iRating = (iRating ^ 0) == iRating ? iRating : (iRating ^ 0) + 0.5;

    const {
      restaurant,

      // props from list decorator
      isItemOpened,
      toggleItemOpened
    } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>
        <Rate allowHalf defaultValue={iRating} />
        <span>{iRating}</span>
        <br />
        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        <button onClick={toggleItemOpened}>
          {isItemOpened ? "Close reviews" : "Open reviews"}
        </button>
        {isItemOpened ? <RestaurantReviews reviews={reviews} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default list(Restaurant);
