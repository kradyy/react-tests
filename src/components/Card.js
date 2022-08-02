import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            {props.image && <img className="card--image" src={props.image} />}
            <div className="card--content">
                {props.location &&
                    <>
                        <img src="./images/pin.svg" /> <span className="card--location">{props.location}</span>
                    </>
                }

                {props.googleMaps && <a href="{props.googleMaps}">View on Google Maps</a>}

                <h2>{props.title}</h2>

                <strong>{props.startDate ? props.startDate : 'TBA'} - {props.startDate ? props.endDate : 'TBA'}</strong>

                <p>{props.description}</p>
            </div>
        </div>
    )
}