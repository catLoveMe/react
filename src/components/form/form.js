import React, { Component } from "react";


class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            textValue :'',
            selectValue:'one',
            isGoing:false,
            numberOfGuests:"",
            selectData:[
                {value:'one'},
                {value:'tow'},
                {value:'there'}
            ]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChangeArea(event){
        this.setState({
            textValue:event.target.value
        })
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();//阻止表单的默认跳转事件
      }
      handleSelect(event){
          this.setState({selectValue: event.target.value});
      }
    handleInputChange(event){

          let target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render(){
        let optionArr = this.state.selectData.map((item,index)=>{
            return(
                <option value={item.value} key={index}>{item.value}</option>
                )
        }) ;
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />     
                    </label><br/>
                    <textarea value={this.state.textValue} onChange={this.handleChangeArea}/><br/>
                    <select value={this.state.selectValue} onChange={this.handleSelect.bind(this)}>
                        {optionArr}
                        {/*<option value="one">one</option>*/}
                        {/*<option value="tow">tow</option>*/}
                        {/*<option value="there">there</option>*/}
                    </select>
                    <br/>
                    <input type="checkbox" name="isGoing"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange.bind(this)}/>
                    <input type="number" name="isDieing" value={this.state.numberOfGuests}
                           onChange={this.handleInputChange.bind(this)}/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }

}


export default Form