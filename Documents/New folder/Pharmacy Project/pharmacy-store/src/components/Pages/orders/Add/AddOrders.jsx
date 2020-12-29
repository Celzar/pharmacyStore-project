import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { query_product } from '../../../../Redux/Actions/query/product.action'
import { query_order_date } from '../../../../Redux/Actions/query/order_date.action'
import Axios from 'axios';


const selector = (state) => ({
    storemanager: state.Storemanagement
})
const dispatcher = {
    query_product

}

const AddOrders = (props) => {

    const [product_ID, setproduct_ID] = useState('');
    const [date, setdate] = useState(new Date().toISOString().substr(0, 10));
    const [amount, setamount] = useState();
    const [price, setprice] = useState();


    useEffect(() => {
        props.query_product()

    }, [])

    const product_list = () => {
        const list = props.storemanager.product
        return list.map((value, index) => {
            return (<option value={value.product_ID} style={{ color: '#272932' }}>{value.product_name}</option>)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            order_date_ID: '',
            product_ID: product_ID,
            Amount: amount,
            price: price,
        }

        // query order date first if exists
        Axios.post('http://localhost:8000/order/date/query', { order_date: date })
            .then(res => {
                //if exists get the result id as order_ID's value and insert new order only
                if (res.data.success) {
                    //update data.order_date_ID
                    data.order_date_ID = res.data.date[0].order_date_ID
                    Axios.post('http://localhost:8000/order/add', data)
                        .then(res => {
                            if (res.data.success) {
                                alert('nice')
                            }

                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                // if not exists insert new order date and new order
                else {
                    Axios.post('http://localhost:8000/order/date/add', { order_date: date })
                        .then((res) => {
                            if (res.data.success) {
                                //update data.order_date_ID
                                data.order_date_ID = res.data.date
                                Axios.post('http://localhost:8000/order/add', data)
                                    .then(res => {
                                        if (res.data.success) {
                                            alert('nice')
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            setTimeout(() => {
                                alert(err.response.data.message)
                            }, 5000)

                        })
                }
            })
    }

    return (
        <div>
            <div style={{ background: '#F05D5E', color: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
                <br />
                <div className='container' style={{

                }} id='LoginBox'>
                    <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}>Add New Orders</h1>

                    <div style={{
                        background: '#272932', width: '100%',
                        'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                        'padding': '5%'
                    }} className='container '>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>

                            {/* order date */}
                            <label htmlFor='date' className='text-left' >order date</label><br />
                            <input type='date' className='mb-3' maxLength='30' id="date" name="date"
                                onChange={(e) => setdate(e.target.value)}
                                value={date}
                                style={{
                                    background: '#FFFFFF',
                                    borderRadius: '',
                                    width: '100%',
                                    border: '#FF715B 1px solid',
                                    outline: 'none',
                                    height: '2.5em'
                                }} />

                            {/* <button onClick={()=>console.log(product_ID)}>test</button> */}


                            {/* product Name */}
                            <label htmlFor='product_ID' className='text-left' >product</label><br />
                            <select className="form-control mb-3" id="category" placeholder='choose product'
                                onChange={(e) => setproduct_ID(e.target.value)}
                            >
                                <option style={{ color: '#272932' }}>choose product</option>
                                {product_list()}
                            </select>

                            {/* price */}
                            <label htmlFor='amount' className='text-left' >Amount</label><br />
                            <input type='number' className='mb-3' id="amount" name="amount"
                                placeholder='000000'
                                onChange={(e) => setamount(e.target.value)}
                                value={amount}
                                style={{
                                    background: '#FFFFFF',
                                    borderRadius: '', width: '100%',
                                    border: '#FF715B 1px solid',
                                    outline: 'none',
                                    height: '2.5em'
                                }} />


                            {/* price */}
                            <label htmlFor='price' className='text-left' >Price</label><br />
                            <input type='number' className='mb-3' id="price" name="price"
                                placeholder='000.000'
                                onChange={(e) => setprice(e.target.value)}
                                value={price}
                                style={{
                                    background: '#FFFFFF',

                                    borderRadius: '', width: '100%',
                                    border: '#FF715B 1px solid',
                                    outline: 'none',
                                    height: '2.5em'
                                }} />


                            <br />
                            <br />
                            <br />
                            <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                            <center><button className='text-center' id='LoginButton'
                                style={{}}
                            >Add order</button>
                            </center>
                            <br />
                            {/* <span>No Account? <Link to='' style={{ color: '#FF715B' }}>Create one!</Link></span> */}
                        </form>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default connect(selector, dispatcher)(AddOrders);
