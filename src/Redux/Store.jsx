import { legacy_createStore } from "redux";
import Reducer from "./Reducer";

const Store = legacy_createStore(Reducer, { counter: 0 });

export default Store;
