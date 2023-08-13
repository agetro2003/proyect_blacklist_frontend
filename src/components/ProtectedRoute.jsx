import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const userlogin = window.localStorage.getItem('session');
  
    useEffect(() => {
      if (!userlogin || userlogin === '') {
        navigate('/LogOut');
      } else {
        const loginTime = new Date(userlogin.slice(1, userlogin.length - 1));
        const now = new Date();
        const date = new Date(loginTime);
        date.setMinutes(loginTime.getMinutes() + 15);
  console.log(date + " " + now)
        if (date < now) {
          navigate('/LogOut');
        }
      }
    }, [navigate, userlogin]);
  
    return <Outlet />;
  };
  

export default ProtectedRoute