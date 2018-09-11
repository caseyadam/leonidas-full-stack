import React, { Component} from 'react'
import classes from './Banner.css';
import MaleSurfer from './img/maleSurfer2.jpg'

class MensHeader extends Component {
  render () {
    return (
      <nav>
        <div className={classes.topImg}>
          <img src={MaleSurfer} className={classes.listingsBanner} alt="surfer"/>
        </div>
      </nav>
    );
  }
}

export default MensHeader
