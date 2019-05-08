import React from "react";

class propinject extends React.Component {
    constructor() {
      super();  
      this.state={"dangerouslySetInnerHTML" : { "__html": "<img src=x onerror=alert('xss')>"}} 
    }
       
  
    render() {
        const obj= this.state;
      return (
        React.createElement("span", obj)
      );
    }
  }

  export default propinject;