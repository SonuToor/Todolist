import React from "react";

import Form from "./Form"
import Lists from "./Lists"
import Title from "./Title"


export default class Layout extends React.Component {
    state = {
        tasks : []
    }
    acceptItems = (task) => {
        this.setState({tasks: [task, ...this.state.tasks]})
    }
    render() {
        let tasks = this.state.tasks
        return (
            <div>
                <Title />
                <Form onSubmit={this.acceptItems}/>
                <Lists tasks={tasks}/>
            </div>
            )
    }
}
