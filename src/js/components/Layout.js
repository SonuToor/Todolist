import React from "react";

import Form from "./Form"
import Lists from "./Lists"
import Title from "./Title"


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Form />
                <Lists />
            </div>
            )
    }
}