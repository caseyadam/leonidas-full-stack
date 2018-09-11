import React, { Component} from 'react';
import classes from './Landing.css';
import { Link } from 'react-router-dom';
import SurfHeader from './img/surf1.jpg'
// Image Grid
import Wetsuits from './img/mensWetsuit.jpg'
import Rashguards from './img/womensRashguard.png'
import Shorts from './img/mensBoardshorts.jpg'
import Tops from './img/womensRashguard2.png'
import Swimsuits from './img/womensSport.png'
import Accessories from './img/mensAccessories.jpg'
// Mini banner
import Left from './img/surfArt.jpg'
import Right from './img/hang1.jpg'
// New Arrivals
import Product1 from './img/womensWetsuit.png'
import Product2 from './img/mensRashguard2.png'
import Product3 from './img/womensRashguard3.png'
import Product4 from './img/mensRashguard.png'
// Featured
import Product5 from './img/womensRashguard4.png'
import Product6 from './img/mensRashguard3.png'
import Product7 from './img/mensRashguard4.png'
import Product8 from './img/womensRashguard5.png'

// Consider using .slice like in ProfileItem.js to display Featured or New items. Add key/values with booleans to the mongoose model schema.

class Landing extends Component {

  render () {
    return (
      <div>
        
        <div className={classes.landingBanner}>
            <img src={SurfHeader} className={classes.bannerImg} alt="header"/>
        </div>

          <div className={classes.landingGridContainer}>
            <div className={classes.landingGrid}>
              <div>
              <Link to="/mens">             
                <img src= {Wetsuits} alt="wetsuits" className={classes.wetsuits}/>
              </Link>
              </div>
              <div className={classes.vertical} >
              <Link to="/womens">
                <img src= {Rashguards} alt="rashguards" className={classes.vertical} />
              </Link>
              </div>
              <div>
              <Link to="/mens">
                <img src= {Shorts} alt="shorts" className={classes.shorts}/>
              </Link>
              </div>
              <div>
              <Link to="/womens">
                <img src= {Tops} alt="tops" className={classes.tops}/>
              </Link>
              </div>
              <div>
              <Link to="/womens">
                <img src= {Swimsuits} alt="swimsuits" className={classes.swimsuits}/>
              </Link>
              </div>
              <div  className={classes.horizontal}>
              <Link to="/mens">
                <img src= {Accessories} alt="accessories" className={classes.accessories}/>
              </Link>
              </div>
            </div>   
            </div>

          <div className={classes.container}>

            <div className={classes.videoContainer}>
              <iframe width="100%" height="540" src="https://www.youtube.com/embed/vFVy1uU9oVA?showinfo=0" title="Surf Jitsu" className={classes.video}></iframe>           
            </div>

            <div className={classes.videoTitleContainer}><h1 className={classes.videoTitle}>Lifestyle with Carol Gracie: Surfers and Black Belts</h1></div>   

            <div className={classes.miniBanner}>
              <div className={classes.miniLeft}>
                <Link to="/womens">             
                  <img src= {Left} alt="Mens products" />
                </Link>
              </div>
              <div className={classes.miniRight}>
                <Link to="/mens">             
                  <img src= {Right} alt="Womens products" />
                </Link> 
              </div>           
            </div>

            <div className={classes.productRow}>
              <h1 className={classes.rowTitle}>NEW ARRIVALS</h1>
              <div className={classes.rowImages}>
                <div className={classes.productContainer} >
                  <Link to="/womens">             
                    <img src= {Product1} alt="wetsuits" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>EAST STREET WETSUIT</p>
                  <p className={classes.productPrice}>$50</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/mens">
                    <img src= {Product2} alt="rashguards" className={classes.rowImg} />
                  </Link>
                  <p className={classes.productName}>BILLABONG RASHGUARD</p>
                  <p className={classes.productPrice}>$60</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/womens">
                    <img src= {Product3} alt="shorts" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>PACIFIC SUN RASHGUARD</p>
                  <p className={classes.productPrice}>$65</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/mens">
                    <img src= {Product4} alt="tops" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>BILLABONG RASHGUARD</p>
                  <p className={classes.productPrice}>$55</p>
                </div>
              </div>
            </div>

            <div className={classes.productRow}>
              <h1 className={classes.rowTitle}>FEATURED PRODUCTS</h1>
              <div className={classes.rowImages}>
                <div className={classes.productContainer} >
                  <Link to="/womens">             
                    <img src= {Product5} alt="wetsuits" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>HURLEY RASHGUARD</p>
                  <p className={classes.productPrice}>$70</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/mens">
                    <img src= {Product6} alt="rashguards" className={classes.rowImg} />
                  </Link>
                  <p className={classes.productName}>RVCA COMPRESSION</p>
                  <p className={classes.productPrice}>$55</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/womens">
                    <img src= {Product7} alt="shorts" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>PHALANX RASHGUARD</p>
                  <p className={classes.productPrice}>$60</p>
                </div>
                <div className={classes.productContainer} >
                  <Link to="/mens">
                    <img src= {Product8} alt="tops" className={classes.rowImg}/>
                  </Link>
                  <p className={classes.productName}>BILLABONG RASHGUARD</p>
                  <p className={classes.productPrice}>$65</p>
                </div>
              </div>
            </div>

        </div> 

      </div>
    );
  }
}

export default Landing

