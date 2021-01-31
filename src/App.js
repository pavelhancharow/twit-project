import AppHeader from './components/AppHeader';
import PostAddForm from './components/PostAddForm';
import PostList from './components/PostList';
import PostStatusFilter from './components/PostStatusFilter';
import SearchPanel from './components/SearchPanel';
import './App.sass';

const data = [
  { label: 'Собираюсь изучить React JS', important: true, id: 'asd' },
  { label: 'Вот теперь хорошо!', important: false, id: 'few' },
  { label: 'Мне нужен перерыв...', important: false, id: 'wqe' }
]

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}

export default App;
