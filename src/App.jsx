import { useState } from 'react'
import './App.css'
import Form from './component/Form'
import NavBar from './component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './component/LogIn'
import DataApi from './component/DataApi'
import { counterContext } from './context/context'
import Home from './component/Home'
import Footer from './component/Footer'
import Contact from './component/Contact'

function App() {
  const [isLogin, setisLogin] = useState(false)
  const [ userName , setUserName ] = useState()
  const [ weather , setWeather ] = useState()

 

  return (
    <>
    <counterContext.Provider value={{isLogin , setisLogin,userName , setUserName , weather , setWeather}}>

      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Form />} />
          <Route path='/login' element={<LogIn logIn={isLogin} setLogIn={setisLogin} />} />

          <Route path='/data' element={isLogin === true ? <DataApi/> : <LogIn/>} />

          <Route path='/data' element={<DataApi/>} />

          <Route path='/contact' element={<Contact />} />


        </Routes>

      <Footer/>
      </BrowserRouter>

      </counterContext.Provider>

      {/* <DataApi/> */}



    </>
  )
}

export default App
