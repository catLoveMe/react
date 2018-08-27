import React, { Component } from 'react';
import './App.scss';
import 'whatwg-fetch'
import { BrowserRouter, Route , Switch, Redirect, Link,  } from 'react-router-dom'
import navbar from './components/navBar'
import  CommentBox  from './components/commentBox/commentBox'
import  Product  from './components/product/product'
import  ProductDetails  from './components/product/productDetails'
import  ConditionIf  from './components/condition/conditionif'
import  Form  from './components/form/form'
import  Calculator  from './components/statePromotion/Calculator'
import  FilterTable  from './components/filterData/filterTable'
import  UseRefs  from './components/refs/useRefs'

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <ul>
                        <li><Link to='/commonBox'>评论列表</Link></li>
                        <li><Link to='/Product'>商品列表</Link></li>
                        <li><Link to='/if'>条件渲染</Link></li>
                        <li><Link to='/form'>表单渲染</Link></li>
                        <li><Link to='/calculator'>状态提升</Link></li>
                        <li><Link to='/filtertable'>数据过滤</Link></li>
                        <li><Link to='/UseRefs'>使用Refs</Link></li>
                    </ul>
                    {/*<navbar/>*/}
                    <Switch>
                        {/*<Route path="/" component={App}></Route>*/}
                        <Route path='/commonBox' component={CommentBox}/>
                        <Route path='/Product' component={Product}/>
                        <Route path='/productDetails/:index' component={ProductDetails}/>
                        <Route path='/if' component={ConditionIf}/>
                        <Route path='/form' component={Form}/>
                        <Route path='/calculator' component={Calculator}/>
                        <Route path='/filtertable' component={FilterTable}/>
                        <Route path='/UseRefs' component={UseRefs}/>
                    </Switch>
                </div>

            </BrowserRouter>
        </div>

    );
  }
}

export default App;
// 数据自顶向下，单向数据流
//Switch只渲染出第一个与当前访问地址匹配的Route或者Redirect
//BrowserRouter使用了h5 history 的高阶路由组件，去掉#
// React 只会更新必要的部分，更新更改过的部分
// componentDidMount 当组件输出到Dom后会执行componentDidMount
// componentWillUnmount中可以
// 状态state更新可能是异步的
// this.setState((prevState, props) => ({
//     counter: prevState.counter + props.increment
//   }));

//在典型的react数据流中，props是父组件与子组件交流的唯一方式，但某些特殊情况下可以使用refs