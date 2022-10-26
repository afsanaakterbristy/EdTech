import React, { useContext } from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  
  const handleLogout = () => {
    logOut()
      .then(() => { })
    .catch(error=>console.error(error))
  }

  //mode dark light

  const handleTohhle = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }

  } 

    return (
        <div>
             <div className="bg-purple-900 dark:bg-black">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Edtech"
            title="Edtech"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 ">
              EdTech
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                aria-label="courses"
                title="courses"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Courses
              </Link>
            </li>
            
            <li>
              <Link
                to='/blog'
                aria-label="blog"
                title="blog"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </Link>
            </li>
            
                 <li>
              <Link
                to=''
                aria-label=""
                title=""
                className="flex font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >    {
                      user?.uid ?
                        <>
                          <Link className=' mt-3' to='/profile'>
                          <span className='p-3 mt-3'>{user?.displayName}</span></Link>
                            <Link to='/profile'>
                            {
                              user?.photoURL ? <img 
                          title={user?.displayName} className="w-11 h-11 mt-2 mr-2 rounded " src={user?.photoURL} alt="" /> :<p className='mt-4'><FaUser></FaUser></p>
                            }
                          </Link>
                          
                          <button onClick={handleLogout}
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                        Logout
                         
                          </button>
                         
                         
                        </> :
                        <>
                        <Link className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/login'>login</Link>
                        <Link className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/register'>register</Link>
                        </>
              }
              </Link>
                </li>
                <li>
  
                  <div onClick={handleTohhle} className="relative cursor-pointer">
                  <input type="checkbox" id="toggleB" className="sr-only" />
                  <div className="block bg-white dark:bg-white w-14 h-8 rounded-full"></div>
                  <div className="dark:translate-x-full	 dot absolute left-1 top-1 bg-purple-700 dark:bg-black w-6 h-6 rounded-full transition"></div>
                </div>
                </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          EdTech
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="courses"
                          title="courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          to='/blog'
                          aria-label="blog"
                          title="blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
              <Link
                to=''
                aria-label=""
                title=""
                className="flex font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                  >    {
                      user?.uid ?
                        <>
                          <Link className=' mt-3' to='/profile'>
                          <span className='p-3 mt-3'>{user?.displayName}</span></Link>
                            <Link to='/profile'>
                            {
                              user?.photoURL ? <img 
                          title={user?.displayName} className="w-11 h-11 mt-2 mr-2 rounded " src={user?.photoURL} alt="" /> :<p className='mt-4'><FaUser></FaUser></p>
                            }
                          </Link>
                          
                          <button onClick={handleLogout}
                          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                        Logout
                         
                          </button>
                         
                         
                        </> :
                        <>
                        <Link className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/login'>login</Link>
                        <Link className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/register'>register</Link>
                        </>
              } 
              </Link>
                          </li>
                          <li>
  
                  <div onClick={handleTohhle} className="relative cursor-pointer">
                  <input type="checkbox" id="toggleB" className="sr-only" />
                  <div className="block bg-purple-300 dark:bg-gray-400 w-14 h-8 rounded-full"></div>
                  <div className="dark:translate-x-full	 dot absolute left-1 top-1 bg-purple-700 dark:bg-black w-6 h-6 rounded-full transition"></div>
                </div>
                </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Header;