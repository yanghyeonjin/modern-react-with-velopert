import React from 'react';
import { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        username: '', // input[name="username"]의 value
        nickname: '' // input[name="nickname"]의 value
    });

    const { username, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ // e.target이 input[name="username"]이고 value="val1"이면 username: val1 형태로 들어가게 됨.
            ...inputs,
            [name]: value
        })
    }

    const reset = () => {
        setInputs({
            username: '',
            nickname: ''
        })
    }
    return (
        <div>
            <input placeholder="이름" name="username" value={username} onChange={onChange} />
            <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>값: </b>
                {username} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;