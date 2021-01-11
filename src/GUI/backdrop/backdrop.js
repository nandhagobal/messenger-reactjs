import React from 'react'
import style from './backdrop.module.css'

const Backdrop =(props)=>{
    return(
        <div className={style.backdrop}>{props.children}</div>
    )
}

export default Backdrop;