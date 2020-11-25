import React, { Component } from 'react';
import './FullPage.css';
import DownIcon from './DownIcon';

import { Link, Element } from 'react-scroll';

export default class FullPage extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         color: 'black'
    //     }
    // }

    // changeFontColor (){
    //     this.setState({ 
    //         color : this.state.color !== 'blue' ?  'blue' : 'black'
    //     })
    // }

    render() {
        const { children } = this.props;
        return (
            <div>
                <div className={`full-page ${this.props.className} || ''`}>
                    {children}
                    {/* <h3 className="react-icons">
                    <MdExpandMore />
                </h3> */}                
                </div>
                <div>
                    <Link activeClass="active" to="test1" spy={true} smooth={true}
                        offset={50} duration={500} onSetActive={this.handleSetActive}>
                        <DownIcon onClick={() => {
                            console.log("It works")
                        }}
                        />
                    </Link>
                </div>
                <Element name="test1" className="element"/>
            </div>
        )
    }
}
