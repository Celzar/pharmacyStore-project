import React, { useState, useEffect } from 'react';
import './Login.css'
//@import libraries 
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'

//@import actions from Redux

import { login } from '../../../Redux/Actions/login/login.action'

const mapDispatchToProps = {
    login
}

const mapStateToProps = (state) => ({
    error: state.ErrorsReducer,
    auth: state.LoginReducer
})

const Login = (props) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let userData = {

            email: email,
            password: password,

        }
        props.login(userData, props.history)


    }


    // useEffect(() => {

    // }, [props.error])



    return (
        <div style={{ background: '#F05D5E', color: '#FFFFFF', width: '100%',  minHeight: '100vh' }}>
            <br />
            <div className='container' style={{

            }} id='LoginBox'>
                <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}>Login</h1>

                <div style={{
                    background: '#272932', width: '100%',
                    'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                    'padding': '5%'
                }} className='container '>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* <br /> */}
                        {/* Email */}
                        <label htmlFor='Email' className='text-left' >Email</label><span className='text-danger mx-3'>{props.error.email}</span>
                        <br />
                        <input type='email' className='mb-3' required maxLength='30' id="email" name="email"
                            // placeholder='Email'
                            onChange={(e) => setemail(e.target.value)}
                            value={email}
                            style={{
                                background: '#FFFFFF',

                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />

                        {/* Password */}
                        <label htmlFor='password' className='text-left'>Password</label><span className='text-danger mx-3'>{props.error.password}</span>
                        <br />
                        <input type='password' className='mb-3' required id="password" name="password"
                            value={password}
                            // placeholder='password'
                            onChange={(e) => setpassword(e.target.value)}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />


                        <br />
                        {/* CheckBox */}
                        <input type='checkbox' value='remember me' id='rem-me' className='mr-1' />
                        <label htmlFor="rem-me" >Remember me</label>

                        <br />
                        <span className='text-danger mx-3'>{props.error.message}</span>
                        <br />
                        <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                        <center><button className='text-center' id='LoginButton'
                            style={{}}
                        >Login</button>
                        </center>
                        <br />

                        <span>No Account? <Link to='' style={{ color: '#FF715B' }}>Create one!</Link></span>
                    </form>
                </div>

            </div>

            {/* <Row className='container' style={{
                'border-radius': '',
                background: '#F05D5E',
                'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                height: '80%',
                width: '60%'
            }}
            >
                <Col></Col>
            </Row> */}
        </div >
    );
}

export default connect(mapStateToProps,
    mapDispatchToProps
)(Login);
