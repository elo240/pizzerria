import { combineReducers, createStore } from "redux";
import order from "./orderReducer";
import pizza from "./pizzaReducer";
const mainReducer = combineReducers({
	order,
	pizza,
});
const store = createStore(mainReducer);
export default store;
