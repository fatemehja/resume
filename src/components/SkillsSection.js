import React, { Component } from 'react';
import data from '../data.json';
import FullPage from './FullPage';
import SkillCard from './SkillCard';

export default class SkillsSection extends Component {
    render() {
        return (
            <FullPage className="third">

                <h3>{data.skillsSection.title}</h3>
                <div className="cards-wrapper">
                {
                    Object.values(data.skillsSection.items).map( eachSkill => {
                        return(
                            <SkillCard skill={eachSkill.content} />
                        );
                    })
                }
                </div>
            </FullPage>    
        )
    }
}