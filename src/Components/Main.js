import React from 'react';
import { Switch , Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import AboutMe from './AboutMe';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';


const Main = () => (
    <switch>

        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/project" component={Project}/>
        <Route path="/resume" component={Resume}/>
        
    </switch>
)

export default Main;