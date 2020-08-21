// module
import React from 'react';

// css
import './App.css';

// component
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';

function App() {
    return (
        <TodoTemplate>
            <TodoHead />
        </TodoTemplate>
    );
}

export default App;
