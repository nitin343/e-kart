import React from "react";
import "./Sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CButton from "../customButton/CustomButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();

    this.setState({ eamil: "", password: "" });
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
<CButton onClick={signInWithGoogle} isGoogleSignIn>
Google SignIn </CButton>
</div>
      
        </form>
      </div>
    );
  }
}

export default SignIn;
