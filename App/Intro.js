import React from 'react';

function Intro(props) {
    console.log(props);
    return(
        <div className="intro-wrapper">
            <h1>Do you have a Lead ID?</h1>
            <button
                onClick={() => props.onBtnClick(true)}
            >
                Yes
            </button>
            <button
                onClick={() => props.onBtnClick(false)}
            >
                No
            </button>
        </div>
    )
}

export default Intro;