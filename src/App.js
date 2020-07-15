import React from 'react';

import Hello from './components/Hello';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import User from './components/User';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      <Hello />
      <Counter />
      <InputSample />

      {/* 배열 렌더링 */}
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  );
}

export default App;
