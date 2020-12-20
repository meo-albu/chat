import { useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import Background from "./Components/Background/Background"
import Header from "./Components/Header/Header"
import Loader from "./Components/Loader/Loader"
import Routes from "./Routes/Routes"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUser, checkUserChanges, changeUsersAvailability } from "./Store/actions/userActions"

function App() {
  const colorTheme = useSelector(state => state.themeReducer.theme)
  const darkTheme = useSelector(state => state.themeReducer.darkTheme)
  const loading = useSelector(state => state.loaderReducer.loading)
  const userId = useSelector(state => state.userReducer.user.userId)

  const dispatch = useDispatch()

  useEffect(() => {
    userId && dispatch(checkUserChanges())
    dispatch(getUser())
  }, [dispatch, userId])

  useEffect(() => {
    window.addEventListener("beforeunload", function () {
      changeUsersAvailability(false)
    })
  }, [])


  return (
    <ThemeProvider theme={{colorTheme, darkTheme}}>
      <Container>
        <Background />
        <Main>
        {loading 
          ? <Loader />
          : <Router>
              <Header />
              <Routes />
            </Router>
        }
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