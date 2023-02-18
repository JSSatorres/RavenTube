/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react'
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
// import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logoRavenLoop from '../../assets/image/logoRavenLoop.png'
import { register } from '../../config/firebase';
import registerSchema from './registerSchema';
// import {registerMutation } from '../../store/api/authApi';
// import { useGetTodosQuery } from '../../store/api/todosApi';
// import { auth, login } from '../../config/firebase'
// import { setAuthorization } from '../../store/slices/authSlice';

const Register = () => {
  // const dispatch = useDispatch()
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const navigate = useNavigate()

  const submitForm = async ({ email, password }) => {
    try {
      await register(email, password);
      navigate('/home')
    } catch (error) {
      throw new Error()
    }
  }
  // const { data:todo } = useGetTodosQuery()
  // const { data, error, isLoading } = useLoginMutation();

  return (
    <section className='bg-gradient-to-r from-black via-gray-800 to-black h-screen'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 '>
        <div className='mb-6 flex items-center text-2xl font-semibold'>
          <img className='mx-auto h-20 w-auto' src={logoRavenLoop} alt='logo-RavenLoop' />
        </div>
        <div className='w-full rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0 bg-gray-900  border border-rblue'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight  md:text-2xl'>Register an account</h1>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={registerSchema}
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
                  <label htmlFor='email' className='my-2 block text-sm font-medium'>Your email</label>
                  <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder='name@company.com'
                    className='custom-input'
                  />
                  {errors.email && touched.email && errors.email
                    ? <div className='text-red-800 font-semibold'>{errors.email}</div>
                    : null}
                  <label htmlFor='password' className='text-1 my-2 block text-sm font-medium'>Password</label>
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
                    ? <div className='text-red-800 font-semibold'>{errors.password}</div>
                    : null}
                  <div className='w-full flex justify-center'>
                    <button
                      className='btn-primary my-4'
                      type='submit'
                    >
                      Register
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
