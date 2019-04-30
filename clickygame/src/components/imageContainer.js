import React from "react";
import images from "../../clickygame/img.json"


function Card(props) {
    console.log(images)
    return (

        function FriendCard(props) {
            return (
                <div className="card">
                    {
                        image.map(photo => {
                            return(
                                <p>photo.name</p>
                            )
                        })
                    }
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
            );
        }


    );
}

export default Card;