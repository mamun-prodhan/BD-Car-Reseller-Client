import React from 'react';
import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="car Banner" className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">GET YOUR DREAM <br />CAR !!!</h1>
                    <p className="py-6">BD Car Reseller is a online ussed car resale Shop. We have trusted seller and buyer. In this shop you can buy or sell your ussed car.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;