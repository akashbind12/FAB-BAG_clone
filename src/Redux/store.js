import { applyMiddleware, combineReducers, legacy_createStore,compose} from "redux";
import thunk from "redux-thunk"
import { CartReducer} from "./cart/reducer";


const rootReducer = combineReducers({
    carts : CartReducer,
})


const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

    
const store = legacy_createStore(rootReducer, enhancer)




store.subscribe(() => {
    console.log("Subscribe", store.getState());
});


export default store