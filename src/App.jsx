
import { Route, Routes } from 'react-router-dom'

import Root from './MainRoute/Root'
import Home from './Components/Home'
import Login from './UserInfo/LogIn'
import PrivateRoute from './MainRoute/PrivateRoute'

function App() {


  return (
    <Routes>
      <Route path='/' element={<PrivateRoute><Root></Root></PrivateRoute>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
