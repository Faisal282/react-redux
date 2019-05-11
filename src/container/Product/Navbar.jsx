import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/post">Navbar</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/post">Home</Link>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2 text-center" type="search" value={this.props.order} disabled />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">CART</button>
                </form>
            </nav>
        )
    }
}

export default Navbar;