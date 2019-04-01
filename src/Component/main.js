import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AboutMe from './aboutme';
import Contacts from './contacts';
import Landing from './landingpage';
import Progects from './projects';
import Resume from './resume';



const Main = () => (
    <Switch>
        <Route exact path="/" component= {Landing} />
        <Route path="/aboutme" component= {AboutMe} />
        <Route path="/contacts" component= {Contacts} />
        <Route path="/projects" component= {Progects} />
        <Route path="/resume" component= {Resume} />
    </Switch>
)

export default Main;