import React from 'react'; 
import { useDispatch } from 'react-redux';

const ArticleInfo = (article) => {

    const dispatch = useDispatch();

    const data = article.article;

    return (
        <div>
            title: {data.title} | author: {data.author} | category: {data.category} text: {data.article}
            <button onClick = {() => dispatch({type:"DELETE_ARTICLE", id: data.id})}>DELETE</button>
        </div>
    )
}

export default ArticleInfo;