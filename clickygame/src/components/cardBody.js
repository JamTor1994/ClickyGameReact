import React from "react";
import Counter from "./clickCounter"
import images from "../img.json"

class Cardbody extends React.Component {
    constructor(props) {
        super(props)
        this.state = { names: [] }
        // this.handleclick = this.handleclick.bind(this)
    }
    // handleclick(event) {
    //     console.log(event.target.name)
    //     if (this.state.names.includes(event.target.name)) {
    //         alert("clicked on ")
    //         return
    //     }
    //     var newState = this.state.names;
    //     newState.push(event.target.name)
    //     this.setState({ names: newState })
    //     console.log(this.state)
    // }
    render() {
        return (
            <div className="card-container">
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <p className="card-text">Click Count: {this.props.count}</p>
                            </div>
                            <div>
                                {
                                    images.map(photo => {
                                        return (
                                            <div key={photo.id} onClick={
                                                event => {
                                                    // this.handleclick(event);
                                                    this.props.handleIncrement(event)
                                                }
                                            }>
                                                <img name={photo.name} src={photo.image}></img>
                            </div>
                            )
                        })
                    }
                            </div>
                    </div>
                </div>
            </div>
            </div >
        );
    }
}
export default Cardbody;