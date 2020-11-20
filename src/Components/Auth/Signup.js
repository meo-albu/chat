import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
import { setUser } from "../../Store/actions/userActions"
import Button from "../_Reusable/Button/Button"
import ErrorMessage from "../_Reusable/Errors/ErrorMessage"
import Input from "../_Reusable/Input"
import app from './firebase'


export const Signup = () => {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const dispatch = useDispatch()

  const [error, setError] = useState({
    code: null,
    message: null
  })

  const signupWithEmailAndPassword = e => {
    setError({code: null, message: null})
    e.preventDefault()

    const [username, email, password, confirmPassword] = e.target.elements

    if(password.value === confirmPassword.value) {
      app.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(data => {
        data.user.updateProfile({
          displayName: username.value,
        }).then(() => {
          if(data.user) {
            const {displayName, email, photoURL} = data.user

            dispatch(setUser({
              username: displayName,
              email,
              avatar: photoURL
            }))
          }
        })
      })
      .catch(function(error) {
        setError({
          code: error.code,
          message: error.message
        })
      });
    } else {
      setError({
        code: 'auth/passwords-dont-match',
        message: "Passwords don't match"
      })
    }
  }

  return (
    <Container>
      {loggedIn && <Redirect to="/" />}
      <form onSubmit={signupWithEmailAndPassword}>
        <h1>Signup</h1>
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Input type="password" name="confirmPassword" label="Confirm Password" />
        <ErrorMessage message={error.message} />
        <Button>Signup</Button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15%;

  @media only screen and (max-width: 700px) {
    padding: 10px 10px;
    justify-content: flex-start;
  }

  button {
    font-weight: 700;
    margin-top: 30px;
  }
`