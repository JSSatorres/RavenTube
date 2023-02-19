import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { setAuthorization } from '../store/slices/authSlice';
import { auth } from '../config/firebase';

const Private = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthorization(true))
        navigate('/home')
      } else {
        dispatch(setAuthorization(false))
        navigate('/')
      }
    });
    return unsubscribe;
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default Private;
