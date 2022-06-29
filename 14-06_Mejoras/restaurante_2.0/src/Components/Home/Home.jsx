import React from 'react';
import Burger from "../../assets/Burger.jpg";
import Hotdog from "../../assets/Hotdog.jpg";
import Nuggets from "../../assets/Nuggets.jpg";

const Home = () => {
  const menu = [
    {
        id:1,
        img: Burger,
        name:'Burger',
        description:'Hamburguesa vegana',
        price:12
    },
    {
        id:2,
        img: Hotdog,
        name:'Hot dog',
        description:'Perrito caliente vegano',
        price:9
    },
    {
        id:3,
        img: Nuggets,
        name:'Nuggets',
        description:'Nuggets veganos',
        price:10
    }
  ];

  const dishes = menu.map((dish) => {
    return (
      <div key={dish.id}>
        <img src={dish.img} alt="Dish" />
        <h4>{dish.name}</h4>
        <span>{dish.description}</span>
        <span>{dish.price} €</span>
      </div>
    )
  })

  return (
    <>{dishes}</>
  )
}

export default Home