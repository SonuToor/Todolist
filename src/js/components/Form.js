import React from "react";

export default class Form extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const task = event.target[0].value;
        console.log(task);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}  className="input">
                <input className="input-task" placeholder="What do you need to get done?" minLength="5" required></input>
                <button className="button submit">Add it to my list</button>
            </form>
        )
    }
}
