import React,{ Component }  from 'react';
import { Link } from "react-router-dom";

class navbar extends Component {
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/commonBox">评论列表</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default navbar;