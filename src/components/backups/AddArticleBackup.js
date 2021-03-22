import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../reducers/actions/actions';

const AddArticle = (props) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [article, setArticle] = useState("");

    function updateData(e) {
      if (e.target.name==="title") {
        setTitle(e.target.value)
      }
      else if (e.target.name==="author") {
        setAuthor(e.target.value)
      }

      else if (e.target.name==="category") {
        setCategory(e.target.value)
      }
      else {
        setArticle(e.target.value)
      }
    }

    async function submitArticle(e) {
      e.preventDefault();
      const newArticle = {
        title : title,
        author: author,
        category: category,
        article: article
      }
      try {
        await props.addArticle(newArticle);
        alert("Success!");
      }
      catch {
        alert("An error has occured!");
      }
    }

    return (
        <div>
          <form onSubmit={submitArticle}>
            <h1>Add new article:</h1>
            <label>Enter title:</label>
            <input type="text" name='title'  placeholder="Enter title" value={title} onChange={updateData}></input>
            <label>Enter author:</label>
            <input type="text" name='author' placeholder="Enter author" onChange={updateData}></input>
            <label>Select category:</label>
            <select name="category" id="category" onChange={updateData}>
              <option value=""></option>
              <option value="Fashion">Fashion</option>
              <option value="Politics">Politics</option>
            </select>
            <label>Enter article:</label>
            <input type="text" name='article' placeholder="Enter article" onChange={updateData}></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return{

      addArticle : (article)=>{dispatch(addArticle(article))}
  }
}

export default connect(null, mapDispatchToProps)(AddArticle);