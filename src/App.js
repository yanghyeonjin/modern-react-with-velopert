import React from 'react';

import Hello from './components/Hello';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import User from './components/User';
import { useRef } from 'react';

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

  const nextId = useRef(4); // 화면에 보여주지 않아도 되는 변수를 관리할 수도 있다.

  const onCreate = () => {
    // 배열에 항목 추가
    nextId.current += 1;
  }

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
