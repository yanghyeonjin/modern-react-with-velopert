import React from 'react';
import { useState } from 'react';

function InputSample() {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue('')
    }
    return (
        <div>
            <input value={value} onChange={onChange} />
            <button onClick={reset}>초기화</button>
            <div>
                <b>값: {value}</b>
            </div>
        </div>
    );
}

export default InputSample;