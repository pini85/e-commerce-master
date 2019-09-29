import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
  signInWithGithub
} from "../../firebase/firebase.utils";
import Facebook from "../facebook/facebook.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  errorMessage = error => {
    if (error) {
      if (error.code === "auth/wrong-password") {
        this.setState({
          error: "Password is not correct. Please try again."
        });
      } else if (error.code === "auth/user-not-found") {
        this.setState({
          error:
            "Email is not registered. Please try again with a different email or sign up for a new account."
        });
      } else if (error.code === "auth/invalid-email") {
        this.setState({
          error: "Email is invalid. Please try again."
        });
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
      }
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    document.querySelector(".form").reset();
    this.setState({ email: "", password: "" });
    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.errorMessage(error);
    }

    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h3 className="heading-teritary">I already have an account</h3>
        <p>Sign in with your email and password</p>
        <div className="error-message">{this.state.error}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Enter your email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Enter your password"
            required
          />

          <div className="button-wrapper">
            <CustomButton type="submit">Sign in</CustomButton>
            <div className="divider">Or</div>
            <div className="social-btn-wrapper">
              <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                Sign in with google
              </CustomButton>
              <CustomButton isFaceBookSignIn onClick={signInWithFacebook}>
                Sign in with Facebook
              </CustomButton>
              <CustomButton isTwitterSignIn onClick={signInWithTwitter}>
                Sign in with twitter
              </CustomButton>
              <CustomButton isGithubSignIn onClick={signInWithGithub}>
                Sign in with github
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
