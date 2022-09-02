import React from 'react'
import "./footer.css"
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import ForwardToInbox from '@mui/icons-material/ForwardToInbox'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import resume from "../My_Resume-2.pdf"
function Footer() {
  
  const btn =document.getElementById("scrollUp")
    const rootElem = document.documentElement;
    const topFunc=()=>{
        rootElem.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    }
  return (
    <footer>
    <button onClick={topFunc} id='scrollUp'><ExpandLessIcon/></button>
        <div className='footer__container'>
            <div>
                <ul>
                        <li><a href={resume} download><h5>Resume</h5></a></li>
                        <li><a href='#'><h5>Get in touch</h5></a></li>
                </ul>
            </div>
            <div className='footer__social'>
                <GitHub className='footer__icon' style={{color: 'white'}}/>
                <LinkedIn className='footer__icon' style={{color: 'white'}}/>
                <ForwardToInbox className='footer__icon' style={{color: 'white'}}/>
            </div>
           
        </div>
        <div className='footer__border'>
                
        </div>
        <h6 className='copyright'>&copy; Abdelrahman Youssef 2022</h6>
    </footer>
  )
}

export default Footer