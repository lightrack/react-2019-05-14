import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import CartBadge from "./components/cart-badge";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import ListPage from "./components/routes/list";
import MapPage from "./components/routes/map";
import MenuPage from "./components/routes/menu";
import Counter from "./components/counter";
import OrderPage from "./components/routes/order";
import OrderCompletePage from "./components/routes/order-complete";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./history";
import AppMenu, { AppMenuItem } from "./components/app-menu";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ConnectedRouter history={history}>
      <Layout className="App">
        <Header className="header">
          <AppMenu>
            <AppMenuItem to={"/restaurants"}>List</AppMenuItem>
            <AppMenuItem to={"/restaurant-map"}>Map</AppMenuItem>
          </AppMenu>
          <CartBadge />
        </Header>
        <Content>
          <Switch>
            <Redirect from={"/"} exact to={"/restaurants"} />
            <Route path={"/restaurants"} component={ListPage} />
            <Route path={"/restaurants/counter"} component={Counter} />
            <Route path={"/restaurant-map/:restaurantId"} component={MapPage} />
            <Route path={"/restaurant-map/"} component={MapPage} />
            <Route
              path={"/restaurant-menu/:restaurantId"}
              component={MenuPage}
            />
            <Route path={"/order-complete"} component={OrderCompletePage} />
            <Route path={"/order"} component={OrderPage} />
            <Route path={"/error"} render={() => <h2>Error page</h2>} />
            <Route
              path={"/"}
              exact
              children={props => {
                if (props.match) {
                  console.log("matched");
                  return <h2>Page not found</h2>;
                } else {
                  console.log("not matched");
                }
              }}
            />
          </Switch>
        </Content>
        <Footer>{/*<Counter />*/}</Footer>
      </Layout>
    </ConnectedRouter>
  );
}

export default App;
