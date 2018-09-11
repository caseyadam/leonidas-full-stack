import React from 'react';
import classes from './textField.css';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {

  return (
    <div className={classes.inputContainer}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={classes.inputStyling}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className={classes.formText}>{info}</small>}
      {error && <div className={classes.invalidFeedback}>{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
