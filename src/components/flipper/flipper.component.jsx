import React, { Component } from 'react';
import Coin from '../coin/coin.component';
import heads from '../../assets/heads.jpg';
import tails from '../../assets/tails.jpg'
import './flipper.css';

class Flipper extends Component {
    constructor(props){
        super(props)
        this.state = {
            coins: {
                head: heads,
                tails: tails
            },
            decider: 0,
            flipCount: 0,
            headsCount: 0,
            tailsCount: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        let decider = Math.floor(Math.random() * 2)
        let count = this.state.flipCount;
        let headsCount = this.state.headsCount;
        let tailsCount = this.state.tailsCount;

        !decider ? headsCount++ : tailsCount++
        count++
        this.setState(currentState => ({ 
            decider: decider,
            flipCount: count,
            headsCount: headsCount,
            tailsCount: tailsCount
         }))
    }

    handleClick() {
        this.flipCoin()
    }
    render(){
        return (
            <div className="flipper">
                <h1>Let's flip a coin!</h1>
                <Coin 
                    coin={this.state.decider === 0 ? this.state.coins.head : this.state.coins.tails}
                />
                <button onClick={this.handleClick}>flip me</button>
                <p>
                    Out of {this.state.flipCount} flips, there have been  {this.state.headsCount} heads and {this.state.tailsCount} tails
                </p>
            </div>
        )
    }
}

export default Flipper