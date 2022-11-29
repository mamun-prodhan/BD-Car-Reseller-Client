import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const ProductCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('carCategory.json') //url of carCategories 
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2 className='text-center my-5 text-5xl font-bold'>Our Product Category: {categories.length}</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Products
                    key={categories.categoryId}
                    category={category}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;