import React from 'react';

import CloseButton from '../img/x.svg';
import MobileNavbar from '../MobileNavbar';
import classes from './SideDrawer.css';
import Backdrop from '../../backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <img src={CloseButton} alt="Close Button" className={classes.closeButton}/>
                </div>
                <nav>
                    <MobileNavbar />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;