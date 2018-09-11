import React, { Component} from 'react';
import classes from '../Help.css';

class Contact extends Component {
  render () {
    return (

      <div>
        <h1 className={classes.title}>Contact</h1>

        <h3 className={classes.subTitle}>LEONIDAS</h3>

        <p>187 North Way<br />San Diego, California 92109</p>

        <p><strong>Corporate Office Receptionist: (555) 123-4567</strong></p>

        <p><strong>Customer Service for Wholesale Orders: (555) 123-4567</strong></p>

        <p><strong>Customer Service for Online Orders: (555) 123-4567</strong></p>

        <h3 className={classes.subTitle}>OFFICE HOURS</h3>

        <p>Customer Service: Monday - Friday, 8am - 5pm PST</p>

        <p>Closed Saturday, Sunday and all major holidays.</p>

        <p>Closed Christmas through New Years.</p>
        
        <h3 className={classes.subTitle}>EMAIL</h3>

        <p><strong>Customer Service for Online Orders:</strong><a href="mailto:info@leonidas.com">{' '} store@leonidas.com</a></p>

        <p><strong>Customer Service for Wholesale: </strong><a href="mailto:sales@leonidas.com">sales@leonidas.com</a></p>

        <p><strong>Marketing: </strong><a href="mailto:marketing@leonidas.com">marketing@leonidas.com</a></p>

        <p><strong>Warranty: </strong><a href="mailto:warranty@leonidas.com">warranty@leonidas.com</a></p>

        <p><strong>Corporate Office General Questions: </strong><a href="mailto:store@leonidas.com">reception@leonidas.com</a></p>				
      </div>

    );
  }
}

export default Contact
