import React, { Component} from 'react';
import classes from './Listings.css';
import { Link } from 'react-router-dom';
import Modal from '../../layout/modal/Modal';

class Listings extends Component {

  constructor () {
    super()
    this.state = {
      name: 'InitializeState',
      purchasing: false
    }
    this.loopListings = this.loopListings.bind(this)
    // this.purchaseHandler = this.purchaseHandler.bind(this)
  }

  // purchaseHandler = () => {
  //   this.setState({purchasing: true});
  // }

  loopListings () {
    var {listingsData} = this.props

    if(listingsData === undefined || listingsData.length === 0) {
      return "Sorry, your filter did not match any listing."
    }

    // INFO BOXES AND THE TWO VIEW TYPES
    return listingsData.map((listing, index) => {
      // THIS IS THE BOX VIEW OPTION
      // if(this.props.globalState.view == 'box') {
        return (
        <div className={classes.boxView} key={index}>
          <div className={classes.listing}>
            <div className={classes.listingImg} style={{background: `url("${listing.image}") no-repeat center center`}}>
              <div className={classes.details}>
                <Link 
                  // to={`/product/${listing.brand}/${listing.id}`} 
                  to="/product"
                  className={classes.viewBtn}
                >
                  VIEW
                </Link>
                {/* <button
                  className={classes.OrderButton}
                  // disabled={!props.purchasable}
                  onClick={state.ordered}>}
                </button> */}
              </div>
            </div>
            <div className={classes.bottomInfo}>
              <span className={classes.location}> {listing.brand} </span>
              <span className={classes.price}>${listing.price}</span>
            </div>
          </div>
        </div>)
      }
      // else {
        // THIS IS LONG VIEW OPTION
        // return (<div className={classes.listView} key={index}>
        //   <div className={classes.listing}>
        //     <div className={classes.listingImg} style={{background: `url("${listing.image}") no-repeat center center`}}>
        //       <div className={classes.details}>
        //           <div className={classes.viewBtnLong}>
        //             View Item
        //           </div>
        //       </div>
        //     </div>
        //     <div className={classes.bottomInfo}>
        //       <span className={classes.price}>${listing.price}</span>
        //       <span className={classes.location}> {listing.brand} </span>
        //     </div>
        //   </div>
        // </div>)
      // }
    // }
    )
  }

  render () {
    return (   
    <div className={classes.listings}>

      <Modal show={this.state.purchasing} />

      {/* Search bar */}
      <div className={classes.searchArea}> 
        <input type="text" name="search" placeholder="Search" onChange={this.props.change} />
      </div>

      {/* Sorting options */}
      <div className={classes.sortByArea}>
        <div className={classes.results}>{this.props.globalState.filteredData.length} results found</div>
        <div className={classes.sortOptions}>
          {/* <select name="sortby" onChange={this.props.change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select> */}
          {/* <div className={classes.view}>
            <img src={ListIcon} className={classes.listingIcon} aria-hidden="true"
              onClick={this.props.changeView.bind(null, "long")}/>
            <img src={GridIcon} className={classes.listingIcon} aria-hidden="true"    onClick={this.props.changeView.bind(null, "box")}/>
          </div> */}
        </div>
      </div>

      {/* Listing */}
      <div className={classes.listingsResults}>
        <div className={classes.row}>
          {this.loopListings()}
        </div>
      </div>

  </div>)
  }
}

export default Listings