/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Headline from '../Headline/Headline';
import './Content.css'
import Bookmark from '../Bookmark/Bookmark';

const Content = () => {
    const [headlines,setHeadline] =useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setHeadline(data))
    },[])
// time function
    let [counter,setCounter] =useState(0);
    const handlerToShowTime=(headline)=>{
        console.log(headline)
        setCounter(counter+ JSON.parse(headline.min))
      }
  
    //   saved content function
    let [number,setNumber]=useState([])
    let [saveItem,setSaveItem] =useState([])
    const handlerToCountItem=(headline)=>{
         let newNumber =[...number,headline];
         setNumber(newNumber)
         
         setSaveItem(<li>{saveItem+headline.disclaimer}</li>)
    }

    return (
        <div className='container'>
           <div className='headline-container'>
           {
                headlines.map(headline=><Headline
                headline={headline}
                key ={headline.id}
                handlerToCountItem ={handlerToCountItem}

                handlerToShowTime ={handlerToShowTime}
                ></Headline>)
            }
           </div>
           <div className='saved-container'>
            <Bookmark counter ={counter}
            number={number}
            saveItem={saveItem}
            ></Bookmark>
           </div>
        </div>
    );
};

export default Content;