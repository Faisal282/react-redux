import React from "react";
import Axios from "axios";

class DetailPost extends React.Component{
    state = {
        post: {
            title: '',
            body: ''
        }
    }


    componentDidMount() {
        let id = this.props.match.params.postId;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            let post = res.data;
            this.setState({
                title: post.title,
                body: post.body
            });
        });
        // console.log(this.props.match.params.postId)
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default DetailPost;