import React, { Component } from "react";

class Attribute extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            url: "",
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { url, name } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Demo</h2>

                <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={this.handleChange("name")}
                    type="name"
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Url</label>
                <input
                    onChange={this.handleChange("url")}
                    type="text"
                    className="form-control"
                    value={url}
                />
            </div>
            <a
                href={this.state.url}
                className="btn btn-raised btn-primary"
                target="_blank"
            >
               {/* Click here to visit the {this.state.url} */}
            </a>

                    <ul>
                        <li id="tarantula" data-animal-type={this.state.url}>Tarantula</li>
                    </ul>

            <a href="newtab.html" target="_blank">Click here for new tab.</a> 
            <br></br>
            <a href="newtab.html" target="_blank" rel="noreferrer">Click here for safer new tab.</a>
        </form>
            </div>
        );
    }
}

export default Attribute;
