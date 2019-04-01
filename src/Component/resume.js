import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Skills from './skills';


class Resume extends Component {
    render() {
       return (
           <div>
              <Grid>
                  <Cell col={4}>
                  <div style={{textAlign: 'center'}}>
                    <img  src='https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170507287/78109426-person-using-laptop-computer-icon-image-vector-illustration-design.jpg'
                    alt="avatar" style={{height: '220px'}}
                    />
                  </div>
                  <h2 style={{paddingTop: '2em'}}>Maryana Andrukhiv </h2>
                  <h4 style={{color: 'grey'}}>Programmer</h4>
                  <hr style={{borderTop: '3px solid yellow', width: '50%'}} />
                  <p>No elit maiorum per, eu cum senserit explicari. Nec cu facilis erroribus ullamcorper, ut eum vocent sanctus commune. Ei zril suavitate patrioque sed. Prompta mandamus salutatus cu qui, cu nullam tritani mentitum sit, sed brute nostrum et. Qui alia nonumy delicatissimi eu, ne sint intellegam quo. Ne per facer dicant fabellas, ut option mentitum repudiare est.</p>
                  <hr style={{borderTop: '3px solid yellow', width: '50%'}} />
                  <h5>Adress</h5>
                  <p> Ukraine, Lviv</p>
                  <h5>Phone</h5>
                  <p> +3 8 (012) 34 56 789</p>
                  <h5>Email</h5>
                  <p>krakazyabra@tut.com</p>
                  <hr style={{borderTop: '3px solid yellow', width: '50%'}} />
                  </Cell>
                  <Cell col={8} className="resume-right-col">
                    <h2>Skills</h2>
                    <Skills 
                    skill="javascript"
                    progress={90}
                    />
                    <Skills 
                    skill="html/css"
                    progress={80}
                    />
                    <Skills 
                    skill="react"
                    progress={70}
                    />
                    <Skills 
                    skill="bootstrap"
                    progress={90}
                    />
                    <Skills 
                    skill="redax"
                    progress={10}
                    />
                  </Cell>
              </Grid>
           </div>
       )
    }
}

export default Resume;