import React from 'react';
import './navbar.css';
import cart from '../assets/cart.png';
import login from '../assets/user.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../assets/PAP Logo.png';
import { Link } from 'react-router-dom';
import { ShopContext, } from '../context/shop-context';
import { useContext  } from 'react';

export function NavbarDiscount() {
  const { cartItems } = useContext(ShopContext);

  const cartItemCount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <div className="navigationHOLDEr">
      <div className="discount">
        <div className="container navbar text-light align-items-center d-flex justify-between text-align-center">
          <div className=""></div>
          <p>Use code FIRST50 for a 50% discount on your first order!</p>
          <div className="cartlogin d-flex">
            <div className=''>
              <Link to='/cart'> <img src={cart} alt="/" />
               {cartItemCount >  0 && (
              <span className="cartitemcounter">({cartItemCount})</span>)} </Link>
             </div>
            <Link to='/cart'><img src={login} alt="/" /></Link>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <a className="navbar-brand" href="/"><img src={logo} alt="/" /></a>
          </div>
          <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNavDropdown" // Update the value to the correct selector
  aria-controls="navbarNavDropdown"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Plants
                </a>
                <ul className="dropdown-menu ">
                 <Link to={"/shop"}> <li><a className="dropdown-item align-items-start d-flex " href="/">Shop</a></li></Link>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Another action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Planters
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Another action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Essentials
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Another action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex" href="/">Another action</a></li>
                  <li><a className="dropdown-item align-items-start d-flex " href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-block">
            <form className="d-flex" role="search">
              <div className="input-group">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
