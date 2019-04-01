import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
       return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img
                className="avatar-img"
                    alt="avatar" 
                    src="https://www.nextlesson.org/siteassets/img/icon-teacher3.png"
                />
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>
                    <hr />
                    <p> HTML/CSS | Bootstrap | JavaScript | React | Git</p>
                    
                    <div className="social-links">
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>

                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                </Cell>
            </Grid> 
        </div>
       )
    }
}

export default Landing;