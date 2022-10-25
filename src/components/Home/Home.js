import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';


const Home = () => {
    const courses=useLoaderData()
    return (
        <>
           <div className="grid grid-cols-3 gap-4 container mx-auto px-4">
                  
            {
                courses.map(course=><Cards course={course}></Cards>)
            }
            </div>
           
            </>
    );
};

export default Home;