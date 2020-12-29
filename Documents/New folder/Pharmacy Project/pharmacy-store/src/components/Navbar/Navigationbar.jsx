import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//import CSS
import './Navbar.css'

const Navigationbar = (props) => {

    const [buttonList, setbuttonList] = useState(false);
    const [sideNavOnclick, setsideNavOnclick] = useState(false);

    useEffect(() => {

    })

    return (

        <div className='' style={{background: '#F05D5E',zIndex: '10' }}>

            <div style={{ position: 'absolute', display: buttonList ? '' : 'none', boxSizing: 'border-box', width: '100%', height: '100%', overflowX: 'hidden' }} id='sidebar'>
                <Row className='' style={{ display: 'relative', height: '100%' }}  >
                    <Col className='bg-dark' style={{ cursor: 'pointer', opacity: '0.2', zIndex: '10' }}
                        onClick={() => {
                            setbuttonList(false)
                        }}>
                    </Col>
                    <Col className='bg-dark text-center' xs={5} col={5}>
                        <div style={{
                            // background: '#F7E3AF', color: '#577590'
                            color: '#F2A541', zIndex: '10'
                        }}  >
                            <ul style={{ 'list-style-type': 'none', fontWeight: 'bold', padding: '0'}} >
                                <li className=' pt-5'>
                                    <Link to='' style={{  textDecoration: 'none' }} id='navLink'>Home</Link>
                                    </li>
                                <li className=' pt-3'>
                                    <Link to='/Login' style={{ textDecoration: 'none' }} id='navLink'>Login</Link>
                                    </li>
                                <li className=' pt-3'>
                                    <Link to='/Signup' style={{  textDecoration: 'none' }} id='navLink'>Sign Up</Link>
                                    </li>
                                <li className=' pt-3'>
                                    <Link to='' style={{  textDecoration: 'none' }} id='navLink'>Setting</Link>
                                    </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>



            <Row className='' style={{ width: '100%' }}>
                <Col className=''></Col>

                <Col xs={6} sm={6} md={6} lg={6} xl={6} className='py-3' >
                    <center id='Navbar' style={{
                        fontSize: '1rem',
                        boxSizing: 'border-box'
                    }}>
                        {/* <span className='mx-3'><strong>Home</strong></span>
                        <span className='mx-3'><strong>Login</strong></span>
                        <span className='mx-3'><strong>Sign Up</strong></span>
                        <span className='mx-3'><strong>Setting</strong></span> */}


                        <ul style={{ 'list-style-type': 'none', fontWeight: 'bold', padding: '0', }} >
                            <li className=' pt-3 px-3' style={{display: 'inline-block'}}>
                                <Link to='' style={{  textDecoration: 'none' }} id='navLink'>Home</Link>
                                </li>
                            <li className=' pt-3 px-3' style={{display: 'inline-block'}}>
                                <Link to='/Login' style={{  textDecoration: 'none' }} id='navLink'>Login</Link>
                                </li>
                            <li className=' pt-3 px-3' style={{display: 'inline-block'}}>
                                <Link to='/Signup' style={{textDecoration: 'none' }} id='navLink'>Sign Up</Link>
                                </li>
                            <li className=' pt-3 px-3' style={{display: 'inline-block'}}>
                                <Link to='' style={{textDecoration: 'none' }} id='navLink'>Setting</Link>
                                </li>
                        </ul>
                    </center>
                </Col>

                <Col className=''>
                    <div className='text-right py-2' id='buttonList' >
                        {/* <button style={{ display: !buttonList ? '' : 'none',border: 'none',background: '#F2A541' }}
                            onClick={(e) => {
                                if (e.target) {
                                    setbuttonList(true)
                                }
                            }}> */}
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            onClick={(e) => {
                                if (e.target) {
                                    setbuttonList(true)
                                }
                            }}
                            style={{ display: !buttonList ? '' : 'none', cursor: 'pointer' }}
                        >
                            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        {/* </button> */}
                    </div>
                </Col>

            </Row>

        </div>
    );
}

export default Navigationbar;
