import React, { useState, useEffect } from 'react';
import './Home.css'
import { connect } from 'react-redux'
import { Row, Col, Jumbotron, Container } from 'react-bootstrap'

import { query_product } from '../../../Redux/Actions/query/product.action'


const selector = (state) => ({
    storemanager: state.Storemanagement
})

const dispatcher = {
    query_product
}


const Home = (props) => {

    useEffect(() => {
        props.query_product()
    }, [])

    const product_list = () => {
        const list = props.storemanager.product
        return list.map((value, index) => {
            return (
                <Col sm='10' lg='4' className=''>

                    {value.image_link ?
                        <img src={value.image_link}
                            style={{
                                width: '100%',
                                'object-fit': 'scale-down'
                            }} /> : (<img className='card-img-top' src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176aef0b18a%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176aef0b18a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.4140625%22%20y%3D%2296.4828125%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"
                                style={{
                                    width: '100%',
                                    'object-fit': 'scale-down'
                                }} />
                        )
                    }

                    <div className="alert alert-dark" role="alert">
                        {value.product_name}
                    </div>


                </Col>
            )
        })
    }

    return (
        <div style={{ background: '#F05D5E', color: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
            <br />
            <div className='container' style={{

            }} id='HomeBox'>
                <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}><div className="alert alert-secondary" role="alert">
                    pharmacy store
            </div></h1>

                <div style={{
                    background: '#272932', width: '100%',
                    'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                    'padding': '5%'
                }} className='container '>
                    <div style={{marginBottom: '8%'}}>
                        <Jumbotron fluid id='branner'
                            style={{
                                // color: '#000000', backgroundImage: `url('https://images.pexels.com/photos/3683106/pexels-photo-3683106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
                                // 'background-position': 'center',
                                // color: '#000000'

                            }} >

                            <Container style={{  background: '#fff3b0', padding: '1%', position: 'absolute' }}>
                                {/* <div style={{ background: '#f1f1f1', padding: '2%', position: 'absolute' }}> */}

                                    <h1>Fluid jumbotron</h1>
                                    <p>
                                        This is a modified jumbotron that occupies the entire horizontal space of
                                        its parent.
                                </p>

                                {/* </div> */}
                            </Container>
                        </Jumbotron>
                    </div>
                    <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                    <Row style={{
                        background: '#272932',
                        // 'box-shadow': '20px 20px 60px #21232b,-20px -20px 60px #2d2f3a'
                    }} className='mt-5'>
                        {product_list()}
                    </Row>



                </div>
            </div>
        </div >
    );
}

export default connect(selector, dispatcher)(Home);
