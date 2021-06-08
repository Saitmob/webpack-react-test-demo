import React from 'react';
import './app.less';
import imgSrc from './lion-check.png';
// const imgSrc = require('./lion-check.png') ;
// console.log(imgSrc)
export default function App () {
    return (
        <div><img src={imgSrc} />
            app
        </div>
    )
}