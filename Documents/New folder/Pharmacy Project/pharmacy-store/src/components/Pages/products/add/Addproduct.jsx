import React, { useState, useEffect } from 'react';
import './Addproduct.css'

import Axios from 'axios'
import { connect } from 'react-redux'

//@Action
import { query_category } from '../../../../Redux/Actions/query/category.action'


const mapStateToProps = (state) => ({
    storemanager: state.Storemanagement
})

const mapDispatchToProps = {
    query_category
}

const Addproduct = (props) => {

    const [selectedFile, setSelectedFile] = useState();
    const [img, setimg] = useState('');

    const [product_name, setproduct_name] = useState('');
    const [product_detail, setproduct_detail] = useState('');
    const [manufactured, setmanufactured] = useState('');
    const [expiration, setexpiration] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [image_link, setimage_link] = useState('');
    const [price, setprice] = useState('');

    //@use category id for select tag as value of option value
    const [category_ID, setcategory_ID] = useState('');

    //@for alert warning when insert new product get error 
    const [successAlert, setsuccessAlert] = useState(false);
    const [alertMessage, setalertMessage] = useState('');

    //@for alert warning when insert new product get error 
    const [warningAlert, setwarningAlert] = useState(false);



    const handleChange = (e) => {
        setSelectedFile(e.target.files[0])
        setimg(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : '')
    }


    const handleSubmit = (e) => {
        e.preventDefault()


        const product = {
            category_ID: category_ID,
            image_link: image_link,
            product_name: product_name,
            Details: product_detail,
            price: price,
            Manufacturer: manufacturer,
            Manufactured: manufactured,
            Expiration: expiration
        }

        //@check if image file was selected
        if (selectedFile) {
            let formData = new FormData()
            formData.append('image', selectedFile)

            Axios.post('http://localhost:8000/uploadproductimg', formData, { header: { 'Content-Type': 'multipart/form-data' } })
                .then(res => {
                    if (res.data.success) {
                        setimage_link(res.data.link)

                        if (image_link) {
                            product.image_link = image_link
                            console.log(product)
                            Axios.post('http://localhost:8000/addproduct', product)
                                .then(res => {
                                    if (res.data.success) {
                                        setsuccessAlert(true)
                                        setalertMessage(res.data.message)
                                    }
                                    // else {
                                    //     setalert(false)
                                    //     alertMessage(res.data.message)
                                    // }
                                    setTimeout(() => {
                                        setsuccessAlert(false)
                                    }, 3000);


                                }).catch(err => {
                                    //@error handler insert product
                                    console.log(err)
                                    if (err.response.data.success === false) {
                                        setwarningAlert(true)
                                        setTimeout(() => {
                                            setwarningAlert(false)
                                        }, 3000)
                                        setalertMessage(err.response.data.message)
                                    }
                                })
                        }
                    }

                }).catch(err => {
                    //@error handler upload image
                    console.log(err)
                })

        } else {

            //@No selected file
            Axios.post('http://localhost:8000/addproduct', product)
                .then(res => {
                    if (res.data.success) {
                        setsuccessAlert(true)
                        setalertMessage(res.data.message)

                        setTimeout(() => {
                            setsuccessAlert(false)
                        }, 3000);
                    }



                }).catch(err => {
                    //@error handler insert product
                    console.log(err)
                    if (err.response.data.success === false) {
                        setwarningAlert(true)
                        setalertMessage(err.response.data.message)
                        setTimeout(() => {
                            setwarningAlert(false)
                        }, 3000)

                    }
                })
        }


    }


    // query data from category and map them to select tag
    const queriedCategory = () => {
        const queried = props.storemanager.category
        return queried.map((value, index) => {
            return (
                <option value={value.category_ID} style={{ color: '#272932' }}>{value.category_name}</option>
            )
        })


    }

    useEffect(() => {
      
        props.query_category()

    }, [])

    console.log(category_ID)
    return (
        <div style={{ background: '#F05D5E', color: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
            <br />
            <div className='container' style={{

            }} id='LoginBox'>
                <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}>Add New Product</h1>
                <div className="alert alert-warning position-sticky" role="alert" style={{ display: warningAlert ? '' : 'none', top: 0 }} >
                    {alertMessage}
                </div>
                <div className="alert alert-success position-sticky" role="alert" style={{ display: successAlert ? '' : 'none', top: 0 }}>
                    {alertMessage}
                </div>


                <div style={{
                    background: '#272932', width: '100%',
                    'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                    'padding': '5%'
                }} className='container '>


                    {/* {text()} */}
                    <form onSubmit={handleSubmit} >

                        {/* product img */}
                        <img src={img} className='mb-3' style={{ width: '100%', 'max-height': '100%', objectFit: 'contain', display: img === '' ? 'none' : '', }} name='img' id='img' />
                        <label htmlFor='img' className='text-left' style={{ display: img != '' ? 'none' : 'block', color: '#FF715B' }}>choose image file: </label>
                        <input type='file' className='mb-3' onChange={handleChange} name='product_img' accept="image/png, image/jpeg,image/gif" placeholder='' />
                        <br />
                        <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                        <br />

                        {/* <p>{props.category[0].category_name}</p> */}

                        {/* product name */}
                        <label htmlFor='product_name' className='text-left' >Product name</label><br />
                        <input type='text' className='mb-3' maxLength='30' id="product_name" name="product_name" required
                            onChange={(e) => setproduct_name(e.target.value)}
                            value={product_name}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />


                        {/* manufaacturer name */}
                        <label htmlFor='manufacturer' className='text-left' >Manufacturer</label><br />
                        <input type='text' className='mb-3' maxLength='30' id="manufacturer" name="manufacturer"

                            onChange={(e) => setmanufacturer(e.target.value)}
                            value={manufacturer}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />

                        {/* category list */}
                        <label htmlFor='category' className='text-left' >category</label><br />
                        <select className="form-control" id="category" placeholder='choose category' onChange={(e) => setcategory_ID(e.target.value)}>
                            <option style={{ color: '#272932' }}>choose category</option>
                            {queriedCategory()}
                        </select>
                        <br />




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

                        {/* manufactured date */}
                        <label htmlFor='manufactured' className='text-left' >Manufactured</label><br />
                        <input type='date' className='mb-3' id="manufactured" name="manufactured"

                            onChange={(e) => setmanufactured(e.target.value)}
                            value={manufactured}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />

                        {/* expiry date */}
                        <label htmlFor='expiration' className='text-left' >Expiration</label><br />
                        <input type='date' className='mb-3' maxLength='30' id="expiration" name="expiration"
                            // placeholder='Email'
                            onChange={(e) => setexpiration(e.target.value)}
                            value={expiration}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '',
                                width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />

                        {/* product detail */}
                        <label htmlFor='product_detail' className='text-left' >Product Details</label><br />
                        <textarea type='date' className='mb-3' maxLength='800' id="product_detail" name="product_detail"
                            placeholder='please enter product details' required
                            onChange={(e) => setproduct_detail(e.target.value)}
                            value={product_detail}
                            cols="50" rows='6'
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                // height: '10em'
                            }} />

                        {/* @submit button */}
                        <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                        <center><button className='text-center' id='LoginButton'
                            style={{}}
                        >Add product</button>
                        </center>

                    </form>

    

                </div>

            </div>

        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Addproduct);
