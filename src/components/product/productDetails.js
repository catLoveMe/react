import React, {Component } from 'react';

class ProcuctDatails extends Component{
    constructor(){
        super();
        this.state = {
            detailsData : [],
            isToggleOn:false
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            isToggleOn:!prevState.isToggleOn
        })
    }
    getClickthis(){
        console.log('this is:', this);
    }
    componentDidMount(){
        fetch('/fairCom.json').then(res => {
            return res.json()
        }).then(data => {
            let recode = data.find(selfitem => selfitem.id == this.props.match.params);
            this.setState({
                detailsData:recode
            })
        })
    }
    getValue(e){
        e.preventDefault()//阻止默认行为只能使用该方法，不能使用return false
    }
    render(){
        return(
            <div>
                <button onClick={this.getValue.bind(this)}>点击阻止默认事件</button>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={(e) => this.getClickthis(e)}>点击</button>
                {/* 
                <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
                <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
                <h1>商品详情页面</h1>
            </div>
            
        )
    }
}
export default ProcuctDatails