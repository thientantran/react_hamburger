import { combineReducers } from "redux";
import { BurgerReducer } from "./ProjectReducer";
const rootReducer = combineReducers({
  BurgerReducer: BurgerReducer,
});

export default rootReducer;
