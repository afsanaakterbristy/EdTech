import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
     const courses=useLoaderData()
    return (
        <div>
            <h2 className='text-center font-bold text-lg mt-4 '>All Our Courses</h2>
            <div className="grid grid-cols-3 gap-4 container mx-auto px-4">
                <div class="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
            <div className='grid grid-cols-3 gap-5 my-10 col-span-2'>
            
            {
                courses.map(course=><Cards course={course}></Cards>)
            }
            </div>
            </div>
        </div>
    );
};

export default Courses;