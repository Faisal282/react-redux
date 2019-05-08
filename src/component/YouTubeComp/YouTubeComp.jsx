import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <p>{props.nama}</p>
            <p>{props.kelas}</p>
            <p>desc here</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    nama: "telek"
}

export default YouTubeComp;