import React from 'react';

const Cars = ({ car }) => {

    const { categoryId, categoryName, productName, productImage, resalePrice, originalPrice, yearOfPurchase, yearsOfUse, location, postedTime, sellersName, conditionType, mobileNumber, description } = car;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={productImage} alt="Shoes" className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Name: {productName}</h2>
                <p><span className='font-bold'>Description:</span> {description}</p>
                <p><span className='font-bold'>Category:</span> {categoryName}</p>
                <p><span className='font-bold'>Resale Price:</span> {resalePrice}</p>
                <p><span className='font-bold'>Original Price:</span> {originalPrice}</p>
                <p><span className='font-bold'>Year of Purchase:</span> {yearOfPurchase}</p>
                <p><span className='font-bold'>Year of Use:</span> {yearsOfUse}</p>
                <p><span className='font-bold'>Location:</span> {location}</p>
                <p><span className='font-bold'>Posted Time:</span> {postedTime}</p>
                <p><span className='font-bold'>Condition Type:</span> {conditionType}</p>
                <p><span className='font-bold'>Mobile Number:</span> {mobileNumber}</p>
                <p><span className='font-bold'>Seller Name:</span> {sellersName}</p>
                <div className="card-actions justify-start mt-3">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cars;