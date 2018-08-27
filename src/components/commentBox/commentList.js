
import React,{ Component }  from 'react';

class CommentList extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){//组件在渲染前调用
        // console.log(this.props)
    }
    render(){
        return(
            <div>
                <h3>评论人：{this.props.author}</h3>
                <h3>评论时间：{this.props.time}</h3>
                <h3>评论内容：{this.props.children}</h3>
                {/*放在子组件内容里的参数，在children属性中*/}
            </div>
        )
    }
}
export default CommentList