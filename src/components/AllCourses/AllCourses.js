import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar,FaRegStarHalf } from "react-icons/fa";

const AllCourses = () => {
    const allCourses = useLoaderData();
     const {_id, image_url,name,rating,details,price,author} = allCourses;
    return (
        <div>
            <div className='m-40'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className='w-96 p-1' src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
                            <h2 className="card-title">{ name}</h2>
                        <p>{details}</p>
                        

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
                        <div className='flex'>
                            
                           <img className="w-11 h-11 mt-2 mr-2 rounded " src={author.img} alt="" />
                            <h2 className='font-bold ml-2 mt-3'>{author.name}</h2> 
                            
                           
                        </div>
                          <h2 className=''>{author.published_date}</h2> 
      <div className="flex card-actions justify-end">
      <button className="btn btn-warning"><Link to={`/premier/${_id}`}>Get Premier</Link></button>
      <button className="btn btn-outline btn-ghost">Download</button>
    </div>
  </div>
</div>
     </div>
        </div>
    );
};

export default AllCourses;