import React, { Component } from "react";


class DangerHtml extends Component{
    constructor() {
        super();
        this.state = {
            securetext: "",
            insecuretext: "",
        };
    }


    render() {
        const { securetext, insecuretext } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Demo for classic xss</h2>
                <form>
                
                <button class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary btn-raised">Submit</button>
              </form>
            </div>
            
        );
    }
}

export default DangerHtml;