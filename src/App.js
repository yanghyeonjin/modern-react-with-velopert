import React from 'react';

import Hello from './components/Hello';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import User from './components/User';
import { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';

function App() {
  // state
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const [users, setUsers] = useState([
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
  ]);





  // ref
  const nextId = useRef(4); // 화면에 보여주지 않아도 되는 변수를 관리할 수도 있다.




  // custom functions
  // input change 이벤트
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    // 배열에 항목 추가
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    // 항목 추가 완료 후 input value 지우기, 다음 id 증가
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }





  return (
    <div>
      <Hello />
      <Counter />
      <InputSample />


      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />

      {/* 배열 렌더링 */}
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  );
}

export default App;
