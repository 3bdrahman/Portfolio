import React from 'react'
import stemAway from "../imgs/Stem-Away.png"
import att from "../imgs/Att.png"
import "./experience.css"
function Experience() {
  return (
    <section class="recentExp">

              <div class="portfolio-container transition3">
                  <div class="portfolio-left">
                      <div class="inner">
                          <p class="subtitle">2021 NLP intern</p>
                          <p class="featured-title">STEM-Away</p>
                          <p class="featured-desc">Collected and analyzed Discourse Hub Community data to build a forum post recommendation system.
                            Used Decision-trees, text-classification, and Feedforward-neural-network to classify posts with 83% accuracy.</p>
                      </div>
                  </div>
                  <a href="#"><img class="experiene__img" src={stemAway} alt="certificate"/></a>
                  </div>
              
                  {/* <div class="portfolio-container transition3">
                    <div class="portfolio-left">
                        <div class="inner">
                            <p class="subtitle">2021 AT&T Extern</p>
                            <p class="featured-title">AT&T Summer Learning Academy</p>
                            <p class="featured-desc">Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                ut aliquip ex ea </p>
                        </div>
                    </div>
                    <a href="#"><img src={att} alt="certificate"/></a>
                    </div> */}

                    
          </section>
  )
}

export default Experience