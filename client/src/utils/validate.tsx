export default function validate(values: { firstname: string; lastname: string; email: string; password: string }) {
   const trimAndCheckEmpty = (value: string) => value.trim() === '';
   const isEmailValid = (email: string) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

   const errors = {
      firstname: trimAndCheckEmpty(values.firstname) ? 'Field required' : '',
      lastname: trimAndCheckEmpty(values.lastname) ? 'Field required' : '',
      email: trimAndCheckEmpty(values.email) ? 'Field required' : !isEmailValid(values.email) ? 'Email is invalid' : '',
      password: trimAndCheckEmpty(values.password) ? 'Field required' : values.password.length < 6 ? 'Password needs to be 6 characters or more' : '',
   };

   const valid = Object.values(errors).every((error) => error === '');

   return {
      errors,
      valid,
   };
}
