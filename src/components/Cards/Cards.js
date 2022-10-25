import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ course }) => {
    const {_id, image_url,name,rating,details} = course;
    return (
        
     <div className='flex'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
                    <h2 className="card-title">{ name}</h2>
                    <p>{details.length > 200 ?
                        <p>{details.slice(0, 250) + '...'}</p> : <p>{ details}</p>}</p>
    <div className="flex card-actions justify-end">
      <button className="btn btn-info">Get Premier</button>
      <button className="btn btn-primary"><Link to={`/allcourses/${_id}`}>Show More</Link> </button>
    </div>
  </div>
</div>
     </div>

        
    );
};

export default Cards;