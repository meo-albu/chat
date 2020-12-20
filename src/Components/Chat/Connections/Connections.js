import styled from "styled-components"
import { useEffect, useState } from 'react'
import {GrFormAdd} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import Modal from "./Modal"
import Connection from "./Connection"
import { setChatRoom, setConnection } from "../../../Store/actions/chatRoomActions"

const Connections = () => {
  const active = useSelector(state => state.menuReducer.active)
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [connections, setConnections] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    user.connections && user.connections.connections && setConnections(user.connections.connections)
  }, [user])

  const searchUser = e => {
    setSearchValue(e.target.value)

    setConnections(user.connections.connections.filter(conn => {
      return conn.username.substring(0, e.target.value.length) === e.target.value
    }))
  }

  return (
    active === 'chats' &&
      <Container>
        {modal && <Modal setModal={setModal} />}
        <header>
          <input type='text' name='search' placeholder='Search user' value={searchValue} onChange={searchUser} />
          <GrFormAdd onClick={() => setModal(true)} />
        </header>
        {
          connections.length > 0 && connections.map(connection => {
              return <Connection 
                        onClick={() => {
                          setConnections(user.connections.connections)
                          dispatch(setChatRoom())
                          dispatch(setConnection(connection.userId))
                        }} 
                        key={connection.userId} 
                        name={connection.username} 
                        imagePath={connection.image} 
                        isOnline={connection.isOnline} />
            })
        }
      </Container>
  )
}

export default Connections

const Container = styled.div`
  flex: auto;

  header {
    padding: 30px 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      background: ${({theme}) => theme.colorTheme.shadow};
      border: 0;
      padding: 7px 15px;
      border-radius: 20px;
      flex: 1;
      margin-right: 15px;
      color: white;
    }
  }

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-left: auto;
    display: block;

    path {
      stroke: ${({theme}) => theme.colorTheme.primary}
    }
  }
`