import React, { Component } from 'react';
import classes from './Auth.css';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'; 
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

// import classnames from 'classnames';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/account');
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    // console.log(newUser)
  }

  render() {

    const { errors } = this.state;

    return (
      <div className={classes.container}>
      <div className={classes.titleContainer}><h1 className={classes.title}>SIGN UP</h1></div>
        
        <div className={classes.formContainer}>
          <form noValidate onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextFieldGroup
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              // info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
            />
            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <TextFieldGroup
              placeholder="Confirm Password"
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
            />
            <input type="submit" />
          </form>
        </div>

      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

// from reducer index.js
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser }) (withRouter(Register));
