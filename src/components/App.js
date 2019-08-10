import './app.css'
import React from 'react'
import Header from './Header'
import Clock from './Clock'
import Start from './Start'
import Score from './Score'
import Board from './Board'
import MaxScore from './MaxScore'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inGame: false,
            time: 10,
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
            magicNumber: 0,
            score: 0,
            playedOnce: false,
            maxScore: 0
        }
    }

    componentdidunmount() {
        this.random()
    }

    changeStatus = () => {
        this.setState((prev) => {
            return { inGame: !prev.inGame, score: 0 }
        })
        this.random()
        this.countTime();


    }
    countTime = () => {
        const timerId = setInterval(() => {
            if (this.state.time !== 0) {
                this.setState((prev) => {
                    return {
                        time: prev.time - 1
                    }
                })
            } else {
                this.resetToStart(timerId)
            }
        }, 1000)
    }

    resetToStart = (timerId) => {
        clearInterval(timerId)
        if (this.state.score > this.state.maxScore)
            this.setState(() => {
                return {
                    maxScore: this.state.score
                }
            })


        this.setState((prev) => {
            return { inGame: !prev.inGame, time: 10, magicNumber: 0, score: 0, playedOnce: true }
        })
    }

    random = () => {
        const x = Math.ceil(Math.random() * this.state.board.length)
        this.setState(() => {
            return {
                magicNumber: x
            }
        })
    }

    handleUserPress = (e) => {
        if (e === this.state.magicNumber) {
            this.setState((prev) => {
                return {
                    score: prev.score + 1
                }
            })
            this.random()
        }

       

    }

    render() {
        return (
            <div className="main">
                <Header />
                {this.state.inGame && <Clock time={this.state.time} />}
                {this.state.inGame && <Score score={this.state.score} />}
                {this.state.playedOnce && <MaxScore best={this.state.maxScore} />}
                {!this.state.inGame && <Start changeStatus={this.changeStatus} />}
                <Board board={this.state.board} handleUserPress={this.handleUserPress} magic={this.state.magicNumber} />
            </div >
        )
    }

}