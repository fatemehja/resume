import React, { Component } from 'react';
import data from '../data.json'
import FullPage from './FullPage';

export default class AboutSection extends Component {
    render() {
        return (
            <FullPage className="second">
              <h3>{data.aboutSection.title}</h3>
              <p>{data.aboutSection.items[0].content}</p>
          </FullPage>
        )
    }
}