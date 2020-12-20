import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { changeUsersAvailability, logoutUser } from "../../Store/actions/userActions"
import app from "../Auth/firebase"
import Button from "../_Reusable/Button/Button"
import Logo from "./Logo"

const Header = () => {
  const loggedIn = useSelector(state => state.userReducer.loggedIn)
  const dispatch = useDispatch()

  const loguserOut = () => {
    changeUsersAvailability(false).then(() => {
      app.auth().signOut().then(() => dispatch(logoutUser()))
    })
  }

  return (
    <Container>
      <Logo />
      <div>
        {loggedIn ?
            <Button onClick={loguserOut}>Logout</Button>
        :
          <>
            <Link to="/signup">Signup</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/login"><Button>Login</Button></Link>
          </>
        }
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  z-index: 80;
  width: 100%;
  padding: 15px 10%;
  text-align: right;
  background: ${({theme}) => theme.colorTheme.chatBackground};
  box-shadow: 0 0 10px ${({theme}) => theme.colorTheme.shadow};
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
`
