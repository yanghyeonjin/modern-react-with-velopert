import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

// component
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
                <li>
                    <Link to="/history">history 예제</Link>
                </li>
            </ul>

            <hr />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample} />
                <Route
                    // path를 따로 정의하지 않으면 모든 상황에 렌더링 됨.
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
