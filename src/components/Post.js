import React from "react";

export default function Post(props) {
    return (
        <div className="post">
            <img className="post--img" src={props.imageUrl} />
            <div className="post--info">
                <div className="post--info--location">
                    <img className="pin" src="./images/pin.svg" />
                    <span className="country">{props.location}</span>
                        <a className="googleMapsLink" target="_blank"
                            href={props.googleMapsUrl}>
                            View on Google Maps
                        </a>
                </div>
                <h2 className="post--title">
                    {props.title}
                </h2>
                <h3 className="post--date">
                    {props.startDate} - {props.endDate}
                </h3>
                <p className="post--description">{props.description}</p>
            </div>
        </div>
    )
}