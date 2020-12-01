import { useSelector } from "react-redux"
import styled from "styled-components"
import { DarkTheme } from "./DarkTheme"
import UserDetails from "./UserDetails"

const Settings = () => {
  const active = useSelector(state => state.menuReducer.active)

  return (
    active === 'settings' &&
      <Container>
        <h3>Settings</h3>
        <UserDetails />
        <DarkTheme />
      </Container>
  )
}

export default Settings

const Container = styled.div`
  padding: 15px;
  flex: auto;
`