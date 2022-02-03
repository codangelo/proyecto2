import { createStore, combineReducers } from 'redux';
import CategoryReducer from './reducer/category.reducer';
import ProductReducer from './reducer/product.reducer';

const RootReducer = combineReducers ({
    categories: CategoryReducer,
    productos: ProductReducer
})

export default createStore(RootReducer);