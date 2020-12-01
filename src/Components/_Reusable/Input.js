import React from 'react'
import styled from 'styled-components'

const Input = ({label, type, name}) => {
  return (
    <Container>
      <input type={type} name={name} placeholder={label} />
      <label htmlFor={name}>{label}</label>
    </Container>
  )
}

export default Input

const Container = styled.div`
  position: relative;

  label {
    font-size: 13px;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    transition: 0.3s;
    left: 20px;
    pointer-events: none;
    color: ${({theme}) => theme.colorTheme.color};
  }

  input {
    border: 0;
    background: ${({theme}) => theme.darkTheme ? '#6B6B6B' : '#FFFFFF'};
    color: ${({theme}) => theme.colorTheme.color};
    display: block;
    width: 100%;
    padding: 12px 20px;
    border-radius: 3px;

    @media only screen and (max-width: 700px) {
      min-width: 100%;
    }

    ::placeholder {
      opacity: 0;
    }

    :not(:placeholder-shown),
    :focus,
    :active {
      +label {
        transform: translateY(-25px);
        font-size: 11px;
      }
    }
  }
`
