import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { closeChatRoom, setMessages } from "../../../Store/actions/chatRoomActions"
import Connection from "../Connections/Connection"
import ChatMessage from "./ChatMessage"
import {BiArrowBack} from "react-icons/bi"
import {MdInsertEmoticon} from "react-icons/md"
import {BiSend} from "react-icons/bi"
import { useEffect, useState } from "react"


const ChatRoom = () => {
  const userId = useSelector(state => state.userReducer.user.userId)
  const connection = useSelector(state => state.chatRoomReducer.connection)
  const chatActive = useSelector(state => state.chatRoomReducer.active)
  const conversation = useSelector(state => state.chatRoomReducer.conversation)
  const theme = useSelector(state => state.themeReducer.theme)
  
  const dispatch = useDispatch()

  const [typing, setTyping] = useState(false)
  
  useEffect(() => {
    const scrollIntoView = document.getElementById('scrollIntoView')
    chatActive && scrollIntoView.scrollIntoView(true)
  }, [chatActive])

  useEffect(() => {
    connection && dispatch(setMessages(userId, connection.userId))
  }, [userId, connection])

  const isTyping = e => {
    setTyping(Boolean(e.target.value.length))
  }

  const sendMessage = e => {
    e.preventDefault()

    const {message} = e.target.elements

    console.log(message.value)
    
    message.value = ''
    setTyping(false)
  }

  return (
    chatActive 
    ? <Container>
        <header>
          <CloseChatRoom onClick={() => dispatch(closeChatRoom()) }>
            <BiArrowBack />
          </CloseChatRoom>
          {connection &&
            <Connection
                style={{pointerEvents: 'none'}}
                key={connection.userId} 
                name={connection.username} 
                imagePath={connection.image} 
                isOnline={connection.isOnline} />
              }
        </header>
        <section>
          {conversation &&
            conversation.map(message => {
              return <ChatMessage key={message.date.seconds} myMessage={message.senderId === userId} message={message.message} />
            })
          }
          <div id='scrollIntoView'></div>
        </section>
        <form onSubmit={sendMessage}>
          <MdInsertEmoticon fill={theme.primary} size='20px' />
          <input type='text' name='message' onChange={isTyping} placeholder='Type a message...' />
          <button disabled={!typing}>
            <BiSend fill={typing ? theme.primary : theme.color} size='18px' />
          </button>
        </form>
      </Container>
      : <Placeholder>
        Please select a friend to start chatting
      </Placeholder>
  )
}

export default ChatRoom

const Container = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.colorTheme.chatBackground};
  padding: 20px;

  >header {
    border-bottom: 1px solid ${({theme}) => theme.colorTheme.shadow};
    padding-bottom: 10px;
    margin-bottom: 15px;
    position: relative;
    display: flex;
    align-items: center;
  }

  >section {
    flex: auto;
    overflow-y: scroll;
    
    #scrollIntoView {
      padding: 10px;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  >form {
    border-radius: 50px;
    background: ${({theme}) => theme.darkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    padding: 8px 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    input {
      flex: auto;
      background: none;
      border: 0;
      color: ${({theme}) => theme.colorTheme.color};
    }

    button {
      border: 0;
      background: 0;
      line-height: 0;
    }

    svg {
      cursor: pointer;
    }
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

const CloseChatRoom = styled.div`
  width: 25px;
  height: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
      fill: ${({theme}) => theme.colorTheme.primary}
  }
`