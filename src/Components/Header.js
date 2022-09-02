import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ForwardToInbox from '@mui/icons-material/ForwardToInbox';
import "./header.css"
import resume from "../My_Resume-2.pdf"
function Header() {
  return (
    
    <div className="nav-container">
           <header>
               <a href="#" class="logo">Abdelrahman Youssef</a>
               <nav>
                   <ul id="nav-list">
                       <li><a href="#protofolio"> Protofolio</a></li>
                       <li><a href={resume} download> Resume</a></li>
                       <li><a href="mailto:ayosef@u.rochester.edu"> Hire me</a></li>
                   </ul>
               </nav>
           </header>
           <div className="social-header">
               <ul>
                   <li ><a href="https://www.linkedin.com/in/ayosef/"><LinkedInIcon/></a></li>
                   <li ><a href="https://github.com/3bdrahman"><GitHubIcon/></a></li>
                   <li ><a href="mailto:ayosef@u.rochester.edu"><ForwardToInbox/></a></li>
               </ul>
           </div>
       </div>

  )
}

export default Header