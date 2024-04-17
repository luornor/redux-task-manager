import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Redux Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
