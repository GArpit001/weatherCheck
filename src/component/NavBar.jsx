import React from 'react'
import "./nav.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const NavBar = (props) => {
  // let history = useContext(counterContext)



  const backLogs = () => {
    let logOut = confirm("Do you really want to logout?")
    setTimeout(() => {

      logins.setisLogin(false)
      let btn = document.querySelector(".logOut")

      logOut === true ? btn.href = "/login" : logins.setisLogin(true)

      // console.log(btn)

    }, 2000)

  }



  const logins = useContext(counterContext)
  const users = useContext(counterContext)

  return (
    <nav>
      <ul>
        <div className="left">
          <li><Link to="/"> <i className="fa-solid fa-house"></i> Home</Link></li>
          <li> <i className="fa-solid fa-server"></i> Service</li>
          <li><Link to="/contact"> <i className="fa-solid fa-address-book"></i> Contact</Link></li>
        </div>

        {

          logins.isLogin === true ? <div className="right">
            <li>{users.userName.name}</li>
            <li><Link to="/data" onClick={() => { backLogs() }} className='upperBtn logOut' > <i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link></li>

          </div> : <div className="right">
            <li><Link to="/create" className='upperBtn'> <i className="fa-solid fa-user"></i> Sign Up</Link></li>
            <li><Link to="/login" className='upperBtn'> <i className="fa fa-sign-in" aria-hidden="true"></i>Log In</Link></li>
          </div>

        }


      </ul>
    </nav>
  )
}

export default NavBar
