import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesCategory = () => {
    const course = useLoaderData();
   
    return (
        <div>
            <h2>couser category{course.length}</h2>
        </div>
    );
};

export default CoursesCategory;