import './style.scss';

const RegisterComponent = () => {
   return (
      <div className='container'>
         <form className='form'>
            {/* Firstname */}
            <div className='form__form-control'>
               <label htmlFor='firstname'>Firstname</label>
               <input type='text' name='firstname' id='firstname' />
            </div>

            {/* Lastname */}
            <div className='form__form-control'>
               <label htmlFor='lastname'>Lastname</label>
               <input type='text' name='lastname' id='lastname' />
            </div>

            {/* Email */}
            <div className='form__form-control'>
               <label htmlFor='email'>Email</label>
               <input type='email' name='email' id='email' />
            </div>

            {/* Password */}
            <div className='form__form-control'>
               <label htmlFor='email'>Password</label>
               <input type='password' name='password' id='password' />
            </div>

            <button type='submit'>Register</button>
         </form>
      </div>
   );
};

export default RegisterComponent;
