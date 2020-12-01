import { useSelector } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoader, stopLoader } from '../../../Store/actions/loaderActions'
// import { setUser } from '../../../Store/actions/userActions'
// import app from '../../Auth/firebase'
import {FaUser, FaShareAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import styled from 'styled-components'
import { useState } from 'react'

const UserDetails = () => {
  const user = useSelector(state => state.userReducer.user)
  const [copied, setCopied] = useState(false)
  // const dispatch = useDispatch()

  // const updateUserData = e => {
  //   e.preventDefault()
  //   const [name, mail] = e.target.elements

  //   const userDetails = app.auth().currentUser
  //   dispatch(setLoader())

  //   userDetails.updateProfile({
  //       displayName: name.value
  //     }).then(() => {
  //       userDetails.updateEmail(mail.value)
  //       .then(() =>{
  //         dispatch(setUser({
  //           username: userDetails.displayName,
  //           email: userDetails.email,
  //           avatar: userDetails.photoURL
  //         }))
  //         // setReadonly(true)
  //         dispatch(stopLoader())
  //       }).catch(error => {
  //         dispatch(stopLoader())
  //         console.log(error)
  //       })
  //     }).catch(error => {
  //       dispatch(stopLoader())
  //       console.log(error)
  //     })
  // }

  const copyShareId = () => {
    navigator.clipboard.writeText(user.userId)

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500);
  }

  return (
    <Container>
      <span><FaUser /> {user.username}</span>
      <span><MdEmail /> {user.email}</span>
      <span><FaShareAlt /> Share ID: <ShareID onClick={copyShareId}>{copied ? 'Copied to clipboard!' : user.userId}</ShareID>
        <br /> <i>* Share this Id with your friend to start chatting</i>
      </span>
    </Container>
  )
}

export default UserDetails

const Container = styled.div`
  font-size: 0.8em;
  margin: 20px 0;

  span {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;

    svg {
      margin-right: 10px;
    }

    i {
      font-size: 0.8em;
      opacity: 0.8;
      margin: 5px 10px 0;
    }
  }
`

const ShareID = styled.span`
  padding: 3px 10px;
  background: ${({theme}) => theme.darkTheme ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  display: inline-block;
  margin: 0 0 0 10px !important;
  cursor: pointer;
  font-size: 0.7em;
`