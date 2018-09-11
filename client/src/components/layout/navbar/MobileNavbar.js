import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import classes from './MobileNavbar.css';
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
        <li className={classes.narrowLi}>
          <Link to="/account" className={classes.registerBtn}>My Account</Link>
        </li>
        <li className={classes.narrowLi}>
          <a href="" 
          onClick={this.onLogoutClick.bind(this)} 
          className={classes.registerBtn}>
            {/* <img 
            src = {user.avatar} 
            alt={user.name} 
            style={{ width: '25px', marginRight: '5px', borderRadius: '20px' }}
            title="You must have a Gravatar image connected to your email to display an image." /> */}
            Logout
          </a>
        </li>{''}
      </ul>
    );

    const guestLinks = (
      <ul className={classes.guestLinksUl}>
        <li className={classes.narrowLi}><Link to="/login" className={classes.registerBtn}>Login</Link></li>
        <li className={classes.narrowLi}><Link to="/register" className={classes.registerBtn}>Sign Up</Link></li>
      </ul>
    );

    return (
      <div className={classes.navNarrow}>
        <ul className={classes.navUlNarrow}>
          <li className={classes.narrowLi}><Link to="/" className={classes.narrowLink}>Home</Link></li>
          <li className={classes.narrowLi}><Link to="/mens" className={classes.narrowLink}>Mens</Link></li>
          <li className={classes.narrowLi}><Link to="/womens" className={classes.narrowLink}>Womens</Link></li>
          <li className={classes.authLi}>{isAuthenticated ? authLinks : guestLinks}</li>
        </ul>
      </div>       
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
