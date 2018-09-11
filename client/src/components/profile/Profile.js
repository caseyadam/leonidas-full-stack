import React, { Component } from 'react';
import classes from './Profile.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import LoadingImg from '../common/LoadingImg';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      // Redux action to get profile from backend
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  // 
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    // Destructuring to take out profile and loading from profile state in props (mapStateToProps)
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <LoadingImg />;
    } else {
      profileContent = (
        <div>
          <div className={classes.row}>
            <div className={classes.col}>
              <Link to="/account" className={classes.btn}>
                Back To Account
              </Link>
            </div>
            <div className={classes.col} />
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
        </div>
      );
    }

    return (
      <div className={classes.profile}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.row}>{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
// Profile coming in through state
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
