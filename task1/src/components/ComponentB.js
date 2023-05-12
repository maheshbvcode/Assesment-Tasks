import React, { useState } from 'react'
import {  useDispatch } from 'react-redux';
import { change } from '../action';

const ComponentB = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(change(inputValue));
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <h1 id='header'>Task 1</h1>
            <h2>Input value Component B</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='' id='label'>Component B</label>
                <input type='text' name='name' value={inputValue} onChange={handleChange} />
                <input type="submit" value="SEND" />
            </form>
        </div>
    )
}

export default ComponentB;
