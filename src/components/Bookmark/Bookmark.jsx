/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Bookmark.css'

const Bookmark = (props) => {

    const counter =props.counter;
    const number =props.number;
    const saveItem=props.saveItem;

    return (
        <div className='save-container'>
            <div>
                <p>Time spent on reading:{counter}min</p>
            </div>
            <div>
                <h3>Bookmarks blogs:{number.length}</h3>

                <h4>{saveItem}</h4>
            </div>
        </div>
    );
};

export default Bookmark;