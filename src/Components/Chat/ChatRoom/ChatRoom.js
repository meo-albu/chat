import { useSelector } from "react-redux"
import styled from "styled-components"
import Connection from "../Connections/Connection"
import ChatMessage from "./ChatMessage"

const ChatRoom = () => {
  const connection = useSelector(state => state.chatRoomReducer.connection)
  const chatActive = useSelector(state => state.chatRoomReducer.active)

  return (
    chatActive 
    ? <Container>
        <header>
          {connection &&
            <Connection
                key={connection.userId} 
                name={connection.username} 
                imagePath={connection.image} 
                isOnline={connection.isOnline} />
              }
        </header>
        <ChatMessage myMessage={true} message='hei, ce faci? flkdsfds dfkgjf lkgdfkg fdghkdfghkfdh gkdfhgkdf kgdfkg dfkghfkdh gkdfhgkfd hgdfk ghdfkghfdk' />
        <ChatMessage myMessage={false} message='bine, tu?' />
      </Container>
      : <Placeholder>
        Please select a friend to start chatting
      </Placeholder>
  )
}

export default ChatRoom

const Container = styled.div`
  flex: 2.5;
  background: ${({theme}) => theme.colorTheme.chatBackground};
  padding: 20px;

  header {
    border-bottom: 1px solid ${({theme}) => theme.colorTheme.shadow};
    padding-bottom: 10px;
    pointer-events: none;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 700px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 101;
    top: 0;
  }
`

const Placeholder = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.8;
  font-size: 0.8em;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`