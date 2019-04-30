import React from "react";
import CardBody from "./cardBody";
import images from "../img.json"


// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

class Counter extends React.Component {
    state = {
        count: 0,
        names: [],
        images: images
    };

    handleIncrement = event => {
        console.log(event.target.name)
        if (this.state.names.includes(event.target.name)) {
            this.setState({count: 0, names: []})
            alert("clicked on the same one try again ")
            return
        }
        
        var newState = this.state.names;
        newState.push(event.target.name)
        this.setState({ names: newState, count: this.state.count + 1, images: this.shuffleArray(this.state.images) })
        console.log(this.state)
        console.log("increment")
    };

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {
        return (
            
                <div className="container">
                    <div className="card black darken-1">
                        <div className="card-content yellow-text">
                           
                            <h3 className="card-text">Click Count: {this.state.count}</h3>
                            <CardBody count={this.state.count}
                                handleIncrement={this.handleIncrement}
                                images={this.state.images}
                            />
                        </div>
                    </div>
                </div>
            

        )
    }
}

export default Counter;