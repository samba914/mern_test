import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { runInThisContext } from 'vm';
import "./productStyle.css";

const Product = props => (
    <div className="block">
         <div className="top">
                <ul>
                    <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                    <li><span className="converse">{props.product.brand}</span></li>
                    <li>
                        <a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </a>
                    </li>
                </ul>
        </div>
        <div className="middle">
        <img src={props.product.media.smallImageUrl} alt="pic" />
        </div>
            
            <div className="bottom">
                <div className="heading">{props.product.title}</div>
                <div className="style">{props.product.colorway}</div>
                <div className="price">${props.product.retailPrice} </div>
                <div className="band-buy" >
                    <Link className="t-buy-now" to={"/edit/"+props.product._id}>Consulter</Link> 
                </div>
         </div>
            
    </div>
)


export default class ProductsList extends Component {
    constructor(props){
        super(props);

        this.state = {products :[]};

        
    }
    componentDidMount(){
        axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR')
            .then(response => {
               // console.log(response.data.Products);
               this.setState({products: response.data.Products});
            })
            .catch((error)=>{
                console.log(error);

            }
            )
    }

    
    productList() {
        console.log(this.state.products);
        return this.state.products.map(currentProduct => {
            return <Product product={currentProduct} key={currentProduct._id}/>;
          })
      }

    render() {
        return (
            <div>
                
                <Helmet>
                    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                </Helmet>
                { this.productList() }
                
            </div>
        )
    }
}