
import React , { Component } from 'react';
import './product.scss'
class ProductList extends Component{
    render(){
        return(
            <div>
                <div className="contentBox">
                    <div className="content-item">
                        <img src={this.props.imgsrc} alt=""/>
                        <h5>{this.props.title_blod}</h5>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            </div>
        )
    }


}
export default ProductList