import React from 'react'
import './Card.css'
import product from '../Images/product.jpg'

export const Card = () => {
  return (
    <div className='card'>
      <figure className='card-container'>
        <img src={product} alt="" />
      </figure>
      <div className='button'>
        <div>
          <span>Explore</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0000" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" stroke='green' strokeWidth={2}/>
        </svg>
      </div>
    </div>
  )
}
