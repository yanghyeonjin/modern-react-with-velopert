// module
import React from 'react';

// component
import Hello from './Hello';
import Wrapper from './Wrapper';

// css
import './App.css';

function App() {
    return (
        <Wrapper>
            <Hello name="react" color="red" />
            <Hello color="pink" />
        </Wrapper>
    );
}

export default App;
