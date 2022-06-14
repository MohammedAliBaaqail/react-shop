import React, {useState} from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export default function SignIn() {
    const [auth , setAuthData] = useState(
        {
            email:'',
            password:''
        }
    )

  
   function handleSubmit ( event)  {
        event.preventDefault();
    
        setAuthData({ email: '', password: '' });
      };
    
      function handleChange(event) {
        setAuthData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    
    
      
        return (
          <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={auth.email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={auth.password}
                handleChange={handleChange}
                label='password'
                required
              />
              <div className='buttons'>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  Google 
                </CustomButton>
              </div>
            </form>
          </div>
        );
      }
   
    
