    import React, { Component } from "react";
    var showdown = require('showdown');

    class MarkDown extends Component {
        constructor() {
            super();
            this.state = {
                text:''
            };
        }

        handleChange = name => event => {
            this.setState({ [name]: event.target.value });
        };

        createMarkup =(text)=>{
            const convertor =  new showdown.Converter()
            const data = convertor.makeHtml(text)
            return{__html:data}
        }

        render() {
            //const  text  = this.state;
            return <div>
                <row>
                <textarea className="form-control" aria-label="With textarea" name="text" onChange={this.handleChange("text")}></textarea>
                </row>
                <row>
                <div dangerouslySetInnerHTML={this.createMarkup(this.state.text)}/>
                </row>
                </div>
        
        }
    }

    export default MarkDown;
