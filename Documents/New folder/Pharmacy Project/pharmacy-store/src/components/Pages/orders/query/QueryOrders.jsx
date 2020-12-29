import React from 'react';
import './QueryOrders.css'


const QueryOrders = () => {
    return (
        
            <div style={{ background: '#F05D5E', color: '#FFFFFF', width: '100%', minHeight: '100vh' }}>
                <br />
                <div className='container' style={{

                }} id='queryBox'>
                    <h1 className='font-weight-bold text-center' style={{ color: '#272932' }}>Orders Lists</h1>

                    <div style={{
                        background: '#272932', width: '100%',
                        'box-shadow': '20px 20px 60px #cc4f50, -20px -20px 60px #ff6b6c',
                        'padding': '5%'
                    }} className='container '>

                        <ul class="list-group">
                            <li class="list-group-item" style={{
                                color: '#4C5454'
                            }}>Cras justo odio</li>
                        </ul>

                    </div>
                </div>

            </div >
        
    );
}

export default QueryOrders;
