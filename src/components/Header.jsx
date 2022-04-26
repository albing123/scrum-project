import React from 'react'
import '../App.css';

export default function Header() {
  return (
    <section className='header-section'>
     <h1 className="logo">LOGO</h1>
     <div className='header-menu' >
     <p className='header-links'> Start Products Mail us</p>
     <h1 className='cart-logo'><i className="fa fa-shopping-basket" aria-hidden="true"></i></h1>
     </div>
     
    </section>
  )
}
