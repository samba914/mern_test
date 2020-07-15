import React, {Component} from 'react';
 import "bootstrap/dist/css/bootstrap.min.css.map";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { runInThisContext } from 'vm';
import "./productStyle.css";
import BootstrapCarouselDemo from './BootstrapCarouselDemo' ;
import { black } from 'color-name';



const Product = props => (

   
    <div className="block">
        
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
        

        
        <div className="middle">
        <img class="test" src={props.product.media.smallImageUrl} alt="pic" onLoad={function(){console.log("test")}}
          onError={function(){var img=document.getElementsByClassName("test");for (let i = 0; i < img.length; i++) {img[i].src="https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color&updated_at=false"}}}/>
        </div>
        

            
            <div className="bottom">
                <div className="heading">{props.product.title}</div>
                <div className="style">{props.product.colorway}</div>
                
         </div>
         
         
         <div className="price">${props.product.retailPrice} </div>
                <div className="band-buy" >
                    <Link className="t-buy-now" to={"/viewproduct/"+props.product.uuid}>View</Link> 
                </div>
         
            
    </div>

    
)


export default class ProductsList extends Component {
    constructor(props){
        super(props);

        this.state = {
              products :[],
              constProductList:[],
              brandMen: [],
              brandWoman: [],
              Kids:[]
            };

        
    }

    componentDidMount(){
        axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR')
            .then(response => {
               // console.log(response.data.Products);
               this.setState({products: response.data.Products,
                constProductList: response.data.Products
                        });
            })
            .catch((error)=>{
                console.log(error);

            }
            );

        axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR&gender=men')
            .then(response => {
             
               this.setState({brandMen :response.data.Facets.brand});
            })
            .catch((error)=>{
                console.log(error);

            }
            );

            axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR&gender=women')
            .then(response => {
             
               this.setState({brandWoman :response.data.Facets.brand});
            })
            .catch((error)=>{
                console.log(error);

            }
            );
            
            axios.get('https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&order=ASC&country=FR&gender=child')
            .then(response => {
             
               this.setState({Kids :response.data.Facets.brand});
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

    filterProduct(gender,brand){
      
      if(brand!=="All" && gender!=="All" ){
        brand=Object.values(brand)[0]
        //console.log(this.state.constProductList)
        this.setState({

          products: this.state.constProductList.filter(el =>el.brand===brand && el.gender===gender)
        });
      //  console.log(this.state.products)
      }else if(brand==="All" && gender!=="All"){
        console.log("ok")
        this.setState({
          products: this.state.constProductList.filter(el => el.gender ===gender)
        })
        
      }else{
        this.setState({
          products: this.state.constProductList
        })
      }
    }
    
    productList() {
       
        
        return this.state.products.map(currentProduct => {
           
            return <Product product={currentProduct} key={currentProduct._id}  />;
          })
      }
    

    render() {
        const buttonstyle={
          backgroundImage: "linear-gradient(to bottom,#fff 0,#f5f5f5 100%)",
          color: "black",
          textShadow:"unset"
        }
        
        return (
            <div>
                 <div className="App">  
                 <BootstrapCarouselDemo></BootstrapCarouselDemo>  
                  </div> 
                
                <div className="classSearch">
                <input type="text" placeholder="Search.." id="myInput"></input>
                </div>
                <div class="wrap" style={{maxWidth:"unset"}}>
                <div class="menu" style={{float:"left"}}>
                    <div class="mini-menu">
                        <ul>
                        <li class="sub">
                        <a data-toggle="collapse" onClick={()=>this.filterProduct("All","All")}  >All</a>
                        </li>
                    <li class="sub">
                        <a data-toggle="collapse" href="#collapse1">MAN</a>
                        <div id="collapse1"  style={{visibility: "visible"}} class="panel-collapse collapse">
                          <ul>
                            <li>
                            <button style={buttonstyle} onClick={()=>this.filterProduct("men","All")}   key="All"value="All"type="button" class="list-group-item list-group-item-action active">
                                 All
                                   </button>
                                </li>
                          {
                            Object.keys(this.state.brandMen).map(brandmen=> {
                              return <li>
                                <button style={buttonstyle} onClick={()=>this.filterProduct("men",{brandmen})}   key={brandmen}value={brandmen}type="button" class="list-group-item list-group-item-action active">
                                 {brandmen}
                                   </button>
                                </li>;
                            })
                          }
                          </ul>
                       </div> 
                    </li>
                    <li  class="sub">
                        <a data-toggle="collapse" href="#collapse2">WOMAN</a>
                      <div id="collapse2" style={{visibility: "visible"}} class="panel-collapse collapse">
                        <ul>
                        <li>
                               <button style={buttonstyle} onClick={()=>this.filterProduct("women","All")}   key="All"value="All"type="button" class="list-group-item list-group-item-action active">
                                 All
                                   </button>
                                </li>
                        {   
                            Object.keys(this.state.brandWoman).map(brandwomen=> {
                              return <li>
                               <button style={buttonstyle} onClick={()=>this.filterProduct("women",{brandwomen})} key={brandwomen}value={brandwomen}type="button" class="list-group-item list-group-item-action active">
                                 {brandwomen}
                                   </button>
                                </li>;
                            })
                          } 
                        </ul>
                      </div>
                    </li>
                    <li class="sub">
                        <a data-toggle="collapse" href="#collapse3">KIDS</a>
                      <div id="collapse3" style={{visibility: "visible"}} class="panel-collapse collapse">
                        <ul>
                            <li>
                            <button style={buttonstyle} onClick={()=>this.filterProduct("chlid","All")}  key="All"value="All"type="button" class="list-group-item list-group-item-action active">
                                 All
                                   </button>
                                </li>
                        {
                            Object.keys(this.state.Kids).map(brandchild=> {
                              return <li>
                                 <button style={buttonstyle} onClick={()=>this.filterProduct("child",{brandchild})}  key={brandchild}value={brandchild}type="button" class="list-group-item list-group-item-action active">
                                 {brandchild}
                                   </button> 
                               
                                </li>;
                            })
                          } 
                        </ul>
                      </div>
                    </li>
                    </ul>
                  </div>
                </div>
              
                  

                <div className="item" style={{    display: "-webkit-box"}}>
                    
                
                      { this.productList() }

                    
                    
                </div>
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

