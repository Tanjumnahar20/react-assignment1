/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {

    const counter =props.counter;

    return (
        <div className='save-container'>
            <div>
                <p>Time spent on reading:{props.counter}min</p>
            </div>
            <div>
                <h3>Bookmarks blogs:</h3>
            </div>
        </div>
    );
};

export default Bookmark;