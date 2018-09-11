import React, { Component} from 'react';
import classes from '../Help.css';

class Payment extends Component {
  render () {
    return (

      <div>

      <h1 className={classes.title}>Payment Methods</h1>

      <h3 className={classes.subTitle}>ACCEPTED FORMS OF PAYMENT</h3>

      <p>We accept <strong>Visa</strong>, <strong>MasterCard, Discover</strong>, <strong>American Express and PayPal</strong>.</p>
      
      <h3 className={classes.subTitle}>30 DAY FREE RETURN POLICY</h3>
      <p>
      If you are not satisfied with your online purchase you may return items free of charge within 30 days of original purchase.</p>
      
      <p>
      To qualify for a merchandise refund, items must be returned in original, unused condition in original packaging.
      </p>
      
      <h3 className={classes.subTitle}>RETURN CLAIM PROCEDURE</h3>
      <p>
      To return a purchase please follow the steps below;.
      </p>
      <p>
      1. Sign into your account, click on the [Order History] link and select the order number you would like to create a return for.
      </p>
      <p>
      2. Select the items you would like to return and complete the online form. Print one copy to include in the box with your product.
      </p>
      <p>
      3. Pack product in suitable packaging to ensure it is not damaged while in transit and affix the UPS return label to that package.
      </p>
      <p>
      4. We will contact you once we have processed your return to let you know the status of your claim.
      </p>
      <p>
      If you have any questions, please contact customer service at 1(555) 456-7890 or email 
      <a href="mailto:store@leonidas.com">store@leonidas.com</a> for assistance.
      </p>
      <p>
      Please note that Billabong is not responsible for products lost or damaged while in transit.
      </p>				
      </div>

    );
  }
}

export default Payment
