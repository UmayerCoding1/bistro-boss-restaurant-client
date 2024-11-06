import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) {
        return <div className='h-screen flex items-center justify-center'>
             <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{form: location}} replace/>
       
};

export default PrivetRoutes;