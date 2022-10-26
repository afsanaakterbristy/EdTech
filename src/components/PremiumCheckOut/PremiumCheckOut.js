import React, { useContext } from 'react';

import { FaRegStarHalf, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PremiumCheckOut = () => {
    const checkOut = useLoaderData();
  const { _id, image_url, name, rating, price, author } = checkOut;
  const {user}=useContext(AuthContext)
    return (
        <div>
        <div className='m-40 lg:flex justify-center'>
         
          <div className="flex justify-center items-center pt-8">
  <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-purple-100 text-purple-900 dark:text-black">
    <div className="mb-8 text-center">
      <h1 className="my-3 text-4xl font-bold">For Buying</h1>
      <p className="text-sm text-gray-400">Our Best premium course</p>
    </div>
    <form
      noValidate=""
      action=""
      className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
            
          <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Full Name
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
        </div>   
            <div>
            
              <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Phone Number
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
        </div>   
                <div>
                    
      </div>
            </div>    
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Here"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
            data-temp-mail-org="0"
          />
        </div>
        </div>   
      <div>
        <button 
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-black bg-purple-900 hover:bg-gray-700 hover:text-white text-gray-100"
        >
          Purchase
        </button>
      </div>
    </form>
   
  
    
  </div>
</div>;
{/* form */}
          
          <div className="card lg:card-side bg-base-100 ml-7">
            

        <figure><img className='w-96 p-1' src={image_url} alt="Shoes" /></figure>
        <div className="card-body lg:mt-32">
                            <h2 className="card-title">{ name}</h2>
                        
                        

             <div className="flex justify-start">
              <div className='flex'>
                <h2>{rating}</h2>
                <div className='flex pt-1 ml-2 text-yellow-400'>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
                  <FaRegStarHalf></FaRegStarHalf>
                </div>
             </div>            
              <h2 className='ml-16'>${price}</h2>
            </div>     <h2 className='text-purple-800 font-bold'>Author Details:</h2>
                        <div className='flex'>
                            
                           <img className="w-11 h-11 mt-2 mr-2 rounded " src={author.img} alt="" />
                            <h2 className='font-bold ml-2 mt-3'>{author.name}</h2>                
                        </div>
                          <h2 className=''>{author.published_date}</h2>
         <div className="flex card-actions justify-end">
                      <button className="btn btn-warning"><Link to='/'>CheckOut</Link></button>
      
    </div>
            </div>
</div>
     </div>
        </div>
    );
};

export default PremiumCheckOut;