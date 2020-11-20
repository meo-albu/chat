import React from 'react'
import styled from 'styled-components'

const ErrorMessage = ({message}) => {
  return (
    <Container>
      {message}
    </Container>
  )
}

export default ErrorMessage

const Container = styled.p`
  color: #F50039;
  font-size: 0.8em;
  margin: 10px 0 0;
`