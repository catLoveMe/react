
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{
    constructor(props){
        super(props);
    }
    getSearchKey(event){
        this.props.onFilterTextInput(event.target.value)
    }
    getProductChoose(event){
        this.props.onInStockInput(event.target.checked)
    }
    render(){

        return(
            <form >
                <input type="text"
                       value={this.props.filterText}
                       onChange={this.getSearchKey.bind(this)}
                />
                <p>
                    <input type="checkbox"
                           checked={this.props.inStockOnly}
                           onChange={this.getProductChoose.bind(this)}
                    />
                    {''}
                    only show Products in stock
                </p>

            </form>
        )
    }
}
SearchBar.defaultProps = {
    filterText: 'Stranger'
};
SearchBar.propTypes  = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool,
};

export default SearchBar