import React, { Component } from 'react';
import './SkillCard.css'
// import { GrReactjs } from 'react-icons/gr'
// import { DiJava } from 'react-icons/di'

export default class SkillCard extends Component {
    render() {
        const { skill } = this.props;
        return (
            <div className="cards-wrapper">
                <div className="image-wrapper">
                    {/* <img src={`../${skill.image}`} /> */}
                    <img src={skill.image}></img>
                </div>
                <div className="skill-title-wrapper">
                    <p>{skill.title}</p>
                </div>
            </div>

        )
    }
}