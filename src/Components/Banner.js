import React, { useEffect, useRef } from 'react'
import gsap, {Tween,Flip, Power4, Power3, Back} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import "./banner.css"


function Banner() {
  
  
 
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(()=>{
    //animations
    
    gsap.fromTo('.content', {y:"-30%", opacity:0},{y:0,opacity:1, duration:1,animation:Power4.easeOut, repeat:0})
    gsap.fromTo('.stagger1',{opacity:0,y:-50},{opacity:1,y:0, stagger:0.3, ease:Power4.easeOut, duration:1})
    

    gsap.fromTo('.hero-design',{opacity:0, y:50}, {opacity:1, y:0, ease:Power4.easeOut, duration:1})
    gsap.fromTo('.square-anim', {scale:.1,opacity:0},{scale:1,opacity:1,stagger:0.09,duration:1,ease:Back.easeOut.config(1.6)})
    gsap.fromTo('.stagger2',{opacity:0,y:-50},{opacity:1,y:0, stagger:0.3, ease:Power4.easeOut, duration:1})
    gsap.fromTo('.transition3',{opacity:0,y:-50},{opacity:1,y:0, stagger:0.3, duration:1, scrollTrigger:{
      trigger:".transition3",
      start: "top bottom"
    }})
  },[])

 


  // gsap.from(".transition2",{
  //     scrollTrigger: {
  //         trigger:'.transition2',
  //         start:"top bottom"
  //     },
  //     y:50,
  //     opacity:1,duration:1.3, stagger:.3
  // })
  // gsap.from(".transition3",{
  //     scrollTrigger: {
  //         trigger:'.transition3',
  //         start:"top bottom"
  //     },
  //     y:50,
  //     opacity:1,duration:1.3, stagger:.6
  // })
  // 

  return (
    
    <div className="hero">
           <div className="content">
               <h1 className="stagger1">
                Actively Learning 
                from the experience
               </h1>
               <div className="meet stagger1">
                  
                       <p>Meet Youssef</p>
                   
               </div> 
               <svg className="scroll stagger1" width="87.849" height="165.458" viewBox="0 0 87.849 165.458">
                <g id="Group_2" data-name="Group 2" transform="translate(-250.575 -680.271)">
                  <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(266 702)" fill="#fff" stroke="#707070" stroke-width="1">
                    <ellipse class="circle" cx="28.5" cy="30.5" rx="28.5" ry="30.5" stroke="none"/>
                    
                  </g>
                  <g id="Rectangle_3" data-name="Rectangle 3" transform="matrix(1, 0.017, -0.017, 1, 253.438, 680.271)" fill="none" stroke="#fff" stroke-width="11">
                    <rect width="85" height="164" rx="42.5" stroke="none"/>
                    <rect x="5.5" y="5.5" width="74" height="153" rx="37" fill="none"/>
                  </g>
                </g>
              </svg>
              
           </div>
           <svg  className="hero-design" width="524" height="768" viewBox="0 0 524 768">
            <g id="hero-image" transform="translate(-1059 -139)">
              <ellipse className="square-anim" id="Ellipse_2" data-name="Ellipse 2" cx="62.5" cy="61.5" rx="62.5" ry="61.5" transform="translate(1321 531)" fill="#ff64cb"/>
              <path className="square-anim" id="Path_7" data-name="Path 7" d="M69.5,90.158C112.595,72.553,139,31.116,139,69.5v2a69.5,69.5,0,0,1-139,0v-2C0,31.116,26.405,107.763,69.5,90.158Z" transform="translate(1274.5 245.5)" fill="#6e00ff"/>
              <rect className="square-anim" id="Rectangle_19" data-name="Rectangle 19" width="131" height="128" rx="23" transform="translate(1059 651)" fill="#fff" opacity="0.53"/>
              <path className="square-anim" id="Path_8" data-name="Path 8" d="M77.136,91.459c42.6,0,77.136-61.326,77.136-21.457v2.077c0,39.869-34.535,72.189-77.136,72.189S0,111.948,0,72.079V70C0,30.133,34.535,91.459,77.136,91.459Z" transform="translate(1250 110.469)" fill="#fff"/>
              <circle className="square-anim" id="Ellipse_3" data-name="Ellipse 3" cx="28" cy="28" r="28" transform="translate(1288 139)" fill="#fff"/>
              <rect className="square-anim" id="Rectangle_16" data-name="Rectangle 16" width="131" height="128" rx="23" transform="translate(1321 405)" fill="#6e00ff"/>
              <rect className="square-anim" id="Rectangle_17" data-name="Rectangle 17" width="131" height="128" rx="23" transform="translate(1452 521)" fill="#6e00ff" opacity="0.74"/>
              <rect className="square-anim" id="Rectangle_18" data-name="Rectangle 18" width="131" height="128" rx="23" transform="translate(1190 523)" fill="#fff"/>
              <rect className="square-anim" id="Rectangle_20" data-name="Rectangle 20" width="131" height="128" rx="23" transform="translate(1321 656)" fill="#6e00ff"/>
              <ellipse className="square-anim" id="Ellipse_5" data-name="Ellipse 5" cx="62.5" cy="61.5" rx="62.5" ry="61.5" transform="translate(1193 656)" fill="#23dbfd"/>
              <rect className="square-anim" id="Rectangle_21" data-name="Rectangle 21" width="131" height="128" rx="23" transform="translate(1190 779)" fill="#fff"/>
            </g>
          </svg>

        </div>
        
  )
}

export default Banner