import React, { useContext} from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link'
import { UserContext } from "../../context";


type Props = {};

const Nav = (props: Props) => {
  const router = useRouter()
  const [state, setState] = useContext(UserContext)

  const logout = () => {
    setState({ user: {}, token: ''})
    localStorage.removeItem('auth')
    router.push('/')
  }
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href='/'><a className="nav-link active" aria-current="page">Home</a></Link>
        </li>
        {state && state.token ? (
             <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               {state.user.email}
             </a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
               <li><Link href='/account/dashboard'><a className="dropdown-item">Account</a></Link></li>
               <li><a className="dropdown-item" href="#">Another action</a></li>
              
               <li onClick={logout}><a className="dropdown-item">Logout</a></li>
             </ul>
           </li>
        ) : (
          <>

          <li className="nav-item">
          <Link href='/account/register'><a className="nav-link active" aria-current="page">Sign Up</a></Link>
        </li>
           <li className="nav-item">
           <Link href='/account/login'><a className="nav-link active" aria-current="page">Login</a></Link>
         </li>
         </>
        )}
    
     
      
      </ul>
     
    </div>
  </div>
</nav>
  )
};

export default Nav



