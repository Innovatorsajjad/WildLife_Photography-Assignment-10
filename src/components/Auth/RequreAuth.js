import auth from '../../firebase.init';
import {useAuthState} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from 'react-router-dom';

const RequreAuth = ({children}) => {
    const [user,loading ]=useAuthState(auth);
    const location = useLocation();
    if (loading){
        return <p>loading ...</p>
    }
    if (user){

        return children;
    }
    return <Navigate to="/login" state={ { from:location}} replace />;

};

export default RequreAuth;