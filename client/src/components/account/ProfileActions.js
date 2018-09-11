import React from 'react';
import classes from './Account.css';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" >
        <button className={classes.editBtn}>
          Edit Account Info
        </button>
      </Link>
    </div>
  );
};

export default ProfileActions;
