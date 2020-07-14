import React, { Component } from 'react';
import axios from 'axios';
import "./viewproductStyle.css";
import "bootstrap/dist/css/bootstrap.min.css.map";
import "bootstrap/dist/css/bootstrap.min.css";


export default class ViewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      photo :'',
      condition :'',
      color : '',
      retailprice :0,
      brand : '',
      gender: '',
      
    }
  }

  componentDidMount() {
    axios.get('https://stockx.com/api/products/'+this.props.match.params.id+'?includes=market,360&currency=EUR&country=FR')
      .then(response => {
        
         this.setState({
 
          title: response.data.Product.title,
          description: response.data.Product.description,
          photo: response.data.Product.media.smallImageUrl,
          condition: response.data.Product.condition,
          color : response.data.Product.colorway,
          brand : response.data.Product.brand,
          retailprice : response.data.Product.retailPrice,
          gender: response.data.Product.gender
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

   /* axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.title),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })*/

  }


  render() {
    return (
        <div className="container">
           <div className="heading-section">
            <h2>Product Details</h2>
        </div>
        <div className="row">
            <div className="col-md-6 allcontent">
                <div id="slider" className="product-slider">
                    <div className="item">
                          <img class="photo"src= {this.state.photo} />
                    </div>
                    <div className="col-md-6">
                <div className="product-dtl">
                    <div className="product-info">
                        <div className="product-name">{this.state.title}</div>
                        <div className="reviews-counter">
                            <div className="rate">
                                <input type="radio" id="star5" name="rate" value="5" checked />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" checked />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" checked />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label htmlFor="star1" title="text">1 star</label>
                              </div>
                            <span>Reviews</span>
                        </div>
                        <div className="product-price-discount"><span>${this.state.retailprice}</span></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="size">Brand </label>
                            <span className="form-control">
                                 {this.state.brand}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="color">Color </label>
                            <span className="form-control">
                                {this.state.color}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="color">Condition  </label>
                            <span className="form-control">
                                {this.state.condition}
                            </span>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="color">Gender  </label>
                            <span className="form-control">
                                {this.state.gender}
                            </span>
                        </div>
                    </div>
                    <div className="product-count">
                        <a href="#" className="round-black-btn">Buy Now</a>
                    </div>

                 </div>
                 <div className="product-info-tabs">
            
                    <div className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</div>

                  <div>
                     {this.state.description}
                  </div>
                  
        </div>
            </div>
        </div>
        </div>
        
    </div> 
    
    </div>
    )
  }
}