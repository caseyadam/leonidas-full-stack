import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../aux/Aux';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show; 
        // || nextProps.children !== this.props.children;
    }
    
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    >
                    {/* {this.props.children} */}
                    <h1>Product page with cart functionality coming soon!</h1>
                    <span role="img" aria-label="femaleSurfer">🏄</span>
                    <span role="img" aria-label="repair">🔧</span>
                    <span role="img" aria-label="maleSurfer">🏄</span>
                </div>
            </Aux>
        )
    }
}

export default Modal;