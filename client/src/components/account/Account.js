import React, { Component } from 'react';
import classes from './Account.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile, deleteAccount} from '../../actions/profileActions';
import LoadingImg from '../common/LoadingImg.js';
import ProfileActions from './ProfileActions';

class Account extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let accountContent;

        if(profile === null || loading){
            accountContent = <LoadingImg />
        } else {
            // Check if logged in user has profile data
            if(Object.keys(profile).length > 0) {
                accountContent = 
                <div className={classes.authActionsContainer}>
                    <h1 className={classes.h1}>My Account</h1>
                    <p className={classes.p}>Welcome {user.name}!
                    {/* <Link to={`/profile/${profile.handle}`} className={classes.routerLink}>{user.name}</Link>! */}
                    </p>
                    <ProfileActions />
                    <button onClick={this.onDeleteClick.bind(this)} className={classes.deleteBtn}>Delete My Account</button>
                </div>
            } else {
                // User is logged in but has no profile
                accountContent = (
                    <div className={classes.authActionsContainer}>
                        <h1 className={classes.h1}>Account</h1>
                        <p className={classes.h2}>Welcome {user.name}!</p>
                        <p className={classes.p}>You have not created an account. Please add your info.</p>
                        <Link to="/create-profile" className={classes.editBtn}>Add Account Info</Link>
                    </div>
                )
            }
        }

        return (
            <div className={classes.accountContainer}>
                {accountContent}
            </div>
        )
    }
}

Account.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};  

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});    

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Account);