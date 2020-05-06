import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'; 

//state class to store user input
class SignUp extends React.Component {
    constructor() {
        super();

        //what the user types into the fields
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    //async function that gets event and prevents the default submitting
    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        //check if pasword and confirmPassword dont match 
        if(password !== confirmPassword) {
            alert("passwords dont match");
            return; 
        }

        try {
            //return user of the await
            //destructure user
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

           //resetting the state  
           await createUserProfileDocument(user, { displayName });

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           });

        } catch (error) {

            console.error(error);
        }
    };

    handleChange = event => {
        //destructure name & value off the target
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        //destructuring values
        const {displayName, email, password, confirmPassword } = this.state;
        return(
         <div className='sign-up'>  
             <h2 className='title'> I do not have an acoount </h2>
               <span> Sign up with email and password </span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />    
                   
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />    
                    
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />    
                    
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />    
                    <CustomButton type='submit'> SIGN UP </CustomButton>
               </form>
         </div>
       )
    }
}

export default SignUp;