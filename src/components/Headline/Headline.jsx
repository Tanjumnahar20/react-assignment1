/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import images from './../../../src/images/images/boy1.png';
import './Headline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Headline = (props) => {
    const{picture,name,time,disclaimer} =props.headline;

    const handlerToShowTime =props.handlerToShowTime;
    const handlerToCountItem = props.handlerToCountItem;
    
    return (
        <div className='section'>
            <img  src={picture} alt="" />
        <div className='section-flex'>
            <img  style={{width:'50px',height:'50px'}} src={images} alt="" />
        <div className='block'>
        <h3>{name}</h3>
        <p>{time}</p>
        </div>
        <div>
        <p>05min read <span  onClick={()=>handlerToCountItem(props.headline)}   
> <FontAwesomeIcon icon={faBookmark} /></span>
         </p>

        </div>
        </div>
        <h2>{disclaimer}</h2>
        <p> #begginers  #programming</p>
        <button onClick={()=>handlerToShowTime(props.headline)}  > Mark as read </button>
        </div>
    );
};

export default Headline;