
import React, { Component} from 'react';
import classes from './Help.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Account from './account/Account';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
// import SizeChart from './sizechart/SizeChart';
import Payment from './payment/Payment';
import Privacy from './privacy/Privacy';
import Returns from './returns/Returns';
import Shipping from './shipping/Shipping';
import Terms from './terms/Terms';

class Help extends Component {
  render () {
    return (
        <Router>            
            <div className={classes.container}>
            
                <div className={classes.titleWrapper}>
                    <h1 className={classes.helpTitle}>Leonidas Help</h1>
                </div>
                    
                <div className={classes.flexContainer}>
                    <ul className={classes.helpOptions}>
                        {/* <li className={classes.helpLi}><Link to="/login" className={classes.linkHelp}>My Account</Link></li> */}
                        <li className={classes.helpLi}><Link to="/help/contact" className={classes.linkHelp}>Contact</Link></li>
                        <li className={classes.helpLi}><Link to="/help/faq" className={classes.linkHelp}>FAQ</Link></li>
                        {/* <li className={classes.helpLi}><Link to="/help/sizechart" className={classes.linkHelp}>Size Chart</Link></li> */}
                        <li className={classes.helpLi}><Link to="/help/privacy" className={classes.linkHelp}>Privacy Policy</Link></li>
                        <li className={classes.helpLi}><Link to="/help/terms" className={classes.linkHelp}>Terms of Use</Link></li>
                        <li className={classes.helpLi}><Link to="/help/payment" className={classes.linkHelp}>Payment Methods</Link></li>
                        <li className={classes.helpLi}><Link to="/help/returns" className={classes.linkHelp}>Returns</Link></li> 
                        <li className={classes.helpLi}><Link to="/help/shipping" className={classes.linkHelp}>Shipping Info</Link></li>
                    </ul>

                    <div className={classes.helpContent}>
                        <Route exact path="/help/account" component={Account} />
                        <Route exact path="/help/contact" component={Contact} />
                        <Route exact path="/help/faq" component={Faq} />
                        {/* <Route exact path="/help/sizechart" component={SizeChart} /> */}
                        <Route exact path="/help/privacy" component={Privacy} />
                        <Route exact path="/help/terms" component={Terms} />
                        <Route exact path="/help/payment" component={Payment} />
                        <Route exact path="/help/returns" component={Returns} />
                        <Route exact path="/help/shipping" component={Shipping} />
                    </div>
                </div>
            </div>
        </Router>
    );
  }
}

export default Help