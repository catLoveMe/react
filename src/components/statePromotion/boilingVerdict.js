
import React, { Component } from 'react';

class BoilingVerdict extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.celsius>=100) {
            return <p>水会烧开</p>
        }
        return <p>水不会烧开</p>
    }

}

export default BoilingVerdict