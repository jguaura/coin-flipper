import React, { Component } from 'react';
import './coin.style.css'

class Coin extends Component {
    render(){
        return(
            <div className='container'>
                <img src={this.props.coin} alt="coins" />
            </div>
        )
    }
}

export default Coin;