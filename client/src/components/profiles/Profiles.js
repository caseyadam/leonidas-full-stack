import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {
  // Calls the profiles as soon as this component mounts
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    // From Redux state
    const { profiles, loading } = this.props.profile;
    let profileItems;
    // If null or loading true...
    if (profiles === null || loading) {
      // display spinner
      profileItems = <Spinner />;
      // If not null or loading...
    } else {
      // Check if there are profiles
      if (profiles.length > 0) {
        // Profiles coming in through mapStateToProps below
        profileItems = profiles.map(profile => (
          // 'profile' here goes to const {profile}  in the render of ProfileItem.js
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
