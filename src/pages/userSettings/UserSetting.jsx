/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// Esta seccion he dejado sin implementar la funcionalidad por falta de tiempo

import React from 'react'
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useSettingSchema from './useSettingSchema';
import perfilImage from '../../assets/image/profile.webp'

const UserSetting = () => {
  const initialValues = {
    userName: '',
    email: '',
    image: null,
  };

  const navigate = useNavigate()

  const submitForm = async (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
    navigate('/home')
    toast.success('Changes completed successfully!')
  }
  const handleHome = () => {
    navigate('/home')
    toast.warn('You have not made any changes')
  }

  return (
    <section className='h-screen w-2/3 mx-auto flex  flex-col justify-center sm:w-1/2 text-white lg:w-1/3 self-auto'>
      <div>
        <div className='mb-6 flex items-center text-2xl font-semibold rounded-full mt-20'>
          <img className='mx-auto h-18 w-18 rounded-full' src={perfilImage} alt='profile' />
        </div>
        <p className='text-2xl'>Profile</p>
        <p className='mt-2'>Change your profile details</p>
      </div>
      <div className='mt-10'>
        <Formik
          initialValues={initialValues}
          validationSchema={useSettingSchema}
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
                <label className='mb-2.5 block font-extrabold' htmlFor='userName'>User name</label>
                <input
                  className='custom-input'
                  id='userName'
                  type='text'
                  name='userName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder='User name'
                />
                {errors.userName && touched.userName && errors.userName
                  ? <div className='text-red-800 font-semibold mt-2'>{errors.userName}</div>
                  : null}
              </div>
              {' '}
              <div className='mt-4'>
                <label className='mb-2.5 block font-bold' htmlFor='email'>Email</label>
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
                  ? <div className='text-red-800 font-bold mt-2'>{errors.email}</div>
                  : null}
              </div>
              <div className='mt-4'>
                <label className='mb-2.5 block font-bold' htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
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
              <div className='my-10 flex gap-10'>
                <button
                  className='btn-primary'
                  type='button'
                  onClick={handleHome}
                >
                  Home
                </button>
                <button
                  className='btn-primary'
                  type='submit'
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default UserSetting
