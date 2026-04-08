import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://images.presentationgo.com/2025/04/software-developer-coding-laptop.jpg" alt="" width={333} 
        style={{border: "2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>

    </div>
  )
}

export default Card
