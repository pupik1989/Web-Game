import './app.css'
import React from 'react'

const imageName = require('../img/Circle.png')
const animalPhoto = require('../img/animal.png')




export default class Board extends React.Component {


    getComponent = (e) => {
        this.props.handleUserPress(e)
    }

    render() {
        return (
            <div className='container child board'>
                {
                    this.props.board.map(place =>
                        <div
                            onClick={() => this.getComponent(place)}
                            className='item'
                            key={place}
                        >
                            <img
                            
                                alt=""
                                src={place === this.props.magic ? animalPhoto : imageName}>
                            </img>
                        </div>
                    )

                }
            </div>
        )
    }

}