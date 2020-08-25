// module
import React from 'react';

// css
import './App.css';

// component
import Users from './Users';

// Context API
import { UsersProvider } from './UsersContext';

function App() {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}

export default App;
