import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCourses = () => {
    const allCourses = useLoaderData();
     const {_id, image_url,name,rating,details} = allCourses;
    return (
        <div>
            <div className='flex'>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
                            <h2 className="card-title">{ name}</h2>
                                <p>{details}</p>
            <div className="flex card-actions justify-end">
            <button className="btn btn-info">Get Premier</button>
      
    </div>
  </div>
</div>
     </div>
        </div>
    );
};

export default AllCourses;