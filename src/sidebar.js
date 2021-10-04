import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', alignItems:'center', height: '100vh', overflow: 'scroll initial', boxSizing: 'border-box' }}
    >
   
       
      <div className='sidebar'>

        <div className='sidebar_div_li'>
           
          <div className='container_sidebar'>
            
                
                
                  <li className='li_nav'>
                    <NavLink to='/commercial'>
                    <FontAwesomeIcon icon={faSuitcase} />  Commercial
                    </NavLink></li>
              
          </div>
          <div className='container_sidebar'>
          
                  <li className='li_nav'>
                    <NavLink to='/marcom'>
                    <FontAwesomeIcon icon={faEuroSign} /> <br/> Marcom
                    </NavLink></li>
               
          </div>

        </div>
        
      </div>    
    </div>
  );
};

export default Sidebar;
