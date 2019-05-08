import React, {Component, Fragment} from "react";

class CardProduct extends React.Component{
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }
    
    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            });
        } else {
            alert('data anda sudah paling rendah')
        }
    }
    render(){
        return(
            <div>
                <p>{this.state.order}</p>
                <button onClick={this.handleMinus}>KURANG</button>
                <input type="text" name="order" id="order" value={this.state.order} style={{ textAlign: "center" }}/>
                <button onClick={this.handlePlus}>TAMBAH</button>
            </div>
        );
    }
}

export default CardProduct;