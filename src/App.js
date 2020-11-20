import { BrowserRouter as Router } from "react-router-dom"
import Background from "./Components/Background/Background"
import Routes from "./Routes/Routes"

function App() {
  return (
    <Router>
      <Background />
      <Routes />
    </Router>
  )
}

export default App