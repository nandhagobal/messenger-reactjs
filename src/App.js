import React, { Component } from 'react';
// import logo from './logo.svg';
import style from './App.module.css';

import Outline from './components/chatComponent/outline/outline';
import Heading from './components/headingComponent/heading';
import { Route, Switch,Redirect } from 'react-router-dom';
import Backdrop from './GUI/backdrop/backdrop';
import ChatArea from './components/chatComponent/chatarea/chatArea';
import Header from './components/chatComponent/headerComponent/header';
// import axios from 'axios'

class App extends Component {
  state={
    auth:true,
    chat:false
  }
  // content=null;
  // startContent=(<);
  chatHandler=()=>{
    console.log('chatHandler')
    this.setState((prev)=>{
      return{
      chat:!prev.chat
    }})
  }
  authHandler=()=>{
    this.setState({
      auth:true
    })
  }
  render(){
  return (
    <div className={style.app}>
      {/* {this.state.chat?this.content:this.startContent} */}
      {this.state.chat?null:<Heading/>}
    <Switch>    
                {/* <Redirect from='/' to='/chat'/> */}
                <Route path='/check' render={()=><div></div>}/>
                <Route path='/chat/:name' render={()=>{
                  return(<React.Fragment>
                    <Header chatHandler={this.chatHandler}></Header>
                    <ChatArea></ChatArea>
                  </React.Fragment>)
                }}></Route>
                <Route path='/chat' render={()=>{
                   return <Outline chat={[{name:'Ghost'},{name:'Ajay'},{name:"Erai"}]} chatHandler={this.chatHandler}></Outline>
                }}>
                    </Route>
                <Route path='/status' render={()=>{
                   return <Outline chat={[]}>Status Area</Outline>
                }}></Route>
                <Route path='/contact' render={()=>{
                   return <Outline chat={[]}>Contact Area</Outline>
                }}></Route>
                {/* <Route path='/chatArea' render={()=><ChatArea></ChatArea>}></Route> */}
                <Route path='/' render={()=>{
                   return <p>welcome to whatsapp duplicate<br></br><center><strong>click chat tab</strong></center>

                   </p>
                }}></Route>
                
      </Switch>
      {!this.state.auth?<Backdrop>not Authenticated
        <br></br>
      <button onClick={this.authHandler}>Login</button>
      </Backdrop>:null}
    </div>

  );
  }
}

export default App;
