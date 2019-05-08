import React, {Component, Fragment} from "react";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from '../BlogPost/BlogPost';

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
            // <div>
            //     {this.state.showComponent == true ? <LifeCycleComp /> : null}
            // </div>
            <div>
                <BlogPost/>
            </div>
        );
    }
}

export default Home;