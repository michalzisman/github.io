import { combineReducers } from "redux";
import articleReducer from './articlesReducer';
import categoryReducer from './categoryReducer';

export const initState = {
    categoryFilter: '',
    articles: [
        {
            id:'1',
            title: 'Elections of USA 2020',
            author: 'Jacob Yang',
            category: 'Politics',
            article: 'Contrary to popular belif, Lorem Ipsum is not simple...'
        },
        {
            id:'2',
            title: 'The right way to wear hats',
            author: 'Melisa Rendel',
            category: 'Fashion',
            article: 'Contrary to popular belif, Lorem Ipsum is not simple...'
        },
        {
            id:'3',
            title: 'The right way to wear a skirt',
            author: 'Barbara Jackson',
            category: 'Fashion',
            article: 'Contrary to popular belif, Lorem Ipsum is not simple...'
        }
    ]
}

const allReducers = combineReducers({
    categoryFilter: categoryReducer,
    articles: articleReducer,
});

export default allReducers;