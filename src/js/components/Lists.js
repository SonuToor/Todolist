import React from "react";

export default class Lists extends React.Component {

    render() {
        return (
            <div>
                <div className="list-titles">
                    <h3>To do</h3>
                    <h3>Done</h3>
                </div>
                <div className="lists">
                    <ul className="todo-list list">
                    </ul>
                    <ul className="done-list list">
                    </ul>
                </div>
            </div>
        )
    }
}
