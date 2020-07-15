import React from 'react';

import User from './components/User';
import { useRef } from 'react';
import CreateUser from './components/CreateUser';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useReducer } from 'react';
import useInput from './hooks/useInput';


const initialState = {
  users: [
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
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.id,
            username: action.username,
            email: action.email
          }
        ]
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? { ...user, active: !user.active } : user)
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      }
    default:
      return state;
  }
}


function countActiveUsers(users) {
  console.log('활성 사용자 수 세는 중...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [form, onChange, reset] = useInput({
    username: '',
    email: ''
  });
  const { username, email } = form;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const nextId = useRef(4);


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      id: nextId.current,
      username,
      email
    })

    reset();
    nextId.current += 1;
  }, [email, username, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, [])


  const count = useMemo(() => countActiveUsers(users), [users]);


  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      {users.map(user => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />)}
      <div>활성사용자 수: {count}</div>
    </div>
  );
}

export default App;
