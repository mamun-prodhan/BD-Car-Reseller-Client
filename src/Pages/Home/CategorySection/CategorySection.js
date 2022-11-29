import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const CategorySection = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('carCategory.json') //url of server side
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])


    return (
        <div>
            <div>
            <h2 className='text-center my-5 text-4xl font-bold'>Our Product Category: {categories.length}</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                    key={category.categoryId}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default CategorySection;