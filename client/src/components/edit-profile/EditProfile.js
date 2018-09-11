import React, { Component } from 'react';
import classes from './EditProfile.css';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/selectlistgroup/SelectListGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      firstname: '',
      lastname: '',
      street: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
      this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile) {
        const profile = nextProps.profile.profile;

        // If profile field doesnt exist, make empty string
        profile.firstname = !isEmpty(profile.firstname) ? profile.firstname : '';
        profile.lastname = !isEmpty(profile.lastname) ? profile.lastname : '';
        profile.street = !isEmpty(profile.street) ? profile.street : '';
        profile.unit = !isEmpty(profile.unit) ? profile.unit : '';
        profile.city = !isEmpty(profile.city) ? profile.city : '';
        profile.state = !isEmpty(profile.state) ? profile.state : '';
        profile.zip = !isEmpty(profile.zip) ? profile.zip : '';

        // Set component fields state
        this.setState({
            handle: profile.handle,
            firstname: profile.firstname,
            lastname: profile.lastname,
            street: profile.street,
            unit: profile.unit,
            city: profile.city,
            state: profile.state,
            zip: profile.zip
        });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      street: this.state.street,
      unit: this.state.unit,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const options = [
      { label: '* Select State', value: '' },
      { label: 'Alabama', value: 'AL' },
      { label: 'Alaska', value: 'AK' },
      { label: 'Arizona', value: 'AZ' },
      { label: 'Arkansas', value: 'AR' },
      { label: 'California', value: 'CA' },
      { label: 'Colorado', value: 'CO' },
      { label: 'Conneticut', value: 'CT' },
      { label: 'Delaware', value: 'DE' },
      { label: 'Florida', value: 'FL' },
      { label: 'Georgia', value: 'GA' },
      { label: 'Hawaii', value: 'HI' },
      { label: 'Idaho', value: 'ID' },
      { label: 'Illinois', value: 'IL' },
      { label: 'Indiana', value: 'IN' },
      { label: 'Iowa', value: 'IA' },
      { label: 'Kansas', value: 'KS' },
      { label: 'Kentucky', value: 'KY' },
      { label: 'Louisiana', value: 'LA' },
      { label: 'Maine', value: 'ME' },
      { label: 'Maryland', value: 'MD' },
      { label: 'massachusetts', value: 'MA' },
      { label: 'Michigan', value: 'MI' },
      { label: 'Minnesota', value: 'MN' },
      { label: 'Mississippi', value: 'MS' },
      { label: 'Missouri', value: 'MO' },
      { label: 'Montana', value: 'MT' },
      { label: 'Nebraska', value: 'NE' },
      { label: 'Nevada', value: 'NV' },
      { label: 'New Hampshire', value: 'NH' },
      { label: 'New Jersey', value: 'NJ' },
      { label: 'New Mexico', value: 'NM' },
      { label: 'New York', value: 'NY' },
      { label: 'North Carolina', value: 'NC' },
      { label: 'North Dakota', value: 'ND' },
      { label: 'Ohio', value: 'OH' },
      { label: 'Oklahoma', value: 'OK' },
      { label: 'Oregon', value: 'OR' },
      { label: 'Pennsylvania', value: 'PA' },
      { label: 'Rhode Island', value: 'RI' },
      { label: 'South Carolina', value: 'SC' },
      { label: 'South Dakota', value: 'SD' },
      { label: 'Tennessee', value: 'TN' },
      { label: 'Texas', value: 'TX' },
      { label: 'Utah', value: 'UT' },
      { label: 'Vermont', value: 'VT' },
      { label: 'Virginia', value: 'VA' },
      { label: 'Washington', value: 'WA' },
      { label: 'West Virginia', value: 'WV' },
      { label: 'Wisconsin', value: 'WI' },
      { label: 'Wyoming', value: 'WY' }
    ];

    return (
      <div className={classes.editProfile}>
        
        <h1 className={classes.h1}>Edit Your Profile</h1>
        {/* <small>* = required fields</small> */}
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
              placeholder="* Profile Handle"
              name="handle"
              value={this.state.handle}
              onChange={this.onChange}
              error={errors.handle}
              // info="A unique handle for your profile URL."
            />
            <TextFieldGroup
              placeholder="First Name"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
              error={errors.firstname}
            />
            <TextFieldGroup
              placeholder="Last Name"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
              error={errors.lastname}
            />
            <TextFieldGroup
              placeholder="Street"
              name="street"
              value={this.state.street}
              onChange={this.onChange}
              error={errors.street}
            />
            <TextFieldGroup
              placeholder="Apt/Unit"
              name="unit"
              value={this.state.unit}
              onChange={this.onChange}
              error={errors.unit}
            />
            <TextFieldGroup
              placeholder="City"
              name="city"
              value={this.state.city}
              onChange={this.onChange}
              error={errors.city}
            />
            <SelectListGroup
              placeholder="State"
              name="state"
              value={this.state.state}
              onChange={this.onChange}
              options={options}
              error={errors.state}
            />
            <TextFieldGroup
              placeholder="Zip Code"
              name="zip"
              value={this.state.zip}
              onChange={this.onChange}
              error={errors.zip}
            />
            <input
              className={classes.submitBtn}
              type="submit"
              value="Submit"
            />
          </form>
          <Link to="/account">
            <button className={classes.backBtn}>
              Go Back
            </button>
          </Link>

      </div>
    );
  }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
