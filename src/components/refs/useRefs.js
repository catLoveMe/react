//使用refs的情况
// 1. 处理焦点，文本选择，或者媒体控制
// 2. 触发强制动话
// 3. 集成第三方Dom库
//不能再函数组件上使用refs,无用
import React , {Component } from 'react'

class UseRefs extends Component{
    constructor(props){
        super(props)
    }
    focus(){
        this.textInput.focus();
    }
    submit( event){
        console.log(this.input.value)
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <input type="text"
                       ref={(input) => { this.textInput = input; }}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus.bind(this)}
                />
                <div>
                    <form onSubmit={this.submit.bind(this)}>
                        <input type="text"
                            ref={(input) => {this.input = input}}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )

    }
}
export default UseRefs