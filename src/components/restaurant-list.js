import React, { Component } from "react";
import Restaurant from "./restaurant";
import { accordion } from "../decorators/accordion";
import { List } from "antd";
import PropTypes from "prop-types";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchData && this.props.fetchData();
  }

  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;
    return (
      <List>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </List>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func
};

export default accordion(RestaurantList);
