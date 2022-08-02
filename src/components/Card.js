import React from 'react'
import star from '../images/star.svg'

export default function Card(props) {
    return (
        <div class="card">
            <div className="card-status-label">{props.statusLabel}</div>
            <img src={require('../images/card' + props.imageId + '.png')} className="card-image" />
            <div className="card-meta">
                <img src={star} />
                <span class="score">{props.stats.score}</span>
                <span className="review-count">({props.stats.reviewCount}) •</span>
                <span className="location">{props.location}</span>
            </div>

            <p>
                {props.description}
            </p>

            <p>
                <strong>From ${props.price}</strong> / person
            </p>
        </div >
    )
}