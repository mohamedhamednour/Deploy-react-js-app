import React from 'react'
import { AiFillFacebook,AiFillTwitterSquare,AiFillApple } from "react-icons/ai";
import { FcStart,FcSms } from "react-icons/fc";



const Footer = () => {
  return (
    <footer>
      <div className="col-12">
      <h1 className='foot'>الجينرال</h1>
      <a href='#' style={{color:'blue'}}  className='iconface'><AiFillFacebook/>  </a>

      <a className='iconface' href="#"><FcSms/></a>
      <a className='iconface' href="#"><FcStart/></a>



      </div>
   

    </footer>
  )
}

export default Footer
