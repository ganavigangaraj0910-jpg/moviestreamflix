// import React from 'react'
import Fire from '../../assets//images/fire.png'
import Star from '../../assets//images/star.png'
import Party from '../../assets/images/party.png'
import '../../styles/components/Navbar.css'

const Navbar = () => {
  return (
    
    <nav className="navbar align-between ">
      <h1 className="text-2xl font-bold text-[#ffe400]">Movie</h1>
      <div className="  align-between  gap-5">
        <a href="" className=" align-between navbar-item">
          Popular
          <img src={Fire} alt="fire icon" className="icon" />
        </a>
        <a href="" className=" align-between navbar-item">
          Top Rated   
          <img src={Star} alt="star icon" className="icon" />     
        </a>
        <a href="" className=" align-between  navbar-item">
          Upcoming
          <img src={Party} alt="party icon" className="icon" />
        </a>

      </div>
    </nav>
    

  )
}

export default Navbar
