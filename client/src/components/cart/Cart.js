import React, { Component } from 'react';
import classes from './Cart.css';
import BuilderImg from './img/boardBuilder.jpg';
import MaleSurfer from './img/maleSurferEmoji.png';
import FemaleSurfer from './img/femaleSurferEmoji.png';
import Wrench from './img/wrench.png';

class Cart extends Component {
    
    render () {
        return (
            <div>

                <div className={classes.builderImgContainer}>
                    <img src={BuilderImg} className={classes.builderImg} alt="Building a board" />
                </div> 

                <div className={classes.textContainer}>
                    <h1 className={classes.h1}>UNDER CONSTRUCTION</h1>
                    <div className={classes.emojiContainer}>
                        <img src={FemaleSurfer} className={classes.emoji} alt="Female surfer emoji"/>                    
                        <img src={Wrench} className={classes.emoji} alt="Wrench emoji"/>
                        <img src={MaleSurfer} className={classes.emoji} alt="Male surfer emoji"/>
                    </div>
                    <p className={classes.p}>Our website is undergoing maintenance. We should be back shortly. Thank you for you patience.</p>

                </div>

            </div>
        )
    }
}

export default Cart
