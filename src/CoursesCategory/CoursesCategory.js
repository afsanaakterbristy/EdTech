import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Category from '../components/Category/Category';

const CoursesCategory = () => {
    const courseCategory = useLoaderData();
   
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
            
            {
                courseCategory.map(course => <Category key={course._id} 
                course={course}
                ></Category>) 
            }
        </div>
    );
};

export default CoursesCategory;