import React from 'react';
import { useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo } from '../modules/todos';

function TodosContainer() {
    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));

    return <Todos onCreate={onCreate} />;
}

export default React.memo(TodosContainer);
