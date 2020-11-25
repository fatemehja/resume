import React, { Component } from 'react';

import data from '../data.json'
import FullPage from './FullPage';

import './TitleSection.css';
// import githubLogo from '../images/icons/github.png';  //address is not available here!

export default class TitleSection extends Component {
    render() {
        return (
            <FullPage className="first">
                <h1>
                    {/* <h1 className="title" style={{
            fontFamily: 'Architects Daughter'
          }} > */}
                    {data.title}
                </h1>
                <h2>
                    {data.subtitle}
                </h2>
                <div className="icons-wrapper">
                    {
                        Object.keys(data.links).map(key => {
                            let srcTemp = `images/icons/${key}.png`
                            return (
                                <a href={data.links[key]} className="icon">
                                    <img height="25px" alt={key} src={srcTemp} />
                                </a>
                            )
                        }
                        )
                    }
                    {/* <a href={data.links.linkedin}><img height="25px" src={linkedinLogo}></img></a> */}
                </div>
            </FullPage>

        )
    }
}