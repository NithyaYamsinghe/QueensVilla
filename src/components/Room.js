import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

// Passing room prop
export default function Room({room}) {
  const {name, slug, images, price} = room;

  return (
    
    <article className="room">
      {/* Image container */}
      <div className="img-container">
        {/* Setting up a default image */}
        <img src={images[0] || defaultImg} alt="single room"/>
         {/* Price Top */}
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
         {/* Link to the page */}
         <Link to={`/rooms/${slug}`} className="btn-primary room-link">features</Link>
      </div>
       {/* name of the room */}
      <p className="room-info">{name}</p>
    </article>
  )
}


// Implementing prop types
Room.propTypes = {


  room:PropTypes.shape({

      name:PropTypes.string.isRequired,
      slug:PropTypes.string.isRequired,
      images:PropTypes.arrayOf(PropTypes.string).isRequired,
      price:PropTypes.number.isRequired
    })

}