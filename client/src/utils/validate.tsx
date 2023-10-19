export default function validate(values: { firstname: string; lastname: string; email: string; password: string }) {
   let errors = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
   };

   const trimAndCheckEmpty = (value: string) => value.trim() === '';
   const isEmailValid = (email: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

   if (trimAndCheckEmpty(values.firstname)) {
      errors.firstname = 'Field required';
   }

   if (trimAndCheckEmpty(values.lastname)) {
      errors.lastname = 'Field required';
   }

   if (trimAndCheckEmpty(values.email)) {
      errors.email = 'Field required';
   } else if (!isEmailValid(values.email)) {
      errors.email = 'Email is invalid';
   }

   if (trimAndCheckEmpty(values.password)) {
      errors.password = 'Field required';
   } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
   }

   return errors;
}
