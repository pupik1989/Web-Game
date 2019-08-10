import './app.css'
import React from 'react'

export default class MaxScore extends React.Component {
    render() {
        return (
            <div className="child">
                <h3 className="score">Best Score: {this.props.best}</h3>
            </div>
        )
    }
}