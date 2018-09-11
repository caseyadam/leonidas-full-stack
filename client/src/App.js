import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.js';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import classes from './App.css';

import { Provider } from 'react-redux';
import store from './store'; 

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/navbar/Navbar.js';
// import MobileNavbar from './components/layout/navbar/MobileNavbar.js';
import Toolbar from './components/layout/navbar/Toolbar/Toolbar.js';
import SideDrawer from './components/layout/navbar/SideDrawer/SideDrawer.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Account from './components/account/Account.js';
import CreateProfile from './components/create-profile/CreateProfile.js';
import EditProfile from './components/edit-profile/EditProfile.js';
import Landing from './components/layout/landing/Landing.js';
import MensProducts from './components/mensproducts/MensProducts.js';
import WomensProducts from './components/womensproducts/WomensProducts.js';
import Cart from './components/cart/Cart.js';
import ProductPage from './components/products/ProductPage.js';
import Help from './components/help/Help.js';
import Footer from './components/layout/footer/Footer.js';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
}

  render () {
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <div className={classes.bodyFont}>
              <Navbar />
              <Toolbar
                drawerToggleClicked={this.sideDrawerToggleHandler} />
              <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
              {/* <MobileNavbar open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/> */}
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/account" component={Account} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              </Switch>
              <Route exact path="/mens" component={MensProducts} />
              <Route exact path="/womens" component={WomensProducts} />
              <Route exact path="/product" component={ProductPage} />
              <Route exact path="/cart" component={Cart} />
              {/* <Route exact path="/product/:brand/:id" component={ProductPage} /> */}
              <Route exact path="/help/faq" component={Help} />
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    )
    }
  }

export default App;

