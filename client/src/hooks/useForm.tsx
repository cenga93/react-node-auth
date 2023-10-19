import React, { useState } from 'react';

const useForm = (validate: any) => {
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

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const errors: any = validate(values);

      setErrors({ ...errors });

      let errorsExist = false;

      for (const key in errors) {
         if (errors[key]) {
            errorsExist = true;
            break;
         }
      }

      if (!errorsExist) {
         console.log('submit');
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
