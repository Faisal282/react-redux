import React, {Component, Fragment} from "react";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from '../BlogPost/BlogPost';
import "../Product/Product";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Home extends React.Component{
    state = {
        showComponent: true
    }

    componentDidMount() {
        this.setState({
            showComponent: true
        })
    }

    render(){
        return(
            <Fragment>
                <BrowserRouter>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link class="navbar-brand" to="/">WASUK</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/life">Lifecycle <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/product">Product <span class="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={BlogPost}/>
                    <Route path="/life" component={LifeCycleComp}/>
                    <Route path="/product" component={Product}/>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Home;