import React, { useEffect, useState } from 'react';

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ProductCategories;