import React, { Component} from 'react';
import classes from '../Help.css';

class Shipping extends Component {
  render () {
    return (
      <div>

        <h1 className={classes.title}>Shipping Info</h1>
        <h3 className={classes.subTitle}>STANDARD SHIPPING</h3>
        <p>
        Orders will be processed for shipment within 1 - 2 business days of receiving, not including weekends or holidays. Items normally ship via UPS Economy (SurePost), a service which partners with USPS for residential delivery. Actual transit times are 2 to 7 business days from shipment. A shipping confirmation email will be sent when your order leaves our warehouse. Billabong currently ships exclusively to contiguous US, Alaska and Hawaii addresses.
        </p>
        <p>
        <h3 className={classes.subTitle}>Contiguous US</h3>
        </p>
        <ul>
          <li className={classes.li}>Economy: $0</li>
          <li className={classes.li}>Economy Broform: $6.95</li>
          <li className={classes.li}>Ground: $6.95</li>
          <li className={classes.li}>Ground Broform: $10.00</li>
          <li className={classes.li}>2nd Day: $15</li>
          <li className={classes.li}>Next Day: $25</li>
        </ul>
        <p>
          <h3 className={classes.subTitle}>Hawaii and Alaska</h3>
        </p>
        <ul>
          <li className={classes.li}>Ground: $0</li>
          <li className={classes.li}>Ground Broform: $12.95</li>
          <li className={classes.li}>2nd Day: $20</li>
          <li className={classes.li}>2nd Day Broform: $29.95</li>
        </ul>
        <p className={classes.subTitle}>INTERNATIONAL ORDERS</p>
        <p>
        We do not offer international shipping at this time. We do not ship to freight forwarders. We apologize for the inconvenience.
        </p>
        <p className={classes.subTitle}>
        QUESTIONS
        </p>
        <p>
        Email our Customer Service at{' '} 
        <a href="mailto:store@leonidas.com">store@leonidas.com</a> or call us Toll Free in the US: (555) 123-4567
        </p>
        				
      </div>
    );
  }
}

export default Shipping
