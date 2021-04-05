import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center">Create a new user</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          className="form-control"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Last Name"
          className="form-control"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary form-control" onClick={addUser}>
        {" "}
        Create User
      </button>
    </div>
  );
}

export default Form;
