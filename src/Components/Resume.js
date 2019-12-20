import React , { Component } from "react";
import cv from './cv.PNG';
import cv2 from './cv2.PNG'
import './Resume.css'

class Resume extends Component{
    render(){
        return(
            <div className="resumecss">
                <h1>My Resume!</h1>
                <img src={cv} className="cv-style"/>
                <img src={cv2} className="cv2-style"/>
            </div>
        )
    }
}

export default Resume;