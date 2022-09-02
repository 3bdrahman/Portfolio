import React from 'react'
import Project from './Project'
import "./Protofolio.css"
import airbnb from "../imgs/Airbnb__proj.png"
import amazon from "../imgs/Amazon__proj.png"
import car from "../imgs/Self__proj.png"
import scrapper from "../imgs/Scrapper__proj.png"
function Protofolio() {
  return (
    <section id='protofolio' className='projects stagger2'>
    <h2>Personal Projects</h2>
    <div className='projects__container'>
      <Project title="Airbnb Clone" img={airbnb} tools="React, NextJS, Tailwind, Mapbox" description="A UI clone of the Airbnb website that makes use of mapbox API and dateRangePicker." link="https://airbnb-clone-3bdrahman.vercel.app/"/>
      <Project title="Amazon Clone" img={amazon} tools="React, React Router, Firebase, Strip API" description="An Amazon clone that uses React hooks, Firebase Authentication, Firestore, Stripe payements." link="https://clozon-fc92d.web.app/"/>
      <Project title="Self-driving car" img={car} tools="Vanilla JS, HTML, CSS" description="self-driving 2-d car with a neural network visualizer:collision detection, Parallelization, mutation." link="https://3bdrahman.github.io/Self-driving-car/"/>
      <Project title="API Docs scrapper" img={scrapper} tools="React, TypeScript" description="Given an API, get a list of all pdfs available on that link (unfinished)" link="https://goyyz.csb.app/"/>

    </div>
    </section>
  )
}

export default Protofolio