import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../modules/todos';

import TodoList from '../components/TodoList';

function TodoListContainer() {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

    return <TodoList todos={todos} onToggle={onToggle} />;
}

export default TodoListContainer;
