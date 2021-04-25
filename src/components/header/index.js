import React, { Component } from 'react'
import './index.css'
import Covid_Logo from '../../assets/images/covid.png'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            home: "warning",
            results: "white",
            about: "white",
            contact: "white",

        }
    }

    onClickFunction(id, value) {
        if (id === "home") {
            this.setState({
                home: "warning",
                results: "white",
                about: "white",
                contact: "white",
            })
        }
        else if (id === "results") {
            this.setState({
                home: "white",
                results: "warning",
                about: "white",
                contact: "white",
            })

        }
        else if (id === "about") {
            this.setState({
                home: "white",
                results: "white",
                about: "warning",
                contact: "white",

            })

        }
        else if (id === "contact") {
            this.setState({
                home: "white",
                results: "white",
                about: "white",
                contact: "warning",

            })






        }
    }
    render() {

        return (

            <nav className="navbar is-fixed-top navbar_bg p-4" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item has-text-white is-size-5" href>
                        Covid-19 Tracker
                    </a>
                    <figure className="image is-64x64">
                        <img alt='' className="is-rounded" src={Covid_Logo} />
                    </figure>
                </div>


                <div className="navbar-end is-size-6">
                    <div className="navbar-item">
                        <a href='#home' className={'has-text-' + this.state.home} onClick={() => this.onClickFunction("home", false)} >Home</a>
                    </div>
                    <div className="navbar-item">
                        <a href='#results' className={'has-text-' + this.state.results} onClick={() => this.onClickFunction("results", false)}>Results</a>
                    </div>
                    <div className="navbar-item">
                        <a href='#about' className={'has-text-' + this.state.about} onClick={() => this.onClickFunction("about", false)}>About</a>
                    </div>
                    <div className="navbar-item">
                        <a href className={'has-text-' + this.state.contact} onClick={() => this.onClickFunction("contact", false)}>Contact Us</a>
                    </div>

                </div>
            </nav>

        )
    }
}
