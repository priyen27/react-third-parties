import React, { useState, useRef, useEffect } from 'react';

const UsePreviousDemo = () => {
    const [count, setCount] = useState(0);

    const usePrevious = (value) => {
        const ref = useRef();
        //Store current value in ref
        useEffect(() => {
            ref.current = value;
          }, [value]);

        // Return previous value (happens before update in useEffect above)
        return ref.current;
    };

    const prevCount = usePrevious(count);
    return (
        <div>
             <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UsePreviousDemo;
