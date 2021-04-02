import React, { Component } from 'react';

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
            "color": "bg-red-300",
			"title": props.title,
            "complete": props.complete
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const state = this.state

        if(state.color == "bg-red-300") {
            state.complete = true;
            state.color = "bg-green-300";
        } else {
            state.complete = false;
            state.color = "bg-red-300";
        };

        this.setState({ state })
    }

	render() {
		return (
            <div className="m-3 flex">
                <div className={this.state.color + " w-6 rounded mx-4"}  onClick={this.handleClick}>
                    <span>&nbsp;</span>
                </div>
                <p>{this.state.title}</p> 
            </div>
        )
	}
}
