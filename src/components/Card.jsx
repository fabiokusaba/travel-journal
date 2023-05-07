import React from 'react';
import Location from '../images/location.png'

export default function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.imageUrl} alt=""/>
            <div className='card-description'>
                <div className='card-location'>
                    <img src={Location} alt="" />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
        
    )
}