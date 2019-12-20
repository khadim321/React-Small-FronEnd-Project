import React , { Component } from "react"
import './Contact.css'

class Contact extends Component{
constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      mySubmitHandler = (event) => {
        //event.preventDefault();
        alert("You are submitting " + this.state.username);
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      render() {
        return (
    <form onSubmit={this.mySubmitHandler} className="contactcss">
          <h1>Contact me</h1>
          <p>Enter your name please</p>
    <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
    <p>Enter your E.mail id</p>
      <input
        type='text'
        name='cell number'
        onChange={this.myChangeHandler}
    />
    <p>Enter your cell number here</p>
          <input
            type='text' 
            onChange={this.myChangeHandler}
    />
    <p>Write some thing and Submit</p>

    <textarea value={this.state.description}/><br/>

    <input
            type='submit'
          />
    </form>
        );
      }
    }

export default Contact;