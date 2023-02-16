import React from 'react'
import { Formik } from 'formik';
import logoRavenLoop from '../../assets/image/logoRavenLoop.png'
import loginSchema from './loginSchema';

// validate an email password with regex in react

const login = () => (
  <section>
    <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 '>
      <div className='mb-6 flex items-center text-2xl font-semibold'>
        <img className='mx-auto h-20 w-auto' src={logoRavenLoop} alt='logo-RavenLoop' />
      </div>
      <div className='w-full rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0 bg-gray-900  border border-rblue'>
        <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
          <h1 className='text-xl font-bold leading-tight tracking-tight  md:text-2xl'>Sign in to your account</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log(values);
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
                    Sign in
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

export default login
