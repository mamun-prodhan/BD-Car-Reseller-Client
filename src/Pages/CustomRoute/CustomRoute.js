import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../../src/assets/images/notfound.png';

const CustomRoute = () => {
    return (
        <div className=''>
            <h3 className='font-bold text-4xl text-center'>Page Not Found</h3>
            <div className='flex flex-col items-center my-10'>
                <Link to='/'>
                    <button className="btn btn-primary font-bold text-center">Back To Home</button>
                </Link>
            </div>
            <div className='hero container max-w-screen-lg mx-auto pb-10'>
            <img src={errorImage} alt="" />
            </div>
        </div>
    );
};  

export default CustomRoute;