import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../components/imgs/logo.png";

import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../components/Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
    localStorage.removeItem("user");

		window.location.reload();
	};

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
          
        </span>
    
      </div>


      <div className="menu">
      {SidebarData.map((item, index) => (
    <Link key={index}  to={item.path} className={selected === index ? "menuItem active" : "menuItem"} onClick={() => setSelected(index)}>
      <item.icon />
      <span>{item.heading}</span>
    </Link>
  ))}
        {/* signoutIcon */}
        
        <div className="menuItem"  onClick={handleLogout}>
          Logout
          <UilSignOutAlt />
      
</div>
        
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
