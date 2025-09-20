import SignUp from "./SignUp"
import SignIn from "./SignIn"
import NavBar from "./NavBar"
import Home from "./Home"
import { Routes,Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
