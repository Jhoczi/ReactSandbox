import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(null);

    const handleStatusChange = (status) => {
        setIsOnline(status.isOnline)
    };

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
        return (
            <div>
                <p>Naciśnięto {count} razy</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
}

export default Counter;