import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

// component
import Home from './Home';
import About from './About';

function App() {
    return (
        <div>
            {/* 리액트에서 a 태그를 사용하면 페이지를 아예 새로 불러오게 되어서 가지고 있던 state가 reset 된다. a 대신에 Link를 사용하자 */}
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>

            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default App;
