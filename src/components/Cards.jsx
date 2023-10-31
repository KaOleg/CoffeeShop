import React from 'react'
import Card from './Card'
import cardImg from "../images/coffee.png"
function Cards(props) {
  return (
    <div className='cards container'>
        {
        props.coffee.map((c)=> <Card key={c.title} noTransperent country={c.country} image={cardImg} money={c.cost} text={c.title} id={c.id}/>)
        }
    </div>
  )
}

export default Cards
