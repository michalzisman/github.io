// import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          LOGO
        </p>
      </header>
      <ThemeContextProvider>
        <ArticleList />
        <AddArticle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
