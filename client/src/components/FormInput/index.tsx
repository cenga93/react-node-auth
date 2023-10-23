import React, { ChangeEvent } from 'react';

interface Props {
   label: string;
   name: string;
   type: 'text' | 'password' | 'email';
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   error: string;
   value: string;
}

const FormInput: React.FC<Props> = ({ label, name, type, onChange, error, value }) => {
   return (
      <div className='form__form-control'>
         <label htmlFor={name}>{label}</label>
         <input type={type} name={name} id={name} onChange={onChange} value={value} autoComplete='off' />
         <span className='form__error'> {error}</span>
      </div>
   );
};

export default FormInput;
