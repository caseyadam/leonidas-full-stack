import React, { Component } from 'react'
import classes from './Filter.css';

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'InitializeState'
    }
    this.brands = this.brands.bind(this)
    this.itemTypes = this.itemTypes.bind(this)
    this.color = this.color.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
  // adds data to the Brand filter
  brands() {
    if(this.props.globalState.populateFormsData.brands !== undefined) {
      var { brands } = this.props.globalState.populateFormsData
      return brands.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  // adds data to the Types filter option in the left hand column
  itemTypes() {
    if(this.props.globalState.populateFormsData.itemTypes !== undefined) {
      var { itemTypes } = this.props.globalState.populateFormsData
      return itemTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  color() {
    if(this.props.globalState.populateFormsData.color !== undefined) {
      var { color } = this.props.globalState.populateFormsData
      return color.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  // LEFT HAND COLUMN WITH FILTER OPTIONS
  render () {
    return (
      <section className={classes.filter}>
      <div className={classes.inside}>

        <h4 htmlFor="brand" className={classes.filterLabel}>BRAND</h4>
        <select name="brand" className={classes.filters} onChange={this.props.change}>
          <option value="All">All</option>
          {this.brands()}
        </select>

        <h4 htmlFor="brand" className={classes.filterLabel}>CLOTHING TYPE</h4>
        <select name="itemType" className={classes.filters} onChange={this.props.change}>
          <option value="All">All</option>
          {this.itemTypes()}
        </select>

        <h4 htmlFor="brand" className={classes.filterLabel}>COLOR</h4>
        <select name="color" className={classes.filters} onChange={this.props.change}>
          <option value="All">All</option>
          {this.color()}
        </select>

        <h4 htmlFor="brand" className={classes.filterLabel}>SORT BY PRICE</h4>
        <div className={classes.sortOptions}>
          <select name="sortby" onChange={this.props.change}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
        </div>

        <div className={classes.filters}>
          <h4 htmlFor="brand" className={classes.filterLabel}>PRICE RANGE</h4>
          <input 
            type="text" 
            name="min_price" 
            className={classes.minPrice} 
            onChange={this.props.change} 
            value={this.props.globalState.min_price} />
          <input 
            type="text" 
            name="max_price" 
            className={classes.maxPrice} 
            onChange={this.props.change} 
            value={this.props.globalState.max_price} />
        </div>
      </div>
    </section>
    )
  }
}

export default Filter