import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googlSignIn,loading}= useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
  const location = useLocation();
  const navigateForm = location.state?.form?.pathname || '/';
    const handleGoogleSignIn = ()=> {
       googlSignIn()
       .then(result => {
         const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName
         }

         axiosPublic.post('/users',userInfo)
         .then(res => {
            console.log(res.data);
           
           navigate(navigateForm)
         })
         .catch(error => console.log(error)
         )
       })
       .catch(error => {
        console.log(error);
       })
    }
    return (
        <div>
            
             <button onClick={handleGoogleSignIn} className="w-10 h-10 border ml-3  border-black rounded-full flex justify-center items-center">
              <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;