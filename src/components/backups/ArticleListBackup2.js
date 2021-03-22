import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ArticleInfo from './ArticleInfo';
import { useSelector, useDispatch } from 'react-redux';

const ArticleList = () => {
    const { articles, categoryFilter } = useSelector(state => state);;
    const dispatch = useDispatch();
    const articlesByCategory = articles.filter(article => article.category===categoryFilter)
    const { theme } = useContext(ThemeContext);

    let result;

    if (categoryFilter && articlesByCategory.length) {
        result = articlesByCategory.map(article => <ArticleInfo article={article} key={article.id} />)
    } 
    else if (articles.length && !categoryFilter) {
        result = articles.map(article => <ArticleInfo article={article} key={article.id} />)
    } 
    else {
        result = <p>No articles</p>
    }

    return (
        <div>
            <button style={{background: theme.button}} 
                onClick = {() => dispatch({type:"CHANGE_CATEGORY_FILTER", categoryFilter: "Politics"})}>Politics
            </button>
            <button onClick = {() => dispatch({type:"CHANGE_CATEGORY_FILTER", categoryFilter: "Fashion"})}>Fashion</button>
            <button onClick = {() => dispatch({type:"CHANGE_CATEGORY_FILTER", categoryFilter: ""})}>Show all</button>
            {result}
        </div>
    )
}

export default ArticleList;