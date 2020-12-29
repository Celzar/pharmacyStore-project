import React, { useState, useEffect } from 'react';
import './SignUp.css'
//@import libraries 
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'

//@import actions from Redux

import { signUp } from '../../../Redux/Actions/signup/signup.action'

const mapDispatchToProps = {
    addNewUser: signUp
}

const mapStateToProps = (state) => ({
    error: state.ErrorsReducer
})

const SignUp = (props) => {


    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let userData = {
            username: username,
            email: email,
            password: password,
            passwordConfirm: confirmPassword
        }
        props.addNewUser(userData, props.history)


    }


    useEffect(() => {

    }, [props.error])



    return (
        <div style={{ background: '#F05D5E', color: '#FFFFFF', 'max-width': '100%',  minHeight: '100vh' }}>
            <br />
            <div className='container' style={{

            }} id='SignupBox'>
                <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}>Sign up</h1>

                <div style={{
                    background: '#272932', width: '100%',
                    'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                    'padding': '5%'
                }} className='container '>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Username */}
                        <label htmlFor='username' className='text-left'>Username</label><span className='text-danger mx-3'>{props.error.username}</span>
                        {/* <span className='text-danger mx-3'>(Your email already exists)</span> */}
                        <br />
                        <input type='text' className='mb-3' required maxLength='20' id="username" name="username"
                            onChange={(e) => setusername(e.target.value)}
                            value={username}
                            // placeholder='username'
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />

                        <br />
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

                        {/* Confirm Password */}
                        <label htmlFor='confirmPassword' className='text-left'>Confirm Password</label><span className='text-danger mx-3'>{props.error.passwordConfirm}</span>
                        <br />
                        <input type='password' className='mb-3' required id="confirmPassword" name="confirmPassword"
                            vakue={confirmPassword}
                            // placeholder='password'
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            value={confirmPassword}
                            style={{
                                background: '#FFFFFF',

                                borderRadius: '', width: '100%',
                                border: '#FF715B 1px solid',
                                outline: 'none',
                                height: '2.5em'
                            }} />


                        {/* <br /> */}
                        {/* CheckBox */}
                        {/* <input type='checkbox' value='remember me' id='rem-me' className='mr-1' /> */}
                        {/* <label htmlFor="rem-me" >Remember me</label> */}

                        <br />
                        <span className='text-danger mx-3'>{props.error.message}</span>
                        <br />
                        <hr style={{ 'border-top': '1px solid #523F38  ' }} />
                        <center><button className='text-center' id='SignupButton'
                            style={{}}
                        >Sign up</button>
                        </center>
                        <br />

                        <Link to='' style={{ color: '#FF715B' }}>Already Have An Account!</Link>
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
    // {
    //     addNewUser: signUp
    // }
)(SignUp);
