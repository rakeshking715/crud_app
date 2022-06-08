import React from 'react'
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Nav from './Components/Nav'
import Read from './Components/Read'
import Users from './Components/Users'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Update from './Components/Update'


const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path='/signup' component={SignUp} /> 
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/read' component={Read} />
      <Route exact path='/update' component={Update} />
      <Route exact path='/add' component={AddUser} />
      </Routes>
    </Router>

  )
}

export default App
