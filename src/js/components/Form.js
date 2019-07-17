import React from "react";

export default class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const task = event.target[0].value;
        this.props.onSubmit(task);
        event.target[0].value = ""; 
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}  className="input">
                <input className="input-task" placeholder="What do you need to get done?" minLength="3" required></input>
                <button className="button submit">Add it to my list</button>
            </form>
        )
    }
}

