import React, { Component } from 'react';
import classes from './Auth.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../../components/common/TextFieldGroup';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/account');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/account');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  render() {

    const { errors } = this.state;

    return (
      <div className={classes.container}>

        <div className={classes.titleContainer}><h1 className={classes.title}>LOG IN</h1></div>
        
        <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />

            </form>
        </div>
        
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
