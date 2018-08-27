import React,{ Component } from 'react';


class ConditionIf extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true
        }
    }
    greeting(){
        if(this.state.isLogin){
            return `登录成功${this.state.isLogin}`
        }else{
            return `登录失败${this.state.isLogin}`
        }
    }
    render(){
        const res = this.greeting();
        return <h1>这是条件判断{res}</h1>
    }
}
export default ConditionIf

// 组件的render返回是null时，不会影响组件生命周期方法的回调