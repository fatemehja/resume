import React, { Component } from 'react';
import FullPage from './FullPage';
// import data from '../data.json'
import './HeaderSection.css';
import { ImMagicWand } from 'react-icons/im';
import { BiSitemap } from 'react-icons/bi';
import { Link } from 'react-scroll';


export default class HeaderSection extends Component {

        constructor(){
        super();
        this.state = {
            color: 'black'
        }
    }

    changeFontColor (){
        this.setState({ 
            color : this.state.color !== 'blue' ?  'blue' : 'black'
        })
    }

    render() {
        return (
            <div className="header" 
            style={{
                color: this.state.color
            }}
            >
                <div className="header-icon" onClick = { () => {
                    this.changeFontColor()
                }}
                >
                    <ImMagicWand />
                </div>
                <div className="header-icon">
                    <BiSitemap />
                </div>
                <div className="header-icon">   
                    <Link activeClass="active" to="about" spy={true} smooth={true}
                        offset={50} duration={500} onSetActive={this.handleSetActive}>
                        About
                    </Link>
                </div>
                <div className="header-icon">
                    <Link activeClass="active" to="skills" spy={true} smooth={true}
                        offset={50} duration={500} onSetActive={this.handleSetActive}>
                        Skills
                    </Link>
                </div>
            </div>
        )
    }
}