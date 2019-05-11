import React, {Fragment} from "react"
import "./BlogPost.css"
import Post from "../../component/Post/Post";
import axios from "axios";
// import withoutProps from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose'

class BlogPost extends React.Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
            this.setState({
                post: res.data
            });
        });
    }
 
    postDataToApi = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then(() => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: ''
                }
            })
            // console.log(res);
        }, (error) => {
            console.log(error);
        });
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res) => {
            console.log(res);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        })
        .then(() => { alert("data berhasil di update") })
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            (res.status === 200) ? alert("data berhasil dihapus") : alert('data gagal dihapus')
            this.getPostAPI()
        });
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp
        }

        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log(this.state.formBlogPost)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.formBlogPost);
        if (this.state.isUpdate) {
            this.putDataToApi();
            this.getPostAPI();
        } else {
            this.postDataToApi();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`detail-post/${id}`);
    }

    componentDidMount(){
        // dengan es6

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // dengan axios
        // axios.get('http://localhost:3004/posts')
        // .then((res) => {
        //     this.setState({
        //         post: res.data
        //     });
        // });


        // dengan function
        this.getPostAPI();
    }
    render() {
        return(
            <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="container mb-5 p-5">
                <form>
                    <div className="form-group">
                        <label for="exampleInputTitle1">Title</label>
                        <input type="text" className="form-control" id="exampleInputTitle1"
                            aria-describedby="TitleHelp" placeholder="Enter Title" name="title" onChange={this.handleFormChange}
                            value={this.state.formBlogPost.title}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputTitle1">Body</label>
                        <textarea className="form-control" placeholder="Enter body" name="body" onChange={this.handleFormChange}
                        value={this.state.formBlogPost.body}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>SIMPAN</button>
                </form>
            </div>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} data={post} title={post.title} desc={post.body} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}></Post>
                })
            }
            <hr/>
            </Fragment>
        );
    }
}

export default BlogPost;