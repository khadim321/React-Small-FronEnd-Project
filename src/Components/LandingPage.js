import React , { Component } from "react"
import { Grid, Cell} from 'react-mdl'
import khadim from './khadim.jpg'

class LandingPage extends Component{
    render(){
        return(
            <div className="test">

                <Grid className="landing-grid">
                <Cell col='12'>
                <img src={khadim} className="img-style"/>

                <div className="banner-style">
                <h1>Full stack Web Developer</h1>
                <p>HTML | CSS | Bootsrap | React | NodeJs | ExpressJs | MongoDB | AngularJs</p>

                <ul className="social-link">
                <li>

                <a href="https://www.linkedin.com/in/khadim-rana-16851b198/" rel="noopener norferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                </li>

                <li>
                <a href="https://www.facebook.com/khadim.pasha.7" rel="noopener norferrer" target="_blank">
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                </a>
                </li>

                <li>
                <a href="https://www.youtube.com/channel/UCFupzhEblJ-8m-tVoMAQdXw" rel="noopener norferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                </a>
                </li>

              
                </ul>
                </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;