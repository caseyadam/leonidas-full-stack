import React, { Component} from 'react';
// import classes from './Account.css';

class Account extends Component {
  render () {
    return (
        <div>
        
            <div>
                <h1>SIGN IN</h1>
                <h6>Email</h6>
                <h6>Password</h6>
                <button>SIGN IN</button>
            </div>

            <div>
                <h1>CREATE A NEW ACCOUNT</h1>
                <p>Create a Leonidas customer account for easy access to order history, order tracking and faster future checkouts.</p>
                <button>CREATE AN ACCOUNT</button>
            </div>
            
        </div>
    );
  }
}

export default Account
