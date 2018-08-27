import React, { Component } from 'react'
import CommentList  from './commentList'
import CommentFrom  from './commentFrom'

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentData:[
                {author:"zhangsan",time:"lisi",content:"1212121"},
                {author:"zhangsan11",time:"121212",content:"1212121"},
                {author:"zhangsan2222",time:"li212si",content:"1212121"}
            ]
        }
    }
    update(params){
        let tempData = this.state.commentData;
        tempData.push(params);
        this.setState({
            commentData:tempData
        })
    }
    render(){
        let arr = this.state.commentData.map((item,index) => {
            return(
                <CommentList key={index} author={item.author} time={item.time}>{item.content}</CommentList>
            )
        })
        return(
            <div>
                <h1>展示组件</h1>
                {arr}
                <CommentFrom onUpdate={this.update.bind(this)}/>
            </div>

        )
    }
}
export default CommentBox