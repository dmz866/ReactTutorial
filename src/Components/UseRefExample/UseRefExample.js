import React, { Component } from 'react';
import { useRef } from 'react';

export const UseRefExample = () => {
    const testRef = useRef(null);


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(testRef);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" ref={testRef} />
            <button type="submit">Click</button>
        </form>
    );
};
