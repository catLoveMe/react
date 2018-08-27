
import React, {Component} from 'react'

class CommentFrom extends Component{
    getComment(){
        console.log(this.myform,"=======");
        this.props.onUpdate(
            {
                author:this.refs.myName.value,
                time:Date.now(),
                content:this.refs.myComment.value
            }
        );
    }
    render(){
        return(
            <div>
                <form >
                    评论人：<input type="text" ref="myName"/>
                    <br/>
                    <textarea name="" id="" cols="30" rows="10" ref="myComment">
                    </textarea>
                    <br/>
                    <button type="button" onClick={this.getComment.bind(this)}>评论</button>
                </form>
            </div>
        )
    }
}
export default CommentFrom