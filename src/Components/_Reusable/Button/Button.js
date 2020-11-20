
import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick}) => {
   return (
      <Container onClick={onClick}>
         {children}
      </Container>
   )
}

export default Button

const Container = styled.button`
   padding: 8px 20px;
   border: 0;
   background: #42BBB3;
   color: white;
   border-radius: 3px;
   text-transform: capitalize;
   cursor: pointer;
   transition: filter 0.3s;
   :hover {
      filter: brightness(80%);
   }
`