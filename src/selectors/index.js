import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const userSelector = state => state.users;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      console.log("dishSelector");
      return dishes.find(dish => dish.id === id);
    }
  );

export const createReviewSelector = () =>
  createSelector(
    reviewsSelector,
    idSelector,
    (reviews, id) => {
      console.log("reviewSelector");
      return reviews.find(review => review.id === id);
    }
  );

export const createUserSelector = () =>
  createSelector(
    userSelector,
    idSelector,
    (users, id) => {
      console.log("userSelector");
      return users.find(user => user.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  dishesSelector,
  (cart, dishes) => {
    console.log("selectAllDishesAndTotalPrice");
    let totalPrice = 0;

    let allDishes = [];
    for (let i = 0; i < dishes.length; i++) {
      if (cart[dishes[i].id]) {
        const amount = cart[dishes[i].id];
        const totalDishPrice = amount * dishes[i].price;
        totalPrice += totalDishPrice;

        allDishes.push({
          ...dishes[i],
          amount,
          totalDishPrice
        });
        continue;
      }
    }

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);
