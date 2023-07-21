import React, { useEffect, useState } from "react";
import { FormContainer,Formu, FormSubmit, FormTitle, FormGroup, FormLabel, FormInput, FormInvalidInput } from "./StylesForm";
import ValidateUser from "./validation";
import { useNavigate } from "react-router-dom";





export default function Form({login}) {


  const navigate = useNavigate();

  const userKey = localStorage.getItem('userKey')
  

  const handleSubmit = (event)=>{
    event.preventDefault();
    const validation = Object.keys(ValidateUser(userData));

    if(validation.length === 0){
      login(userData);
    }
    if(validation.length > 0){
      alert('Debe llenar todos los campos')
    }

  }


  const isLogin = ()=>{
    const userKeyAccess = localStorage.getItem('userKey');
    if(userKeyAccess){
      navigate('/home');
    }
  }

  useEffect(()=>{
    isLogin();
  }, 
  [userKey])


  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});


  const handleChange = (event)=>{
    setUserData({
      ...userData, 
      [event.target.name]:event.target.value
    })
    setErrors(ValidateUser({
      ...userData,
      [event.target.name]:event.target.value
    }))
  };


  return (
    <FormContainer>
      <FormTitle>Log In</FormTitle>
      <Formu onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="email">Email: </FormLabel>
          <FormInput 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          value={userData.email}
          onChange={handleChange}
          />
          {
            errors.email && (
              <FormInvalidInput>
                {errors.email}
              </FormInvalidInput>
            )
          }

        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password: </FormLabel>
          <FormInput 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          value={userData.password}
          onChange={handleChange}
          />
          {
            errors.password && (
              <FormInvalidInput>
                {errors.password}
              </FormInvalidInput>
            )
          }
        </FormGroup>
        <FormSubmit type="submit">Submit</FormSubmit>
      </Formu>
    </FormContainer>
  );
}
