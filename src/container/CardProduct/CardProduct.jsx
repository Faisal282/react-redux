import React from "react";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";

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
        console.log(this.props);
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

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder,
    }
}

export default connect(mapStateToProps)(CardProduct);
// export default connect(maps, dispatch)(CardProduct);