import React, { Component } from "react";

class Evall extends Component {
   constructor(props) {
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
       this.setState({value: event.target.value});

     }

     handleSubmit() {
       //alert('A name was submitted: ' + this.state.value);
       eval(this.state.value);

     }

     render() {
       const text = this.state
       return (
         <form onSubmit={this.handleSubmit}>
           <label>
             Name:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
             {/* <div>{this.state.value}</div> */}
           </label>
           <input type="submit" value="Submit" />
         </form>
       );
     }
   }
export default Evall;