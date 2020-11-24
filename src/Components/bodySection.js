import React from 'react'

export default function BodySection(props){
    return (
        <div className="body-section">
            <img className="section-image" src={props.imageSource} alt="images or something" />

            <div className="description" >
                <h3>{props.title}</h3>
                <hr/>
                <p>{props.description}</p>
            </div>
        </div>
    )
}