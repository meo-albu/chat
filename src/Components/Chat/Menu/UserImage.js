import { useSelector } from "react-redux"
import styled from "styled-components"

const UserImage = () => {
  const avatar = useSelector(state => state.userReducer.user.avatar)
  const username = useSelector(state => state.userReducer.user.username)
  return (
    <Container>
      {
        !!avatar ? 
          <img src={avatar} alt='User avatar' />
          : 
          <Avatar>{!!username && username.substring(0, 1)}</Avatar>
      }
    </Container>  
  )
}

export default UserImage

const Container = styled.div`
  padding: 15px 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
`

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colorTheme.primary};
  text-transform: uppercase;
  margin: 0 auto;
  color: white;
`