import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../assets/mason.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= { logo }
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text" style={{ color: '#fff' }, styles}>
              <h1 style={{ fontWeight: 'bold', color: '#fff' }}>Full Stack Web Developer</h1>
            <hr/>

              <p>HTML/CSS | JavaScript | React | React Native | NodeJS | Express | MySQL</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/masonscable/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/MasonCable" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

                {/* Youtube */}
                {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a> */}

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

const styles = {
  backgroundColor: 'black',  
  borderRadius: 20 + '%',
  margin: 'auto',
  width: 80 + '%'
}