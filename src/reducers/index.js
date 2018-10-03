import { combineReducers } from 'redux';
import AllReducer from './reducer_all';
import EatReducer from './reducer_eat';
import DrinkReducer from './reducer_drink';
import DecorateReducer from './reducer_decorate';
import ActiveEat from './reducer_active_eat';
import ActiveDrink from './reducer_active_drink';
import ActiveDecorate from  './reducer_active_decorate';
import ActiveAll from './reducer_active_all';
import BasketUpdate from './reducer_basket_update';

const rootReducer = combineReducers({
  all: AllReducer,
  eat: EatReducer, //state or key: name of reducer
  drink: DrinkReducer,
  decorate: DecorateReducer,
  activeAll: ActiveAll,
  activeEat: ActiveEat,
  activeDrink: ActiveDrink,
  activeDecorate: ActiveDecorate,
  basketUpdate: BasketUpdate

});

export default rootReducer;