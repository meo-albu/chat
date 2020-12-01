import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setActive } from "../../../Store/actions/menuActions"

const MenuButton = ({children, name}) => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.menuReducer.active)
  
  return (
    <Container onClick={() => dispatch(setActive(name))} active={active} name={name}>
      {children}
    </Container>
  )
}

export default MenuButton

const Container = styled.div`
  padding: 15px 20px;
  background: ${({theme, active, name}) => active === name ? theme.colorTheme.background : theme.colorTheme.chatBackground};
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    padding: 10px 15px;
  }

  svg {
    display: block;
  }
`