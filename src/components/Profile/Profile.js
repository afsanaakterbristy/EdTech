import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl w-96 m-40 p-10 mb-96">

                { user?.photoURL?
                
                    <figure><img className='w-32 rounded' src={user?.photoURL} alt="Movie" /></figure>:<p className='mt-14 text-3xl'><FaUser></FaUser></p>
            }


            <div className="card-body">
                    <h2 className="card-title">Name:{user?.displayName}</h2>
                    <h2>Id:{ user?.metadata?.createdAt}</h2>
                   
                
            </div>
            </div>
        </div>
    );
};

export default Profile;