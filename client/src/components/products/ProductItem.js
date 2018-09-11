import React, { Component} from 'react'
import PropTypes from 'prop-types';
import classes from './ProductItem.css'
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";

class ProductItem extends Component {

  render() {

    // From parent component, not redux
    const { product } = this.props;

    return (
        <div className={classes.boxView}>
          <div className={classes.listing}>
            <div className={classes.listingImg} style={{background: `url("${product.image}") no-repeat center center`}}>
              <div className={classes.details}>
                <Link 
                to={`/product/${product.brand}/${product.id}`} 
                className={classes.viewBtn}
                >
                  View
                </Link>
              </div>
            </div>
            <div className={classes.bottomInfo}>
              <span className={classes.location}> {product.brand} </span>
              <span className={classes.price}>${product.price}</span>
            </div>
          </div>
        </div>)
    // );

  }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};
  
export default ProductItem;