import {useState} from 'react'

const Counter = (props) => {
    const [counter, setCounter] = useState(props.initialValue);

    const increment = () => {
        setCounter(counter + 1);
    };
    
    const decrement = () => {
        setCounter(counter - 1)
    };

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Incrementa</button>
            <button onClick={decrement}>Decrementa</button>
        </div>
    )
}

export default Counter