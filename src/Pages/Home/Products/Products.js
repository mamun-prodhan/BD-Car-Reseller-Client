import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ category }) => {
    const { categoryId, categoryName, categoryImage, categoryDescription } = category;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={categoryImage} alt="carImage" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
                <p>{categoryDescription}</p>
                <div className="card-actions">
                    <Link to={`/category/${categoryId}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;