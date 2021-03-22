import { initState }  from './index';

const articlesReducer = (state = initState.articles, action) => {
    switch (action.type) {
        case 'DELETE_ARTICLE':
            let newArticles = state.filter(article => {
                return action.id !== article.id
            });
            return newArticles
        case 'ADD_ARTICLE':
            const newId = state.length + 1; 
            return [
                ...state,
                {
                    id: newId,
                    title: action.newArticle.title,
                    author: action.newArticle.author,
                    category: action.newArticle.category,
                    article: action.newArticle.article
                }
            ]

        case 'FETCH_ARTICLES_START':
            return Object.assign({}, state, {
                fetching: action.payload,
                fetched: false,
                error:''
                })
            
        case 'FETCH_ARTICLES_ERROR':{
            return Object.assign({}, state, {
                fetching: false,
                fetched:false,
                error:action.payload
                })
            
        }
        case 'RECEIVE_ARTICLES':{
            return{
                ...state,
                fetching: false,
                fetched: true,
                articles: action.payload,
            }
        
            
        }
        default:
            return state
    }
}

export default articlesReducer;