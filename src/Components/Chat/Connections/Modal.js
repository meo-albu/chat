import styled from "styled-components"
import {GrFormClose} from 'react-icons/gr'
import Input from "../../_Reusable/Input"
import Button from "../../_Reusable/Button/Button"
import app, { db } from "../../Auth/firebase"
import { useSelector } from "react-redux"
import ErrorMessage from "../../_Reusable/Errors/ErrorMessage"
import { useState } from "react"

const Modal = ({setModal}) => {
  
  const connectionId = useSelector(state => state.userReducer.user.connections.id)
  const connectedUsers = useSelector(state => state.userReducer.user.connections.connections)
  const userId = app.auth().currentUser.uid
  const [error, setError] = useState('')

  const checkIfConnectionAlreadyExists = (id) => {
    return connectedUsers.some(user => user.userId === id)
  }

  const saveToConnections = (newConnection) => {
    db.collection('connections')
      .doc(connectionId)
      .update({
        userId,
        connections: [
          ...connectedUsers,
          newConnection
        ]
      }).then(() => {
        setModal(false)
      })
  }

  const connectUser = (e) => {
    e.preventDefault()
    
    const {sharedId} = e.target.elements

    sharedId.value === userId
      ? setError("The user Id can't be your user Id.")
      : db.collection('users')
          .where('userId', '==', sharedId.value)
          .get()
          .then(data => {
            data.size > 0
              ?  data.forEach(user => {
                  !checkIfConnectionAlreadyExists(sharedId.value) 
                    ? saveToConnections(user.data())
                    : setError('Connection already exists.')
                })
              : setError('No user found with this user Id.')
          }).catch(err => setError(err))
  }

  return (
      <Container>
        <GrFormClose onClick={() => setModal(false)} />
          Add user:
        <form onSubmit={connectUser}>
          <Input type="text" name="sharedId" label="User ID" />
          <span>* <strong>User ID</strong> can be found under <strong>Setting</strong> {'>'} <strong>Share ID</strong></span>
          <ErrorMessage message={error} />
          <Button>Add user</Button>
        </form>
      </Container>
  )
}

export default Modal

const Container = styled.div`
  position: absolute;
  padding: 30px;
  background: ${({theme}) => theme.colorTheme.background};
  box-shadow: 0 0 10px ${({theme}) => theme.colorTheme.shadow};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border-radius: 5px;

  >form p {
    margin-bottom: 15px;
  }

  span {
    font-size: 0.7em;
    opacity: 0.8;
    margin-bottom: 15px;
    display: block;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
    padding: 20px 20px 30px;
  }

  input {
    margin: 20px 0 10px;
  }

  >svg {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`