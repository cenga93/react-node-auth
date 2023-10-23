import './style.scss';
import React from 'react';
import FormInput from '../FormInput';
import useForm from '../../hooks/useForm';
import validate from '../../utils/validate';

const RegisterComponent: React.FC = () => {
   const { handleSubmit, handleChange, errors, values } = useForm(validate);

   return (
      <div className='form-container'>
         <form className='form' onSubmit={handleSubmit}>
            <FormInput label='Firstname' name='firstname' type='text' value={values.firstname} onChange={handleChange} error={errors.firstname} />
            <FormInput label='Lastname' name='lastname' type='text' value={values.lastname} onChange={handleChange} error={errors.lastname} />
            <FormInput label='Email' name='email' type='email' value={values.email} onChange={handleChange} error={errors.email} />
            <FormInput label='Password' name='password' value={values.password} type='password' onChange={handleChange} error={errors.password} />
            <button type='submit'>Register</button>
         </form>
      </div>
   );
};

export default RegisterComponent;
