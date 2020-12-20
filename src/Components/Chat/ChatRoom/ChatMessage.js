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
    padding: 5px 15px;
    background: ${({myMessage, theme}) => myMessage ? 'gray' : theme.colorTheme.primary };
    border-radius: 5px;
  }
`