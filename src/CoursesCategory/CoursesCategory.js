import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards/Cards';

const CoursesCategory = () => {
    const courseCategory = useLoaderData();
   
    return (
        <div className='grid grid-cols-2'>
            
            {
                courseCategory.map(course => <Cards
                course={course}
                ></Cards>) 
            }
        </div>
    );
};

export default CoursesCategory;