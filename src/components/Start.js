import './app.css'
import React from 'react'


export default class Start extends React.Component {
    render() {
        return (
            <div className="child">
                <button className="start" onClick={this.props.changeStatus} >Start</button>
            </div>
        )
    }

}

