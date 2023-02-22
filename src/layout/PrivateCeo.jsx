import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { setAuthorization } from '../store/slices/authSlice';
import { auth } from '../config/firebase';

const PrivateCeo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isCeoAuthenticated = useSelector((state) => state.auth.isCeoAuthenticated)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(setAuthorization(true))
  //       navigate('/video')
  //     } else {
  //       dispatch(setAuthorization(false))
  //       navigate('/')
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return isCeoAuthenticated ? <Outlet /> : <Navigate to='/home' />;
};

export default PrivateCeo;
