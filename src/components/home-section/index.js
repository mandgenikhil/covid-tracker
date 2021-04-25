import React, { Component } from 'react'
import './index.css'
export default class HomeSection extends Component {
    render() {
        return (
            <>
                <section id='home'className="section  hero_bg">
                    <div className="hero-body">
                        <p className="title is-size-1 has-text-white">
                            CORONA
              </p>
                        <p className="subtitle has-text-white">
                            Live Covid-19 Tracker
              </p>

                        <p className="has-text-white is-size-6">
                            Corona virus disease (COVID-19) is an infectious deisease casued by new virus.
              </p>
                        <p className="has-text-white is-size-6">
                            The disease causes repriratory illness (like the flu) with symptoms
              </p>
                        <p className="has-text-white is-size-6">
                            as cough, fever, and in more
              </p>
              <div className='level'>
              <div className='level-left'>
                        <div className='level-item'>
                            <div>
                                <p className='heading'>
                              
                                      </p>
                                <p className='title'>
                                <button className='button is-info is-large is-size-6'>
                      <span>How To Protect</span>

                        <span className='icon'>
                      <a href class="icon has-text-white">
                        <i class="fa fa-lg fa-arrow-right"></i>
                    </a>
                    </span>
                    
                      </button>
                                      </p>
                            </div>
                        </div>
                        <div className='level-item'>
                            <div>
                                <p className='heading'>
                              
                                      </p>
                                <p className='title'>
                                <button className='button is-large is-link is-size-6 '>
                      <span>Find A Doctor </span>
                      <span className='icon'>
                      <a href class="icon has-text-white">
                        <i class="fa fa-lg fa-arrow-right"></i>
                    </a>
                    </span>
                      </button>
                                      </p>
                            </div>
                        </div>
                        </div>
                </div>
              {/* <span className='span'>
              <span className='span'>
                  <button className='button'>
                      1
                      </button>
                  </span>

                  <span className='span'>
<button className='button'>
    2
                      </button>
                  </span>
                  </span> */}
                    </div>
                    <div className='box stats_bg'>
                    <div className='level'>
                        <div className='level-item'>
                            <div>
                                <p className='heading'>
                                    Stats Overview
                                      </p>
                                <p className='title'>
                                    Globle
                                      </p>
                            </div>


                        </div>
                        <div className='level-item has-text-centered'>
                            <div>
                                <p className='heading is-size-5'>
                                Total Cases
                                      </p>
                                <p className='title '>
                                1,345,347
                                      </p>
                            </div>
                        </div>
                        <div className='level-item has-text-centered'>
                            <div>
                                <p className='heading '>
                                    Total Recovered
                                      </p>
                                <p className='title  '>
                                    259,544
                                      </p>
                            </div>
                        </div>
                        <div className='level-item has-text-centered'>
                            <div>
                                <p className='heading'>
                                Total Deaths
                                      </p>
                                <p className='title'>
                                    68,184
                                      </p>
                            </div>
                        </div>

                    </div>
                </div>   
                </section>                
                             
            </>
        )
    }
}
