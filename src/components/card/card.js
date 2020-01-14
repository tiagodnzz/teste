import React, { Component } from 'react'
import './card.css'
export default class card extends Component {
    render() {
        return (

            <div className={`card mb-4 ${this.props.class}`}>
                <div className={`card-body card__body  ${this.props.image}`}>
                    <h4 className="card__title">{this.props.title}</h4>
                </div>
            </div>

        )
    }
}