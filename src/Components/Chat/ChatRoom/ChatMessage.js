import styled from "styled-components"

const ChatMessage = (props) => {
  return (
    <Container myMessage={props.myMessage}>
      <span>{props.message}</span>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
  display: flex;
  justify-content: ${({myMessage}) => myMessage ? 'flex-end' : 'flex-start' };
  margin-bottom: 10px;
  font-size: 0.8em;
  color: white;

  span {
    padding: 8px 25px;
    background: ${({myMessage, theme}) => myMessage ? theme.darkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' : theme.colorTheme.primary };
    color: ${({myMessage, theme}) => myMessage ? theme.darkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)' : 'white' };
    border-radius: 5px;
    border-radius: ${({myMessage}) => myMessage ? '25px 25px 0 25px' : '25px 25px 25px 0' };
  }
`