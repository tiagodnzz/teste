import React, { Component } from 'react'
import './buttonGreenDark.css'

export default class buttonGreenDark extends Component {
    render() {
        return (
            <button type="button" className="ButtonGreenDark">{this.props.name}</button>
        )
    }
}
