import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

// component
import Home from './Home';
import About from './About';

function App() {
    return (
        <div>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
