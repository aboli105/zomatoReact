import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import Details from './component/details/restDetails';

import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewOrder';
import Login from './component/login/loginComponent';
import Register from './component/login/registerComponent'


const Routing = () => {
    return(
        <BrowserRouter>
           
                <Route exact path="/" component={Home}/>
           
                <Route path="/listing/:id" component={Listing}/>
               
<Route exact path="/details" component={Details}/>
<Route path="/details/:restId" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/placeOrder" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewOrder}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing











