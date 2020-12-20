import styled from "styled-components"
import Connections from "./Connections/Connections"
// import app, { db } from "../Auth/firebase"
import Menu from "./Menu/Menu"
import Settings from "./Settings/Settings"
import { useEffect } from "react"
import { changeUsersAvailability } from "../../Store/actions/userActions"
import ChatRoom from "./ChatRoom/ChatRoom"

// import {io} from 'socket.io-client'

const Chat = () => {
 
  useEffect(() => {
    changeUsersAvailability(true)
  }, [])
  
  // useEffect(() => {
  //   const socket = io('https://chatsocketserv.herokuapp.com')
  //   socket.on('connect', () => {
  //     console.log('connected')
  //   })

  //   socket.on('message', message => console.log(message))
  // }, [])
    // const user = app.auth().currentUser
    // const tasks = []
    // db.collection('users').where('userId', '==', user.uid)
    // .get().then(data => {
    //   data.forEach(user => {
    //     const newTask = user.data()
    //     newTask.id = user.id
    //     tasks.push(newTask)
    //   })
    // }).then(() => {
    //   console.log(tasks)
    // }).catch(err => console.log(err))

  return (
    <Container>
      <ChatContainer>
        <LeftSide><Menu /><Settings /><Connections /> </LeftSide>
        <ChatRoom />
      </ChatContainer>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  height: 100%;
  padding: 54px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChatContainer = styled.div`
  width: 80%;
  height: 85%;
  background: ${({theme}) => theme.colorTheme.chatBackground};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px ${({theme}) => theme.colorTheme.shadow};
  display: flex;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.darkTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.5)' };
    border-radius: 0;
    box-shadow: none;
  }
`

const LeftSide = styled.div`
  display: flex;
  background: ${({theme}) => theme.colorTheme.background};
  width: 400px;

  @media only screen and (max-width: 1024px) {
    width: 320px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`
