import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './jumbotron.css';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
    return (
        <div class="bckgrnd">
            <div class="jumbotron jumbotron-fluid">
                <h1 class="title">L e t ' s  P l a y</h1>
                <Link to='/browseFields'><button type="button" class="btn-jumb btn btn-success" >Book Now</button></Link>
            </div>
        </div>
    )
}

export default Jumbotron
