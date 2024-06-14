import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Task from './Components/Task/Task'
import Taskmanager from './Components/Taskmanager/Taskmanager'
import Week from './Components/Task/Week'
import Today from './Components/Task/Today'
import Pratical from './Components/Task/Pratical'
import PasswordManager from './Components/PasswordManager/PasswordManager'
import CreatePassword from './Components/PasswordManager/CreatePassword'
import UpdatePassword from './Components/PasswordManager/UpdatePassword'

function App() {


  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element= {<Main/>}></Route>
  <Route path='/task' element= {<Task/>}></Route>
  <Route path='/taskmanager' element= {<Taskmanager/>}></Route>
  <Route path='/today' element= {<Today/>}></Route>
  <Route path='/pratical' element= {<Pratical/>}></Route>
  <Route path='/passwordmanager' element= {<PasswordManager/>}></Route>
  <Route path='/createPassword' element= {<CreatePassword/>}></Route>
  <Route path='/updatePassword/:id' element= {<UpdatePassword/>}></Route>
 
  <Route path='/week' element= {<Week/>}></Route>
  
  {/* <Route path='/add1' element= {<Add1/>}></Route> */}
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
