import { useState } from 'react';
import app from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeUsersAvailability, loginUser } from '../../Store/actions/userActions';
import Input from '../_Reusable/Input';
import ErrorMessage from '../_Reusable/Errors/ErrorMessage';
import Button from '../_Reusable/Button/Button';
import styled from 'styled-components';

export const Login = () => {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const loading = useSelector(state => state.loaderReducer.loading)
  const [error, setError] = useState({
    code: null,
    message: null
  })
  const dispatch = useDispatch()

  const loginWithEmailAndPassword = e => {
    e.preventDefault()
    setError({code: null, message: null})

    const [email, password] = e.target.elements

    app.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      if(user) {
        changeUsersAvailability(true).then(() => {
          const {displayName, email, photoURL} = user
          dispatch(loginUser({
            username: displayName,
            email,
            avatar: photoURL
          }))
        })
      }
    })
    .catch(function(error) {
      setError({
        code: error.code,
        message: error.message
      })
    });
  }

  return (
    (loggedIn && !loading) 
      ? <Redirect to="/" /> 
      : <Container>
          <form onSubmit={loginWithEmailAndPassword}>
          <h1>Login</h1>
            <Input type="text" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <ErrorMessage message={error.message} />
            <Button>Login</Button>
          </form>
        </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10% 10px;

  input {
    margin-top: 30px;
    max-width: 450px;
  }

  @media only screen and (max-width: 700px) {
    padding: 70px 10px 10px;
    justify-content: flex-start;
  }

  button {
    font-weight: 700;
    margin-top: 30px;
  }
`