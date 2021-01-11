import React,{Component} from 'react';
import style from './outline.module.css'
import { withRouter } from 'react-router-dom';

class Outline extends Component{
    state={
        msg:this.props.chat
    }
    chatHandler=(name)=>{
        console.log('chatHAndler')
        this.props.chatHandler();
        this.props.history.push('chat/'+name);
        // this.props.history.push('check');
    }
    
    render(){
        // console.log(this.props);
        return(
            <div className={style.outer}>
                {this.props.chat.map((ele)=>{
        return <div key={ele.name} onClick={()=>this.chatHandler(ele.name)} className={style.message}>
                    <div className={style.img}>
                    </div>
                    {ele.name}
                </div>
        })}
            </div>
        )
    }
}

export default withRouter(Outline);