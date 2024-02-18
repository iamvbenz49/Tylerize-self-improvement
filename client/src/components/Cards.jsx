import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/cards.css"

const Cards = ({ title, description, linkTo }) => {
  return (
    <div>
        <Link to={linkTo}>
            <div className="card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    </div> 
  );
};

export default Cards;
