import React, { Component } from 'react';
import classes from './WomensProducts.css'
import Filter from './filter/Filter.js'
import Listings from './listings/Listings.js'
import Banner from '../../components/layout/banners/WomensBanner.js'
import listingsData from '../../data/womensData.js'

class SearchArea extends Component {

  constructor() {
    super()
    this.state = {
      listingsData,
      id: 'All',
      brand: 'All',
      itemType: 'All',
      color: 'All',
      min_price: 0,
      max_price: 100,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    // this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    let listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }

  change(event){
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      this.filteredData()
    })
  }

  // changeView(viewName){
  //   this.setState({
  //     view: viewName
  //   })
  // }

  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price
      && item.price <= this.state.max_price
    })

    if(this.state.brand !== "All") {
      newData = newData.filter((item) => {
        return item.brand === this.state.brand
      })
    }

    if(this.state.itemType !== "All") {
      newData = newData.filter((item) => {
        return item.itemType === this.state.itemType
      })
    }

    if(this.state.color !== "All") {
      newData = newData.filter((item) => {
        return item.color === this.state.color
      })
    }

    if(this.state.sortby === 'price-dsc') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby === 'price-asc') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }
    //Search by brand
    if(this.state.search !== ''){
      // eslint-disable-next-line
      newData = newData.filter((item) => {
        let brand = item.brand.toLowerCase()
        let searchText = this.state.search.toLowerCase()
        let n = brand.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    // brand
    var brands = this.state.listingsData.map((item) => {
      return item.brand
    })
    brands = new Set(brands)
    brands = [...brands]
    brands = brands.sort()

    // itemType
    var itemTypes = this.state.listingsData.map((item) => {
      return item.itemType
    })
    itemTypes = new Set(itemTypes)
    itemTypes = [...itemTypes]
    itemTypes = itemTypes.sort()

    // color
    var color = this.state.listingsData.map((item) => {
      return item.color
    })
    color = new Set(color)
    color = [...color]
    color = color.sort()

    this.setState({
      populateFormsData: {
        itemTypes,
        brands,
        color
      }
    }, () => {
      console.log(this.state)
    })

  }

  render() {
    return (
      <div className = {classes.contentArea}>
        <Banner />
        <Filter 
          change = {this.change} 
          globalState = {this.state} 
          populateAction = {this.populateForms}
        />
        <Listings 
          listingsData = {this.state.filteredData} 
          change = {this.change} 
          globalState = {this.state} 
          // changeView={this.changeView}
        />
      </div>
    );
  }
}

export default SearchArea;
