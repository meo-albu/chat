import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import app from "./Components/Auth/firebase"
import Background from "./Components/Background/Background"
import Loader from "./Components/Loader/Loader"
import Routes from "./Routes/Routes"
import { setLoader, stopLoader } from "./Store/actions/loaderActions"
import { setUser } from "./Store/actions/userActions"

function App() {
  const colorTheme = useSelector(state => state.themeReducer.theme)
  const darkTheme = useSelector(state => state.themeReducer.darkTheme)
  const loading = useSelector(state => state.loaderReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoader())
    app.auth().onAuthStateChanged(user => {
      if(user) {
        const {displayName, email, photoURL} = user
        dispatch(setUser({
          username: displayName ? displayName : null,
          email,
          avatar: photoURL
        }))
        dispatch(stopLoader())
      }
      dispatch(stopLoader())
    })
  }, [dispatch])

  return (
    <ThemeProvider theme={{colorTheme, darkTheme}}>
      <Container>
        <Loader />
        <Background />
        <Main>
          <Router>
            <Routes />
          </Router>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
  position: relative;
  background: ${({theme}) => theme.colorTheme.background};
  color: ${({theme}) => theme.colorTheme.color};
  height: 100%;
`
const Main = styled.div`
  position: relative;
  height: 100%;
`