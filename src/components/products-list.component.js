import React, {Component} from 'react';
 import "bootstrap/dist/css/bootstrap.min.css.map";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { runInThisContext } from 'vm';
import "./productStyle.css";
import BootstrapCarouselDemo from './BootstrapCarouselDemo' ;
var i=0;

const Product = props => (

   
    <div className="block">
        <tr>
        <span style={{display:'none'}}>{props.product.title}</span>
        <div className="top">
                <ul>
                    <li><a href="/"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                    <li><span className="converse">{props.product.brand}</span></li>
                    <li>
                        <a href="/"><i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </a>
                    </li>
                </ul>
        </div>
        </tr>

        <tr>
        <div className="middle">
        <img src={props.product.media.smallImageUrl} alt="pic" />
        </div>
        </tr>

         <tr>   
            <div className="bottom">
                <div className="heading">{props.product.title}</div>
                <div className="style">{props.product.colorway}</div>
                
         </div>
         </tr>
         <tr>
         <div className="price">${props.product.retailPrice} </div>
                <div className="band-buy" >
                    <Link className="t-buy-now" to={"/edit/"+props.product._id}>Consulter</Link> 
                </div>
         </tr>
            
    </div>

    
)


export default class ProductsList extends Component {
    constructor(props){
        super(props);

        this.state = {products :[]};

        
    }
  /*  filterFunction() {
        var input, filter, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
       // div = document.getElementById("myDropdown");
        a = document.getElementsByClassName("block");
        for (i = 0; i < a.length; i++) {
          var txtValue = a[i].firstChild.textContent || a[i].firstChild.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
    }*/
    componentDidMount(){
        axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR')
            .then(response => {
               // console.log(response.data.Products);
               this.setState({products: response.data.Products});
            })
            .catch((error)=>{
                console.log(error);

            }
            );

         
                var input= document.getElementById("myInput");
                    input.addEventListener("keyup",function() {
                   
                    var input, filter, a, i;
                    input = document.getElementById("myInput");
                    filter = input.value.toUpperCase();
                   // div = document.getElementById("myDropdown");
                    a = document.getElementsByClassName("block");
                    for (i = 0; i < a.length; i++) {
                      var txtValue = a[i].firstChild.textContent || a[i].firstChild.innerText;
                      if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        a[i].style.display = "";
                      } else {
                        a[i].style.display = "none";
                      }
                    }
                })
           
        

        
    }

    
    productList() {
        console.log(this.state.products);
        
        return this.state.products.map(currentProduct => {
           
            return <Product product={currentProduct} key={currentProduct._id}  />;
          })
      }
    

    render() {
        
        return (
            <div>
                 <div className="App">  
                 <BootstrapCarouselDemo></BootstrapCarouselDemo>  
                  </div> 
                
                <div className="classSearch">
                <input type="text" placeholder="Search.." id="myInput"></input>
                </div>
                <div className="item">
                    <table>
                
                      { this.productList() }

                    </table>
                    
                </div>
                <Helmet>
                        <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
                        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                        
                      
                    </Helmet>
            </div>
        )
    }
}

