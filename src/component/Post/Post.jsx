import React from "react"
import './Post.css';

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/640/480/tech" alt="dummy gambar"/>
            </div>
            <div className="content">
                <p className="title" onClick={() => {props.goDetail(props.data.id)}}>{props.title}</p>
                <p className="desc mb-5">{props.desc}</p>
                <button className="btn btn-success" onClick={() => props.update(props.data)}>Update</button>
                <button className="btn btn-danger ml-2" onClick={() => props.remove(props.data.id)}>Hapus</button>
            </div>
        </div>
        // console.log(props.data)
    )
}

export default Post;