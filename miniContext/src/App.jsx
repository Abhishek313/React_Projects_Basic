
import './App.css'
import Login from './components/Login'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1> React with chai and share is important</h1>
      <Login/>
    </UserContextProvider>
  )
}

export default App
