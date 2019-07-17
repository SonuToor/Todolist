import React from "react";

export default class Lists extends React.Component {
    state = { finishedItems : [] }
    
    handleDone = (event) => {
        // need to access the actual text entered by the user here is what is missing 
        console.log(event.target)
        const listItem =  event.target.parentNode; 
        console.log(listItem)
        this.setState({ finishedItems : [listItem, ...this.state.finishedItems]});
    }

    handleDelete = (event) => {
        const listItem =  event.target.parentNode
        this.rootNode.removeChild(listItem)
    }

    render() {
        return (
            <div>
                <div className="list-titles">
                    <h3>To do</h3>
                    <h3>Done</h3>
                </div>
                <div className="lists">
                    <ul ref={node => this.rootNode = node}className="todo-list list">
                        {this.props.tasks.map(task =>
                            <li><button onClick={this.handleDone} className="button finished">&#10003;</button><button onClick={this.handleDelete} className="button delete">&#10007;</button>{task}</li>
                        )}
                    </ul>
                    <ul className="done-list list">
                        {/* {this.state.finishedItems.map(item => 
                            <li className="finished-task">{item}</li>)} */}
                    </ul>
                </div>
            </div>
        )
    }
}

