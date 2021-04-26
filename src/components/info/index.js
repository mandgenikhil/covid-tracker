import React, { Component } from 'react'
import Hand_Shake_Image from '../../assets/images/hand_shake.png'
import Cough_Image from '../../assets/images/cough.png'
import Sore_Image from '../../assets/images/sore.png'

export default class Info extends Component {
    render() {
        return (
            <section id='info' className='section chart_sec_bg'>
                <div className='hero-body'>
                    <div className='has-text-centered title'>
                        How Coronavirus Spread
                        </div>
                    <div className='columns'>
                        <div className='column'>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <img className='is-rounded' src={Hand_Shake_Image} alt='' />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <div className='is-size-4'>
                                            PERSON-TO_PERSON SPREAD
                                            </div>
                                        <br />
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={Cough_Image} alt='' />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <div className='is-size-4'>
                                            PERSON COUGH OR SNEEZES
                                            </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2">
                                        <img className='is-rounded' src={Sore_Image} alt='' />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <div className='is-size-4'>
                                            SORE THROAT
                                            </div>                                        
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        )
    }
}
