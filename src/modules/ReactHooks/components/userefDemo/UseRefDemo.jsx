import React, { useState, useEffect, useRef } from 'react'

const UseRefDemo = () => {
    const [name, setName] = useState('');
   // const renderCount = useRef(0); //it will create object with current property
   // for Getting html document
   const inputRef = useRef();

   // For getting previous name(state)
   const prevName = useRef();

    const onfocus = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        // To check how many times it renders component
        //renderCount.current = renderCount.current + 1;

        //To get previous check
        prevName.current = name;
    }, [name]);

    return (
        <div>
            <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} />
            <h1>My name is : {name} and it used to be : {prevName.current} </h1>
            <button onClick={onfocus}>Focus</button>
            {/* <h1>Component Rendered {renderCount.current} times. </h1> */}
        </div>
    )
}

export default UseRefDemo;
