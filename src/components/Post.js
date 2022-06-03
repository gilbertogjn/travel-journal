import React from "react";

export default function Post(props) {
    return (
        <div className="post">
            <img className="post--img" src={props.imageUrl} />
            <div className="post--info">
                <div className="post--info--location">
                    <img className="pin" src="./images/pin.svg" />
                    <span className="country">{props.location}</span>
                        <a className="googleMapsLink" href={props.googleMapsUrl}>
                            View on Google Maps
                        </a>
                </div>
                <h2 className="post--title">
                    {props.title}
                </h2>
            </div>
        </div>
    )
}