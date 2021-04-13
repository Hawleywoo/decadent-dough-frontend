import React from 'react'

export default function BodySection(props) {
    return (
        <div className="body-section">
            {props.order % 2 !== 0
                ? <div className="description" >
                    <h3 className="description__title" ><b>{props.title}</b></h3>
                    <hr />
                    <p>{props.description}</p>
                </div>
                : <div className="image-title" >
                    <img className="section-image" src={props.imageSource} alt="images or something" />
                    <h2 className="cookie-title" >Custom Lingerie</h2>
                </div>
            }
            {props.order % 2 == 0
                ? <div className="description" >
                    <h3 className="description__title"><b>{props.title}</b></h3>
                    <hr />
                    <p>{props.description}</p>
                </div>
                : <div className="image-title">
                    <img className="section-image" src={props.imageSource} alt="images or something" />
                    <h2 className="cookie-title" >Elaborate Baby Shower With Floral</h2>
                </div>
            }
        </div>
    )
}