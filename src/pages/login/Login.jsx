/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../config/firebase'
import loginSchema from './loginSchema'
import logoRavenLoop from '../../assets/image/logoRavenLoop.png'
import { setCeoAuthorization } from '../../store/slices/authSlice'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const CEO_LOGIN = import.meta.env.VITE_CEO_LOGIN;

  const submitForm = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate('/home')
      if (email === CEO_LOGIN) {
        toast.warn('You are logged as Admin!')
        dispatch(setCeoAuthorization(true))
        return
      }
      toast.success('Action completed successfully!')
    } catch (error) {
      toast.error('Login failled!')
    }
  }
  return (
    <section className='h-screen w-2/3 mx-auto flex  flex-col justify-center sm:w-1/2 text-white lg:w-1/3 self-auto'>
      <div>
        <div className='mb-6 flex items-center text-2xl font-semibold'>
          <img className='mx-auto h-20 w-auto' src={logoRavenLoop} alt='logo-RavenLoop' />
        </div>
        <p className='text-2xl'>Login</p>
        <p className='mt-2'>please login to continue</p>
      </div>
      <div className='mt-10'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            submitForm(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label className='mb-2.5 block font-extrabold' htmlFor='email'>Email</label>
                <input
                  className='custom-input'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder='name@company.com'
                />
                {errors.email && touched.email && errors.email
                  ? <div className='text-red-800 font-semibold mt-2'>{errors.email}</div>
                  : null}
              </div>
              <div className='mt-4'>
                <label className='mb-2.5 block font-bold' htmlFor='email'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder='••••••••'
                  className='custom-input'
                />
                {errors.password && touched.password && errors.password
                  ? <div className='text-red-800 font-bold mt-2'>{errors.password}</div>
                  : null}
              </div>
              <div className='mt-4 flex w-full flex-row justify-between'>
                <div>
                  <label htmlFor='remember' className='text-sm'>Do you have an account?</label>
                </div>
                <div>
                  <Link to='/register' className='text-rblue hover:text-rbluedark'> Register </Link>
                </div>
              </div>
              <div className='my-10'>
                <button
                  className='btn-primary'
                  type='submit'
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>

  )
}

export default Login
