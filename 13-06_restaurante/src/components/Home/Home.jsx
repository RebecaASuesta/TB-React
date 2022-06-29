import React from 'react';
import './Home.css';

const Home = (props) => {
    const dish = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='Home'>
                <p>{dish.name}</p>
                <p>{dish.description}</p>
                <p>{dish.price}</p>
            </div>
        )
    })
    
    return (
        <div>{dish}</div>
    )
}

export default Home