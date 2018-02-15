
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
  }, action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.concat(action.restaurant)})
    case "DELETE_RESTAURANT":
      return Object.assign({}, state, {restaurants: state.restaurants.concat(action.restaurant)})
    case "ADD_REVIEW":
      return state
    case "DELETE_REVIEW":
      return state
    default:
      return state
  }
}
