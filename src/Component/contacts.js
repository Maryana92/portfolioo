import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


class Contacts extends Component {
    render() {
       return (
           <div className="contact-body">
               <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Maryana Andrukhiv</h2>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUM4fJEsCVTR8Z_lDNj-5GUh3w9Sf4fS2GCzE7OmMxDEKxOpJn"
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, mea dicunt voluptaria scripserit eu, ei has causae impetus. Viris eirmod ponderum has in. Clita eruditi repudiandae in vim. Nonumes repudiare has id. Pri nostrum repudiare ex, his case novum consectetuer at. Dicunt hendrerit disputando mea ea, mazim temporibus repudiandae cum te. Alii justo impedit et vim. </p>
                    </Cell>

                    <Cell col={6}> 
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                 +3 8 (000) 01 02 123
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                 krakazyabra@tut.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                 krakazyabra
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                 +3 8 (000) 01 02 123
                                </ListItemContent>
                            </ListItem>
                           
                        </List>
                        </div>                 

                    </Cell>
               </Grid>
           </div>
       )
    }
}

export default Contacts;