import React from "react";
import images from "../img.json"
import './cardBody.css';


class Cardbody extends React.Component {
    constructor(props) {
        super(props)
        this.state = { names: [] }

    }




    render() {
        return (

            <div className="card-container">
                <div className="row">
                    <div className="container">

                        <div>
                            {
                                images.map(photo => {
                                    return (
                                        <div className="images" key={photo.id} onClick={
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
            </div >
        );
    }
}
export default Cardbody;