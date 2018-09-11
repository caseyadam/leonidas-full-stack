import React, { Component} from 'react';
import classes from '../Help.css';
import CVC from './img/cvc.jpg';

class Contact extends Component {
  render () {
    return (
      <div className={classes.helpContent}>

        <h1 className={classes.title}>FAQ</h1>

        <h3 className={classes.subTitle}>Has my order shipped?</h3>
        <p>You will receive a shipping confirmation notice via email when your order has left the warehouse. If it has been more than a few business days since placing your order and you have not received shipping confirmation, please contact customer service at <a class="customerservice" href="mailto:store@leonidas.com">store@leonidas.com</a> or by calling (555) 123-4567.</p>
        
        <h3 className={classes.subTitle}>How can I track my order?</h3>
        <p>You will receive a shipping confirmation notice via email when your order has left the warehouse. It will contain subTitlermation to track your order. You can also view your tracking subTitlermation on your order history page, once you have logged into your account.  If you have any subTitles, please contact customer service at 
        <a class="customerservice" href="mailto:store@leonidas.com">store@leonidas.com</a> or by calling (555) 123-4567.</p>
        
        <h3 className={classes.subTitle}>Why is my tracking subTitlermation not appearing?</h3>
        <p>Once your package has shipped, it may take up to 48 business hours for tracking subTitlermation to appear on a carrier’s website. This is due to the timing of updates made by the carrier’s tracking system. If it has been more than a few business days since receiving shipping confirmation and you do not see tracking subTitlermation, please contact customer <a href="mailto:store@leonidas.com">store@leonidas.com</a> or by calling (555) 123-4567.</p>
        
        <h3 className={classes.subTitle}>There is a problem with my shipment, what should I do?</h3>
        <p>Please contact customer service at <a class="customerservice" href="mailto:store@leonidas.com">store@leonidas.com</a> or by calling (555) 123-4567.</p>
        
        <h3 className={classes.subTitle}>My order never arrived.</h3>
        <p>Please contact customer service at <a class="customerservice" href="mailto:store@leonidas.com">store@leonidas.com</a> or by calling (555) 123-4567.</p>
        
        <h3 className={classes.subTitle}>How can I get a copy of my invoice?</h3>
        <p>You can download a copy of your invoice on the orders page, once you have logged into your account.</p>

        <h3 className={classes.subTitle}>I ordered the wrong stuff! What do I do?</h3>
        <p>Once you place an order at leonidas, you cannot make changes through the online store. Please call us as soon as possible at (555) 123-4567.</p>
                    
        <h3 className={classes.subTitle}>When will my order ship?</h3>
        <p>Orders will be processed for shipment within one to two business days of receiving, not including weekends or holidays. Items normally ship via UPS Economy (SurePost), a service which partners with USPS for residential delivery. Actual transit times are 2 to 7 business days from shipment. A shipping confirmation email will be sent when your order leaves our warehouse. leonidas currently ships exclusively to contiguous US, Alaska and Hawaii addresses.</p>

        <h3 className={classes.subTitle}>Timing of billing</h3>
        <p>Your credit card will only be charged once your order has shipped. Most orders ship
        within two business days of receiving your order. You will receive a shipping confirmation
        email once your order ships from the warehouse.</p>
        
        <h3 className={classes.subTitle}>Do I have to pay sales tax?</h3>          
        <p>leonidas is required by law to collect sales and use tax on total taxable product and shipping and handling charges for orders in the following states:</p>
        <p>Arizona, California, Colorado, Connecticut, Florida, Georgia, Hawaii, Illinois, Maryland, New York Texas, Virginia, and Washington.</p>
        
        <h3 className={classes.subTitle}>Accepted forms of payment</h3>
        <p>We accept all major credit cards: Visa, Mastercard, Discover, American Express and PayPal. *Please note: The Credit Card must have a United States billing address.</p>

        <h3 className={classes.subTitle}>If I order the wrong size can I return the item?</h3>
        <p>Unused product may be returned using our free return shipping labels for full refund within 30 days of purchase. We do not offer direct exchanges. If you wish to exchange any part of your order, you will need to create a return for a full refund, and purchase the new item. Please allow 7-14 days from return receipt for credits to be issued.</p>

        <h3 className={classes.subTitle}>How do I return an item when I completed a purchase as a guest?</h3>
        <p>For orders purchased through guest checkout, you will need to email our customers service team at <a href="mailto:store@leonidas.com">store@leonidas.com</a>.  For complete return instructions please visit our <a href="https://us.leonidas.com/page/help/returns">Return Policy</a> page.
        </p>

        <h3 className={classes.subTitle}>Can I return an item that I have used?</h3>
        <p>Sorry, only products in new, unused condition will be accepted for returns. View <a class="customerservice" href="/page/help/ordering">return policy</a></p>

        <h3 className={classes.subTitle}>Warranty</h3>
        <p>All products are covered under our standard warranty policy. Please contact customer service at (555) 564-1745 or email us at <a href="mailto:store@leonidas.com">store@leonidas.com</a> for more subTitlermation.</p>

        <h3 className={classes.subTitle}>Catalog Unsubscribe</h3>
        <p>If you would to no longer receive the mailed catalog, please visit the link here to unsubscribe.  View <a href="https://us.leonidas.com/page/help/catalog-unsubscribe">Catalog Unsubscribe</a></p>

        <h3 className={classes.subTitle}>What is a CSC code?</h3>
        <p>A card security code is an added safeguard for your credit card purchases. Depending on the type of credit card you use, it is a 3- or 4-digit number printed on the back or front of your credit card. For most online credit card purchases from us, the security code is required subTitlermation. For Visa, your identification number is the 3-digit number found on the back of your credit card near the signature panel.</p>
          
        <p><img src={CVC} alt="cvc code location" className={classes.cvc} /></p>

        <h3 className={classes.subTitle}>Is your site secure?</h3>
        <p>Our secure servers protect your subTitlermation using advanced encryption and firewall technology throughout the ordering process. Most browsers will show a lock icon in the bottom status bar on secure pages. Look for this icon on any web page that asks for your personal subTitlermation. To further ensure your security, we use state of the art SSL (Secure Sockets Layer) encryption to protect your personal subTitlermation from unauthorized use.
        <br/>View<a class="customerservice" href="/page/help/privacy-policy">privacy policy</a></p>

      </div>
    );
  }
}

export default Contact
