import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses-category')
        .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h3 className='font-bold mt-4 mb-3'>Courses Category</h3>
            <div >
                {
                    categories.map(category =>
                        
                        <h2 className= 'bg-purple-400  dark:bg-gray-400 rounded-md mr-12 font-bold' key={category.id}>
                        <Link className='grid grid-rows-1 grid-flow-col gap-7 mb-2 p-3' to={`/category/${category.id}`}>{category.name}</Link> 
                        </h2>
                    
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;