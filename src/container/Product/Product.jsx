import React, {Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import Navbar from "./Navbar";

class Product extends React.Component{
    state = {
        order: 0
    }
    handleCounterChange = (newVal) => {
        this.setState({
            order: newVal
        });
    }
    render(){
        return(
            <Fragment>
                <Navbar order={this.state.order}/>
                <CardProduct onCounterChange={(val) => this.handleCounterChange(val)}/>
            </Fragment>
        )
    }
}

export default Product;