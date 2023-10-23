import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const useForm = (validate: any) => {
   const { registerAPI } = useContext(UserContext);
   const history = useNavigate();

   const [values, setValues] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
   });

   const [errors, setErrors] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
   });

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      /** Validate the form values and receive validation results */
      const { errors, valid } = validate(values);

      /** Set errors for each input */
      setErrors({ ...errors });

      /** If there are validation errors, exit early */
      if (!valid) {
         return;
      }

      /**
       * Attempt to register the user using an API call.
       * If the registration is successful, redirect to the home page
       */
      if (await registerAPI({ ...values })) {
         history('/');
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      /** Update the form values in a way that maintains the previous values */
      setValues((prevValues) => {
         return {
            ...prevValues,
            [name]: value,
         };
      });
   };

   return {
      handleSubmit,
      handleChange,
      values,
      errors,
   };
};

export default useForm;
