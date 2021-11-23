import { createStore, combineReducers } from "redux";

//Aqui importamos os nossos reducers, no caso temos apenas de counter
import reducerCounter from "./modules/result/reducer";

//Aqui combinamos todos os reducers que importamos
const reducers = combineReducers({ result: reducerCounter });

//Por fim passamos esses recucers para o createStore
const store = createStore(reducers);

export default store;
