import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const homecard = ({ color, heading, path, delay, image, size }) => {
  return (
    <motion.div
      className="home-card d-flex"
      style={{color:"white", boxShadow: "5px 5px 10px 0 rgba(0, 0, 0, 0.5)",border:"white 2px solid"}}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      
      <div className="home-img">
      <NavLink to={path}>
      <img src={image} alt="" width={size ? size : ""} />
      </NavLink>
      <h3 className='text-white d-flex justify-content-center p-2'>{heading}</h3>
        
      </div>
    </motion.div>
  )
}

export default homecard