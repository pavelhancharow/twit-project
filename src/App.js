import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import PostAddForm from './components/PostAddForm';
import PostList from './components/PostList';
import PostStatusFilter from './components/PostStatusFilter';
import SearchPanel from './components/SearchPanel';
import './App.sass';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Собираюсь изучить React JS', important: true, id: 1 },
        { label: 'Вот теперь хорошо!', important: false, id: 2 },
        { label: 'Мне нужен перерыв...', important: false, id: 3 }
      ]
    };
    this.maxId = 4;
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const idx = data.findIndex(el => el.id === id);
      const newArr = [...data.slice(0, idx), ...data.slice(idx + 1)];

      return { data: newArr };
    });
  }

  render() {
    return (
      <div className="app" >
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
