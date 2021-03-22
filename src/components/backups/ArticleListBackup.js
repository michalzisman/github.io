import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import ArticleInfo from '../ArticleInfo';
import { setCategoryFilter } from '../../reducers/actions/actions'

const ArticleList = (state) => {
    
    const { articles, articlesByCategory } = state;
    const { theme } = useContext(ThemeContext);

    //This code gives "No articles" if no category is selected.
    // {
    //     articlesByCategory && articlesByCategory.length
    //         ? articlesByCategory.map((article, index) => {
    //             console.log(article);
    //             return (<ArticleInfo article={article} key={index} />);
    //         })
    //         : <p>No Articles</p>
    // }

    // So I did this:
    let result;

    if (state.categoryFilter && articlesByCategory.length) {
        result = articlesByCategory.map(article => <ArticleInfo article={article} key={article.id} />)
    } 
    else if (articles.length && !state.categoryFilter) {
        result = articles.map(article => <ArticleInfo article={article} key={article.id} />)
    } 
    else {
        result = <p>No articles</p>
    }

    return (
        <div>
            <button style={{background: theme.button}} onClick = {() => changeFilterCategory("Politics", state)}>Politics</button>
            <button onClick = {() => changeFilterCategory("Fashion", state)}>Fashion</button>
            <button onClick = {() => changeFilterCategory("", state)}>Show all</button>
            {result}
        </div>
    )
}

const changeFilterCategory=(filter, state)=>{
    state.setCategoryFilter(filter);
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        categoryFilter: state.categoryFilter,
        articlesByCategory: state.articles.filter(article => article.category===state.categoryFilter)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setCategoryFilter : (newCategory) => { dispatch(setCategoryFilter(newCategory)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList) ;