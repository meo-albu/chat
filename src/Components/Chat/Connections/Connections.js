import styled from "styled-components"
import { useEffect, useState } from 'react'
import {GrFormAdd} from 'react-icons/gr'
import { useSelector } from 'react-redux'
import Modal from "./Modal"
import Connection from "./Connection"

const Connections = () => {
  const active = useSelector(state => state.menuReducer.active)
  const user = useSelector(state => state.userReducer.user)
  const [modal, setModal] = useState(false)
  const [connections, setConnections] = useState([])

  useEffect(() => {
    user.connections && setConnections(user.connections.connections)
  }, [user])

  return (
    active === 'chats' &&
      <Container>
        {modal && <Modal setModal={setModal} />}
        <header>
          <GrFormAdd onClick={() => setModal(true)} />
        </header>
        {
          connections.map(connection => {
              return <Connection key={connection.userId} name={connection.username} imagePath={connection.image} isOnline={connection.isOnline} />
            })
        }
      </Container>
  )
}

export default Connections

const Container = styled.div`
  /* padding: 15px; */
  flex: auto;

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