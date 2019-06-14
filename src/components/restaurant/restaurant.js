import React, { PureComponent } from "react";
import { List, Avatar, Button } from "antd";
import AverageRating from "../average-rating";
import ReviewList from "../review-list";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import * as PropTypes from "prop-types";
import "./restaurant.css";
import { NavLink } from "react-router-dom";
import i18n from "../../decorators/i18n";

class Restaurant extends PureComponent {
  state = {
    error: null
  };
  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  render() {
    const {
      id,
      image,
      name,
      isOpen: isReviewOpen,
      toggleVisibility,
      t
    } = this.props;

    return this.state.error ? (
      t("not available")
    ) : (
      <>
        <List.Item
          className="restaurant-list-item"
          actions={[
            <AverageRating id={id} />,
            <Button
              data-automation-id={`toggle-review-list-${id}`}
              onClick={toggleVisibility}
            >
              {isReviewOpen ? t("hide reviews") : t("show reviews")}
            </Button>,
            <Button
              data-automation-id={`toggle-menu-${id}`}
              onClick={this.handleToggleOpenClick}
            >
              <NavLink to={`/restaurant-menu/${id}`}>{t("go to menu")}</NavLink>
            </Button>,
            <Button>
              <NavLink to={`/restaurant-map/${id}`}>{t("show on map")}</NavLink>
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar shape="square" src={image} />}
            title={name}
          />
        </List.Item>
        {isReviewOpen ? <ReviewList id={id} /> : null}
      </>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

Restaurant.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string),

  isMenuOpen: PropTypes.bool,
  toggleOpenMenu: PropTypes.func.isRequired,

  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func.isRequired,
  t: PropTypes.func
};

export default toggleVisibility(i18n(Restaurant));
