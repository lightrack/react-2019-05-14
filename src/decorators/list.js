// HOC - higher order component
import React, { Component } from "react";

const list = OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      isItemOpened: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleItemOpened={this.toggleItemOpened}
        />
      );
    }

    toggleItemOpened = () => {
      this.setState({
        isItemOpened: !this.state.isItemOpened
      });
    };
  };

export { list };
