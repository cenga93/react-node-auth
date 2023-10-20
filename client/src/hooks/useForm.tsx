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

      const { errors, valid } = validate(values);

      setErrors({ ...errors });

      if (!valid) {
         return;
      }

      if (await registerAPI({ ...values })) {
         // Redirect to home page
         history('/');
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

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
