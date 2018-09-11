import React from 'react';

import classes from './DrawerToggle.css';
import Bars from '../../img/bars-solid.svg';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        {/* <div></div>
        <div></div>
        <div></div> */}
        <img src={Bars} alt="Dropdown menu" className={classes.closeButton}/>
    </div>
);

export default drawerToggle;