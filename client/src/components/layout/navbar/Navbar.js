import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.css';
import HelmetIcon from './img/helmet.png';
import CartIcon from './img/shopping-cart-solid.svg';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../../actions/authActions';
import {clearCurrentProfile} from '../../../actions/profileActions';

class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render () {
    // eslint-disable-next-line
    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <ul className={classes.authLinksUl}>
        <li className={classes.wideLi}>
          <Link to="/account" className={classes.registerBtn}>My Account</Link>
        </li>
        <li className={classes.wideLi}>
          <a 
          href="" 
          onClick={this.onLogoutClick.bind(this)} 
          className={classes.registerBtn}>
            Logout
          </a>
        </li>{''}
      </ul>
    );

    const guestLinks = (
      <ul className={classes.guestLinksUl}>
        <li className={classes.wideLi}><Link to="/login" className={classes.registerBtn}>Login</Link></li>
        <li className={classes.wideLi}><Link to="/register" className={classes.registerBtn}>Sign Up</Link></li>
      </ul>
    );

    return (
      <nav>
        <div className={classes.navWide}>
          <div className={classes.titleContainer}>
            <Link to="/" className={classes.navLogoLink}>
              <img src={HelmetIcon} alt="Leonidas logo" className={classes.helmetIcon}/>
              <div className={classes.navTitle}>LEONIDAS surf & sport</div>
            </Link>
          </div>
          <ul className={classes.navUlWide}>
            <li className={classes.wideLi}><Link to="/mens" className={classes.wideLink}>Mens</Link></li>
            <li className={classes.wideLi}><Link to="/womens" className={classes.wideLink}>Womens</Link></li>
            <li className={classes.wideLi}>{isAuthenticated ? authLinks : guestLinks}</li>
          </ul>
          <Link to="/cart" className={classes.navLinkCart}><img src={CartIcon} alt="Shopping Cart" className={classes.cartIcon}/></Link>
        </div>       
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar);
