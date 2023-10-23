/**
 * Validates user input values for registration.
 *
 * @param values - An object containing user input values (firstname, lastname, email, password).
 */
const validate = (values: { firstname: string; lastname: string; email: string; password: string }) => {
   /** Helper function to check if a value is empty (only whitespace) */
   const trimAndCheckEmpty = (value: string): boolean => value.trim() === '';

   /** Helper function to validate an email format using a regular expression */
   const isEmailValid = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

   /** Define validation errors for each input field */
   const errors = {
      firstname: trimAndCheckEmpty(values.firstname) ? 'Field required' : '',
      lastname: trimAndCheckEmpty(values.lastname) ? 'Field required' : '',
      email: trimAndCheckEmpty(values.email) ? 'Field required' : !isEmailValid(values.email) ? 'Email is invalid' : '',
      password: trimAndCheckEmpty(values.password) ? 'Field required' : values.password.length < 6 ? 'Password needs to be 6 characters or more' : '',
   };

   /** Determine overall validity by checking if all errors are empty */
   const valid = Object.values(errors).every((error) => error === '');

   return {
      errors,
      valid,
   };
};

export default validate;
