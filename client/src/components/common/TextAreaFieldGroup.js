import React from 'react';
import classes from './textField.css';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={classes.textFieldGroup}
      />
      {info && <small>{info}</small>}
      {error && <div>{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;