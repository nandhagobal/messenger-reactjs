import React, { Component } from 'react'
import style from './chatarea.module.css'
import { Switch, Route } from 'react-router-dom'
import Outline from '../outline/outline'

class chatArea extends Component{
    state={
        msg:[],
        temp:''
    }
    sentHandler(){
        var arr=this.state.msg;
        arr.push(this.state.temp);
        console.log(arr);
        this.setState({msg:arr,temp:''});
        console.log("pushed");
    }
    store(e){
        this.setState({temp:e.target.value});
    }

    render(){
        var list;
        list=this.state.msg.map(ele=>{
            // console.log(ele)
         return <span key={ele} className={style.bottomRight} >{ele}</span>
        }
        );
        
    return(
        <div className={style.outer}>
            <div className={style.msgText}>
                <span className={style.bottomLeft}>sender</span>
                {list}
            </div>
           <div className={style.msgBox}>
               <span className={style.emoji}><i class="fas fa-grin"></i></span>
               <input type="text" name="msg" placeholder="Type a message" value={this.state.temp} onChange={e=>this.store(e)}></input>
               <span className={style.send} onClick={e=>this.sentHandler()}><i class="far fa-paper-plane"></i></span>
           </div>
        </div>
    )
    }
}

export default chatArea;