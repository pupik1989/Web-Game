import React from 'react'

export default class Instructions extends React.Component {

    state = {
        visibility: false
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
                <button className="start" onClick={this.abc}>{this.state.visibility ? 'Hide' : 'Instructions'}</button>
                <p className='text'>
                    {this.state.visibility && <p>Click on the icon as many times as possible before the timer runs out.Ready? Press Start</p>}
                </p>
            </div>
        )
    }
}

