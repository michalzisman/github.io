import React, { useContext, useCallback } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ArticleInfo from './ArticleInfo';
import { setCategoryFilter } from '../reducers/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

const ArticleList = () => {
    const articles  = useSelector(state => state.articles);
    const categoryFilter = useSelector(state => state.categoryFilter);

    const dispatch = useDispatch(); 

    const changeTheFilterCategory = useCallback(
        (newCategory) => dispatch(setCategoryFilter(newCategory)),
        [dispatch]
    )

    const filterByCategory = createSelector(
        state => state.articles,
        articles => articles.filter(article => article.category === categoryFilter)
    )

    const { theme } = useContext(ThemeContext);
    
    const changeFilterCategory=(filter, e) => {
        changeTheFilterCategory(filter);
    }

    // const articlesByCategory = articles.filter(article => article.category===categoryFilter)
    const articlesByCategory = useSelector(filterByCategory);

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
                onClick = {() => changeFilterCategory("Politics")}>Politics
            </button>
            <button onClick = {() => changeFilterCategory("Fashion")}>Fashion</button>
            <button onClick = {() => changeFilterCategory("")}>Show all</button>
            {result}
        </div>
    )
}

export default ArticleList;