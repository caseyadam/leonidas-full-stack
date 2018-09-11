import React, { Component} from 'react';
import classes from '../Help.css';

class Returns extends Component {
  render () {
    return (
      <div>

        <h1 className={classes.title}>RETURNS</h1>

        <p>Returns will be processed within 7-10 days of receiving. You will be notified via email once your refund has been approved in our system.</p>

        <h3 className={classes.subTitle}>30-DAY RETURNS (Free within 15 days)</h3>

        <p> If you are not satisfied with your purchase, you may return it within 30 days. Returns are free if we receive your package within 15 days of your order date. Please allow 7 days of transit time. If we receive your package after 15 days of your order date, a $5 shipping fee will be deducted from your refund.</p>

        <h3 className={classes.subTitle}>RETURN POLICY</h3>
        <ul>
          <li> Merchandise must be returned within 30 days. For free
          return shipping, your package must be received within 15 days.</li>
          <li>Merchandise that’s missing tags, worn, altered, or washed may be subject to a restocking fee or be rejected.</li>
          <li>Shipping charges incurred during checkout are not refundable.</li>
          <li>Packages that arrive COD may be denied, or the COD amount may be deducted from your return.</li>
        </ul>

        <h3 className={classes.subTitle}>EXCHANGES</h3>
        <p> Due to high demand, we do not offer merchandise exchanges. Tip: You'll get the right product fastest if you place
        a second order while returning your first order. </p>

        <h3 className={classes.subTitle}>RETURN PROCESS</h3>
        <p>To return a purchase, please follow the following instructions:</p>

        <ol>
          <li>Log in to your account and go to the My Account section. Click View Orders and select the order containing the items you would like to return.</li>	
          <li>Complete and submit the online RA request form, and print the free return shipping label. If your order is past 30 days then no RA form will appear.</li>	
          <li>Pack product with suitable packaging materials. Ensure that return includes merchandise in original, unused condition, with original packing materials, and affix return label to your return.</li>	
          <li>Drop your return package off at any UPS shipping location.</li>
        </ol>

        <p> We will notify you as soon as your return is processed. If you have any questions, please contact customer service at <a href="tel:+15551234567">(555) 123-4567</a> or email <a href="mailto:store@leonidas.com">store@leonidas.com</a> for assistance.</p>

        <h3 className={classes.subTitle}>GUEST CHECKOUT RETURN PROCESS</h3><p>
        For orders purchased through guest checkout, you will need to email our customers service team at{' '} 
        <a href="mailto:store@leonidas.com">store@leonidas.com</a> to obtain a free return shipping label, then follow steps 3 and 4 above. Please include your order number in your email.</p>

        <h3 className={classes.subTitle}>MILITARY APO/FPO RETURNS PROCESS</h3>
        <p>
        For orders shipped to a military address, you will need to ship the item back via any carrier of your choice. Please keep the tracking number provided by your carrier for your records as proof of your return shipment. Unfortunately we cannot refund any fees charged by that carrier. Please keep the tracking number provided by your carrier for your records as proof of your return shipment. Also, be sure to include a copy of the attached Return Authorization. Returns are being processed within 7- 10 business days from the date received in our warehouse. No need to follow up. You will receive an email confirmation once your refund is completed.</p>				
      </div>
    );
  }
}

export default Returns
