// module
import React from 'react';

// css
import './App.css';

// component
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

function App() {
    return (
        <TodoTemplate>
            <TodoHead />
            <TodoList />
        </TodoTemplate>
    );
}

export default App;
