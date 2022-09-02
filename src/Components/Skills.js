import React, { useEffect } from 'react'
import Group3 from "../imgs/Group_3.png"
import Goal from "../imgs/goal.png"
import UI from "../imgs/ui-icon.svg"
import "./skills.css"
import gsap, {Tween,Flip, Power4, Power3, Back} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
function Skills() {
    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(()=>{
    //     const t1 = gsap.timeline();
   
    // },[])
  return (
    <section class="skills">
        <div class="skills-container">
        <ul>
            <li class="skill transition3">
                <div class="icon-container one">
                    <img class="skillset" src={UI}/>
                </div>
                <p class ="skill-title">Frontend development</p>
                <p class="featured-desc skill-desc">
                    <b>Web:</b>  HTML5, CSS3, BootStrap. 
                    <br/><b>Mobile: </b>XML, Android Studio.
                    <br/> <b>UI/UX: </b>Adobe Xd, FlowMapp.   
                </p>
            </li>
            <li class="skill transition3">
                <div class="icon-container two">
                    <img class="skillset" src={Group3} />
                </div>
                <p class ="skill-title">Programming Languages</p>
                <p class="featured-desc skill-desc"><b>java </b> : Primary for school projects. 
                <br/><b>Python</b> : Data scraping, cleaning, and analysis.
            <br/> <b>React</b>: ReactJs web apps and React native mobile apps.</p>
            </li>
            <li class="skill transition3">
                <div class="icon-container three">
                    <img class="skillset" src={Goal}/>
                </div>
                <p class ="skill-title">About me</p>
                <p class="featured-desc skill-desc"><b>Education </b>: Prospective University of Rochester graduate studying Computer Science. <br/>
                <b>Personal goals</b>: Keep learning about software development and machine learning models.</p>
            </li>
        </ul>
    </div>
  </section>
  )
}

export default Skills