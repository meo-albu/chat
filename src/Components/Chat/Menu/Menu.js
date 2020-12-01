import styled from "styled-components"
import MenuButton from "./MenuButton"
import {chats, settings} from './icons'
import UserImage from "./UserImage"

const Menu = () => {

  return (
    <Container>
      <UserImage />
      <MenuButton name="chats">
        {chats}
      </MenuButton>
      <MenuButton name="settings">
        {settings}
      </MenuButton>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  height: 100%;
  background: ${({theme}) => theme.colorTheme.chatBackground};
  float: left;
`

