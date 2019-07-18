import React from "react";

export default class Lists extends React.Component {
    state = { finishedItems : [] }
    
    handleDone = (event) => {
        const listItem =  event.target.parentNode.lastChild; 
        this.setState({finishedItems : [listItem, ...this.state.finishedItems]})
        this.listNode.removeChild(event.target.parentNode)
    }

    handleDelete = (event) => {
        const listItem =  event.target.parentNode
        this.listNode.removeChild(listItem)
    }

    render() {
        return (
            <div>
                <div className="list-titles">
                    <h3>To do</h3>
                    <h3>Done</h3>
                </div>
                <div className="lists">
                    <ul ref={list => this.listNode = list}className="todo-list list">
                        {this.props.tasks.map(task =>
                            <li><button onClick={this.handleDone} className="button finished">&#10003;</button><button onClick={this.handleDelete} className="button delete">&#10007;</button>{task}</li>
                        )}
                    </ul>
                    <ul className="done-list list">
                        {this.state.finishedItems.map(task => 
                            <li className="finished-task">{task.data}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
