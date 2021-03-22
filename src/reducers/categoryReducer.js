import { initState } from './index';

const categoryReducer = (state = initState.categoryFilter, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY_FILTER':
            return action.categoryFilter
            
        default:
            return state
    }
}

export default categoryReducer;