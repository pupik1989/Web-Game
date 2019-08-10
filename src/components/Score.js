import './app.css'
import React from 'react'

export default class Score extends React.Component {
    render() {
        return (
            <div className="child">
                <h3 className="score">Score: {this.props.score}</h3>
            </div>
        )
    }
}

