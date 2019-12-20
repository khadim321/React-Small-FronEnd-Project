import React , { Component } from "react"
import './AboutMe.css'

class About extends Component{
    render(){
        return(
<div className="aboutme">

<section className="introduction-section">
<h3>About Myself</h3>
    <h1>Introduction</h1>
    <p>I am a construction business owner, part time marketer, and a web developer.</p>
    <p>I love the internet, technology, and building beautiful things.</p>
</section>
<section className="location-section">
    <h1>Where I'm From</h1>
    <p>I'm originally from Skardu, Gilgit Baltistan. </p>
</section>
<section className="questions-section">
    <h1>More About Me</h1>
    <h2>What are your favorite hobbies?</h2>
    <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns.</p>
    <h2>What's your dream job?</h2>
    <p>My dream job is similar to my current job except I would like to be building software instead of buildings.</p>
    <h2>Where do you live?</h2>
    <p>I live in Islamabad.</p>
    <h2>Why do you want to be a web developer?</h2>
    <p>Because programming is awesome and programming for the internet is even more awesome.</p>
</section>


          </div>
        )
    }
}

export default About;