import { object, string } from 'yup'

const useSettingSchema = object().shape({
  userName: string()
    .required('User name is required')
    .min(4, 'User name must be at least 4 characters'),
  email: string()
    .email('Invalid email address')
    .required('Email is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])/,
      'Password must contain at least one capital letter and one number',
    ),
});

export default useSettingSchema;
