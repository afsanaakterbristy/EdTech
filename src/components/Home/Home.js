import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';


const Home = () => {
    const courses=useLoaderData()
    return (
        <>
            <div className="relative bg-purple-400 dark:bg-gray-400">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Learn on your own,
            <br className="hidden md:block" />
            build confidence!{' '}
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
              <span className="relative text-teal-900">track program</span>
            </span>
          </h2>
          <p className="mb-6 text-base text-teal-900 md:text-lg">
           Web Technology refers to the various tools and techniques that are utilized in the process of communication between different types of devices over the internet. A web browser is used to access web pages. 
          </p>
          <form className="flex flex-col items-center justify-center w-full mb-4 md:flex-row md:px-16">
            {/* <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            /> */}
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto dark:bg-black  bg-purple-900 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get Start
            </Link>
          </form>
          
          <Link
            to="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>


          <h1 className="mb-9 font-sans text-3xl font-semibold tracking-tight text-black sm:text-4xl sm:leading-none ml-20">Best career track Courses in the country</h1>  
           <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 container mx-auto px-4 mt-7">
                  
            {
                courses.map(course=><Cards key={course._id} course={course}></Cards>)
            }
            </div>
           
            </>
    );
};

export default Home;