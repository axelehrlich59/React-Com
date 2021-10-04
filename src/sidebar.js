import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', alignItems:'center', height: '100vh', overflow: 'scroll initial', boxSizing: 'border-box' }}
    >
   
       
      <div className='sidebar'>

        <div className='sidebar_div_li'>
          
           <NavLink className='navlink' to="/"><i className='sidebar_li'>Commercial</i></NavLink>
            <NavLink to="/marcom"><li className='sidebar_li'>Marcom</li></NavLink>

        </div>
        
      </div>    
    </div>
  );
};

export default Sidebar;
