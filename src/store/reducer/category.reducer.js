import {CATEGORIES} from '../../utils/data/categories'
import { SELECTED_CATEGORY } from '../actions/category.action'
const initialState = {
    categories: CATEGORIES ,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECTED_CATEGORY:
            const indexCategory = state.categories.findIndex(category => category.id === action.categoryId)
            if(indexCategory === -1) return state
            return{
            ...state,
            selected: state.categories[undexCategory] 
            }
        default:
            return state
    }

}

export default CategoryReducer;