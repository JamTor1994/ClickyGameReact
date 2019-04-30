import React from "react";
import images from "../img.json"

class Cardbody extends React.Component {
    constructor(props) {
        super(props)
        this.state = { names: [] }
 
    }

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
                                            <div className= "images" key={photo.id} onClick={
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