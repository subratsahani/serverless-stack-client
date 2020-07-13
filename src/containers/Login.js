import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";
//import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import { useFormFields } from "../libs/hooksLib";
//import FacebookButton from "../components/FacebookButton";

export default function Login() {
  //const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [fields, handleFieldChange] = useFormFields({
    userName: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return fields.userName.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    setIsLoading(true);
  
    try {
      await Auth.signIn(fields.userName, fields.password);
      userHasAuthenticated(true);
      //history.push("/");
    } catch (e) {
        onError(e);
      setIsLoading(false);
    }
  }

//   handleFbLogin = () => {
//     this.props.userHasAuthenticated(true);
//   };

  return (
    <div className="Login">
        {/* <FacebookButton
            onLogin={this.handleFbLogin}
        />
        <hr /> */}
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="userName" bsSize="large">
          <FormLabel>UserName</FormLabel>
          <FormControl
            autoFocus
            type="userName"
            value={fields.userName}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateForm()}
        >
        Login
        </LoaderButton>
      </form>
    </div>
  );
}