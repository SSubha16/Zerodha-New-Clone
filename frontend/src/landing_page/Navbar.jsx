import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='conatiner'>
          <nav style={{height:'75px', backgroundColor:'white',}} className="navbar navbar-expand-lg border-bottom ">
                <div className="container">
                  <div className="navbar-brand" >
                    <Link to='/'>
                    <img className='icons' style={{width:'30%'}} src='media/images/logo.svg' />
                    </Link>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                       <Link className='nav-link' to='/signup'>SignUp</Link>
                      </li>
                      <li className="nav-item">
                      <Link className='nav-link' to='/about'>About</Link>
                      </li>
                      <li className="nav-item">
                      <Link className='nav-link' to='/products'>Products</Link>
                      </li>
                      <li className="nav-item">
                      <Link className='nav-link' to='/pricing'>Pricing</Link>
                      </li>
                      <li className="nav-item">
                      <Link className='nav-link' to='/support'>Support</Link>
                      </li>
                      <li className="nav-item">
                      <i style={{fontSize:'20px',color:'black', fontWeight:'600'}} className="fa-solid fa-bars nav-link"></i>
                      </li>
                    </ul>
                  </div>
                </div>
          </nav>
        </div>
  )
}

export default Navbar