import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingImg from '../common/LoadingImg';
import ProductItem from './ProductItem';
import { getProducts } from '../../actions/productActions';
// import listingsData from '../../data/womensData.js'

class Products extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products, loading } = this.props.product;
    let productItems;
    // If null or loading true...
    if (products === null || loading) {
        // display spinner
        productItems = <LoadingImg />;
        // If not null or loading...
    } else {
        // Check if there are profiles
        if (products.length > 0) {
        // Products coming in through mapStateToProps below
        productItems = products.map(product => (
            // 'product' here goes to const {product} in the render of ProductItem.js
            <ProductItem key={product.name} product={product} />
        ));
        } else {
        productItems = <h4>No products found...</h4>;
        }
    }

    return (
      <div>
        <h1>Current Products</h1>
            <p>
            Shop the sale
            </p>
            {productItems}
      </div>
    )
  }
}

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    product: state.product
  });

export default connect(mapStateToProps, { getProducts })(Products);