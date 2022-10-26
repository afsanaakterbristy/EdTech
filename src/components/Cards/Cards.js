import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar,FaRegStarHalf } from "react-icons/fa";

const Cards = ({ course }) => {
    const {_id, image_url,name,rating,details,price} = course;
    return (
        
     <div className='flex'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
                    <h2 className="card-title font-bold">{ name}</h2>
                    <p>{details.length > 200 ?
              <p>{details.slice(0, 200) + '...'}</p> : <p>{details}</p>}</p>
            
            <div className="flex justify-between">
              <div className='flex'>
                <h2>{rating}</h2>
                <div className='flex pt-1 ml-2 text-yellow-400'>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                  <FaRegStarHalf></FaRegStarHalf>
                </div>
             </div>
              <h2>${price}</h2>
            </div>
      <div className="flex card-actions justify-between">
      <button className="btn btn-warning  text-white"><Link to={`/premier/${_id}`}>Get Premier</Link></button>
      <button className="btn btn-primary bg-purple-900 text-white"><Link to={`/allcourses/${_id}`}>Show More</Link> </button>
    </div>
  </div>
</div>
     </div>

        
    );
};

export default Cards;