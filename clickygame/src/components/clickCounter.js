import React from "react";
import CardBody from "./cardBody";

class Counter extends React.Component {
    state = {
        count: 0,
        names: []
    };

    handleIncrement = event => {
        this.setState({ count: this.state.count + 1 });
        console.log(event.target.name)
        if (this.state.names.includes(event.target.name)) {
            this.setState({count: 0, names: []})
            alert("clicked on ")
            return
        }
        var newState = this.state.names;
        newState.push(event.target.name)
        this.setState({ names: newState })
        console.log(this.state)
        console.log("increment")
    };

    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">
                                Clicky Game</span>
                            <p className="card-text">Click Count: {this.state.count}</p>
                            <CardBody count={this.state.count}
                                handleIncrement={this.handleIncrement}
                            />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Counter;