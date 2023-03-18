
import { legacy_createStore } from "redux";
import rootReducer from "./reducers";


// const Store = createStore(rootReducer);
const Store = legacy_createStore(rootReducer)
export default Store ;