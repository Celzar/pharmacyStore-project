import React,{useState} from 'react';

const AddOrder_date = () => {

    const [date, setdate] = useState(initialState);
    
    const handleSubmit = (e)=>{
        e.preventDefault()

    }

    return (
        <div>
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

                                
                                {/* Email */}
                                <label htmlFor='Email' className='text-left' >Order Date</label>
                                {/* <span className='text-danger mx-3'>{props.error.email}</span> */}
                                <br />
                                {/* <input type='date' className='mb-3' required maxLength='30' id="email" name="email"
                                    // placeholder='Email'
                                    onChange={(e) => setdate(e.target.value)}
                                    value={date}
                                    style={{
                                        background: '#FFFFFF',
                                        borderRadius: '', width: '100%',
                                        border: '#FF715B 1px solid',
                                        outline: 'none',
                                        height: '2.5em'
                                    }} /> */}



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
        </div>
    );
}

export default AddOrder_date;
