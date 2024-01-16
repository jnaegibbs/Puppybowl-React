
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import './App.css'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'



function App() {

  return (
    <>
    <div className='App'>

    <NavBar/>
    <Routes> 
      <Route path='/' element={<AllPlayers/>}/>
       <Route path='/NewPlayerForm' element={<NewPlayerForm/>}/>
       <Route path='/players/:id' element={<SinglePlayer/>}/>
     </Routes>

    </div>

    </>
  )
}

export default App
