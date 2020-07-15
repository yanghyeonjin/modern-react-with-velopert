import React from 'react';

import User from './components/User';
import { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';
import { useMemo } from 'react';
import { useCallback } from 'react';



function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter((user) => user.active).length;
}

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
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);





  // ref
  const nextId = useRef(4); // 화면에 보여주지 않아도 되는 변수를 관리할 수도 있다.




  // custom functions
  // input change 이벤트
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  // 배열에 유저 추가
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    // 추가 완료 후 input value 지우기, 다음 id 증가
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [email, username, users])

  // 배열에 특정 원소 삭제
  const onRemove = useCallback((id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    setUsers(users.filter((user) => user.id !== id));
  }, [users]);

  // 계정명 클릭했을 때, 글자색 change
  const onToggle = useCallback((id) => {
    // id와 같으면 해당 user 객체의 active만 반대로 바꾸기
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user
    ))
  }, [users]);




  // 기타 변수
  const count = useMemo(() => countActiveUsers(users), [users]); // users 값의 변동이 있을 때에만 새로운 count를 만든다.





  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />

      {/* 배열 렌더링 */}
      {users.map(user => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />)}
      <div>활성사용자 수: {count}</div>
    </div>
  );
}

export default App;
