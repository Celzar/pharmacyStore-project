import react, { useState } from 'react'
import './App.css';

//@Libaries
import { Switch, Route } from 'react-router-dom'


//@ Components
import Navbar from './components/Navbar/Navigationbar'
import SignUp from './components/Pages/Sign Up/SignUp'
import Login from './components/Pages/login/Login'
import Home from './components/Pages/Home/Home'

//@product management
import Addproduct from './components/Pages/products/add/Addproduct'
import Updateproduct from './components/Pages/products/update/Updateproduct'


//@Orders management
import QueryOrders from './components/Pages/orders/query/QueryOrders'
import AddOrders from './components/Pages/orders/Add/AddOrders'

//@Order date management
import AddOrder_date from './components/Pages/order_date/AddOrder_date'





function App() {

  return (
    <div className="App" >
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />

        <Route exact path='/Signup' component={SignUp} />
        <Route exact path='/login' component={Login} />

        {/* <Route exact path='/orders/date/add' component={AddOrder_date} /> */}

        <Route exact path='/orders/add' component={AddOrders} />
        <Route exact path='/orders/query' component={QueryOrders} />



        <Route exact path='/product/update' component={Updateproduct} />
        <Route exact path='/product/add' component={Addproduct} />

      </Switch>

    </div>
  );
}

export default App;
