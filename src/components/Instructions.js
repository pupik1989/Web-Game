import React from 'react'

export default class Instructions extends React.Component {

    state = {
        visibility: false,
        details: ''
    }

    abc = () => {
        this.setState((prev) => {
            return {
                visibility: !prev.visibility
            }
        })
    }


    render() {
        return (
            <div className="child">
                <button className="child ins" onClick={this.abc}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                <p>
                    {this.state.visibility && 'Click on the icon as many times as possible before the timer runs out'}
                </p>
                <p>
                    {this.state.visibility && 'Ready? Press Start'}
                </p>
            </div>
        )
    }
}

