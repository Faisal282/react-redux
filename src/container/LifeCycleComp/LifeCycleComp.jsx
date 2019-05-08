import React, { Component } from "react";

class LifeCycleComp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedGetStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
                count: 2
            });
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        // console.log('next props:', nextProps);
        console.log('this state:', this.state);
        console.log('next state:', nextState);
        console.groupEnd();
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('render')
        return(
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-success" onClick={this.changeCount}>Component Button {this.state.count}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeCycleComp;