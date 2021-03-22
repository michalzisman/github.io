import React from 'react'; 
import { connect } from 'react-redux';
import { deleteTheArticle } from '../../reducers/actions/actions'

const ArticleInfo = (article) => {

    const data = article.article;

    return (
        <div>
            title: {data.title} | author: {data.author} | category: {data.category} text: {data.article}
            <button onClick = {(e) => deleteArticle(data.id, article)}>DELETE</button>
        </div>
    )
}

const deleteArticle=(id, article)=>{
    article.deleteTheArticle(id);
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteTheArticle : (id) => { dispatch(deleteTheArticle(id)) },
    }
}

export default connect(null, mapDispatchToProps)(ArticleInfo);