import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.css';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import facebook from './img/facebook.png'
// import Contact from './contact/Contact';
// import Faq from './faq/Faq';

class Footer extends Component {
  render () {
    return (
      <div className={classes.container}>
         
        <ul className={classes.footerLinks}>
          {/* <li className={classes.footerLi}><Link to="/help/contact" className={classes.footerLink}>Contact</Link></li> */}
          {/* <li className={classes.footerLi}><Link to="/help/sizechart" className={classes.footerLink}>Size Chart</Link></li> */}
          <li className={classes.footerLi}><Link to="/help/faq" className={classes.footerLink}>FAQ</Link></li>
        </ul>
        
        <ul className={classes.socialLinks}>
          {/* <li>Subscribe to our newsletter</li> */}
          <li><img src={instagram} alt="Instagram"/></li>
          <li><img src={twitter} alt="Twitter" /></li>
          <li><img src={facebook} alt="Facebook" /></li>
        </ul>

        <div className={classes.helpContent}>
            {/* <Route exact path="/help/account" component={Account} /> */}
            {/* <Route exact path="/help/contact" component={Contact} />
            <Route exact path="/help/faq" component={Faq} /> */}
            {/* <Route exact path="/help/privacy" component={Privacy} />
            <Route exact path="/help/terms" component={Terms} />
            <Route exact path="/help/payment" component={Payment} />
            <Route exact path="/help/returns" component={Returns} />
            <Route exact path="/help/shipping" component={Shipping} /> */}
        </div>

      </div>
    );
  }
}  

export default Footer