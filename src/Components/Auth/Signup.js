import styled from "styled-components"
import Button from "../_Reusable/Button/Button"
import Input from "../_Reusable/Input"


export const Signup = () => {
  return (
    <Container>
      <form>
        <h1>Signup</h1>
        <Input type="text" name="username" label="Username" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <Input type="password" name="confirmPassword" label="Confirm Password" />
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