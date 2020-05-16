import React from "react";
import "./Sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CButton from "../customButton/CustomButton.component";
import { auth, signInWithFacebook } from "../../firebase/firebase.utils";




class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
  
    };
  }


  handelSubmit = async (event) => {
    event.preventDefault();

      const { email , password } =this.state;

      try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email: '' , password: '' });
      }catch(error){
        console.log(error);
        
      }

  };



  handelChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };


  render() {
    
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handelChange={this.handelChange}
            label="Email"
            
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handelChange={this.handelChange}
            label="Password"
            
          />
<div className='buttons'>
<CButton type="submit">Sign In</CButton>
<CButton type='button' handleclick={signInWithFacebook}  isGoogleSignIn>
Sign in with Google </CButton>
</div>
      
        </form>
      </div>
    );
  }
}

export default SignIn;
