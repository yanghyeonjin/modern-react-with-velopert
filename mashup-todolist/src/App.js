// module
import React from 'react';

// css
import './App.css';

// component
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

// Context API 사용
import { TodoProvider } from './TodoContext';

function App() {
    return (
        <TodoProvider>
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
