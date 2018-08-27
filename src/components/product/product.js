import React, {Component } from 'react';
import { Link } from 'react-router-dom'
import ProductList from './productList'

class Product extends Component{
    constructor(){
        super();
        this.state={
            productData:[]
        }
    }
    componentDidMount(){
        fetch('/fairCom.json').then(res => {
            return res.json()
        }).then(data => {
            this.setState({
                productData:data
            })
        })
    }
    render(){
        let arrList = this.state.productData.map((item,index)=>{
           return(
               <Link to={'/productDetails/'+index} key={index}>
                   <ProductList  imgsrc={item.imgsrc} title_blod = {item.title_blod} title={item.title}/>
               </Link>
           )
        });
        return(
            <div>
                {arrList}

            </div>
        )
    }
}
export  default Product