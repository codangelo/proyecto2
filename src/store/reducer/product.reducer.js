import { PRODUCTS } from '../../utils/data/products'
import { SELECTED_PRODUCT, FILTER_PRODUCT } from '../actions/product.action'
const initialState = {
    products: PRODUCTS,
    filteredProduct: [],
    selected: null
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productId)
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filterProduct: state.product.filter(product => product.category === action.categoryId)
            }
        default:
            return state
    }
}

export default ProductReducer;