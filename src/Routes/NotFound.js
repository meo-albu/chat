import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Container>
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you are looking for might have been removed or is temporarily unavaliable! 
        <br />Please go back to <Link to='/'>Homepage</Link></p>  
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  padding: 0 10%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media only screen and (max-width: 700px) {
    padding: 10px;
    justify-content: flex-start;
  }

  >h1 {
    font-size: 5em;
    margin-bottom: 0.5em;
  }

  >h2 {
    font-size: 2em;
    margin-bottom: 0.5em
  }

  >p {
    font-weight: 300;

    a {
      font-weight: 700;
    }
  }
`
