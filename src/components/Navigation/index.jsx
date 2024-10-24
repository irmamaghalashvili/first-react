import React from "react";
import "../../Assets/styles/navigation.css";
import { IoIosHome, IoIosBook, IoIosBriefcase, IoIosHammer, IoIosContacts, IoIosStar, IoIosApps } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { id: 'education', text: 'Education', icon: <IoIosBook /> },
  { id: 'experience', text: 'Experience', icon: <IoIosBriefcase /> },
  { id: 'skills', text: 'Skills', icon: <IoIosHammer /> },
  { id: 'portfolio', text: 'Portfolio', icon: <IoIosApps /> },
  { id: 'contact', text: 'Contact', icon: <IoIosContacts /> },
  { id: 'feedback', text: 'Feedback', icon: <IoIosStar /> },
];

function Navigation({ collapsed }) {
  return (
    <div data-testid="navigation-component" className={`nav-li ${collapsed ? "collapsed" : ""}`}>
      <nav>
        <ul className="panel-ul">
          {menuItems.map(({ id, text, icon }) => (
            <li key={id}>
              {collapsed ? (
                <ScrollLink to={id} smooth={true} duration={500}>{icon}</ScrollLink>
              ) : (
                <ScrollLink to={id} smooth={true} duration={500}>
                  {icon} {text}
                </ScrollLink>
                
              )}
            </li>
          ))}
          <li>
            {collapsed ? (
              <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}><IoIosHome/></NavLink> 
            ) : (
              <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}><IoIosHome/>Home</NavLink>
            )}
            
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
