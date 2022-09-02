import { Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from 'react'
import "./project.css"
function Project({img, title, tools, description, link}) {
  return (
    <div className='project stagger2'>
        <h3>{title}</h3>
        <img className='project__img ' src={img} />
        <div className='project__details'>
            <p className='project__description'> {description}</p>
            <p className='project__tools'>{tools}</p>
            <Button href={link}><ExitToAppIcon/></Button>
        </div>
    </div>
  )
}

export default Project

