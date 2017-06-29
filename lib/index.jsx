import React from react
import SidebarExample from ./router

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <SidebarExample />
            <p>i am father</p>
        )
    }

}
