import React from "react";
import CardBody from "./cardBody";


class Counter extends React.Component {
    state = {
        count: 0,
        names: [],
        
    };

    handleIncrement = event => {
        this.setState({ count: this.state.count + 1 });
        console.log(event.target.name)
        if (this.state.names.includes(event.target.name)) {
            this.setState({count: 0, names: []})
            alert("clicked on the same one try again ")
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
            
                <div className="container">
                    <div className="card black darken-1">
                        <div className="card-content yellow-text">
                           
                            <h3 className="card-text">Click Count: {this.state.count}</h3>
                            <CardBody count={this.state.count}
                                handleIncrement={this.handleIncrement}
                            />
                        </div>
                    </div>
                </div>
            

        )
    }
}

export default Counter;