import './app.css'
import React from 'react'

export default class Clock extends React.Component {

    display = () => {
        if (this.props.time === 10)
            return '00:' + this.props.time
        return '00:0' + this.props.time
    }
    render() {
        return (
            <div className="child">
                <h1 className="clock">{this.display()}</h1>
            </div>
        )
    }

}