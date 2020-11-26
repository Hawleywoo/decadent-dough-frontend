import React from 'react'

export default function BodySection(props){
    return (
        <div className="body-section">
            {props.order % 2 !== 0 
                ?<div className="description" >
                    <h3>{props.title}</h3>
                    <hr/>
                    <p>{props.description}</p>
                </div>
                :<img className="section-image" src={props.imageSource} alt="images or something" />
            }
            {props.order % 2 == 0 
                ?<div className="description" >
                    <h3>{props.title}</h3>
                    <hr/>
                    <p>{props.description}</p>
                </div>
                :<img className="section-image" src={props.imageSource} alt="images or something" />
            }
        </div>
    )
}