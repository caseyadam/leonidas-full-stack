import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Toolbar.css';
import HelmetIcon from '../img/helmet.png';
// import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Link to="/" className={classes.navLogoLink}>
        <div className={classes.Logo}>
            <img src={HelmetIcon} alt="Leonidas logo" className={classes.helmetIcon}/>
        </div>
        </Link>
    </header> 
);

export default toolbar;