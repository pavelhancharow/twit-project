import AppHeader from './components/AppHeader';
import PostAddForm from './components/PostAddForm';
import PostList from './components/PostList';
import PostStatusFilter from './components/PostStatusFilter';
import SearchPanel from './components/SearchPanel';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;
