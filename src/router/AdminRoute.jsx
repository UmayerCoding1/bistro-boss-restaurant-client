import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}= useAuth();
   const [isAdmin,isAdminLoading]= useAdmin();

   const location = useLocation();
    if(loading || isAdminLoading) {
        return <div className='h-screen flex items-center justify-center'>
             <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/'} state={{form: location}} replace/>
};

export default AdminRoute;