import React from 'react'
import './Home.css'

const Home = (props) => {
    console.log(props.content.image)
    return (
        <div className='Home'>
            <h2>About</h2>
            <div className = 'About'>
                <img className="Oriol" src={props.content.image} alt=""/>
                <div>{props.content.about}</div>
            </div>
            <h2>Bio</h2>
            <div>{props.content.bio}</div>
            <h2>Knowledges</h2>
            <div>{props.content.knowledges}</div>
        </div>
    )
}

export default Home