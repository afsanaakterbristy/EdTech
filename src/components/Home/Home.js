import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = () => {
    const courses=useLoaderData()
    return (
        <>
            <h1>okk{courses.length}</h1>
            
            {
                courses.map(course=><Cards course={course}></Cards>)
            }
        </>
    );
};

export default Home;