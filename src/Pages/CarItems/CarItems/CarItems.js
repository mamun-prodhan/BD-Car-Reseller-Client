import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cars from '../Cars/Cars';

const CarItems = () => {
    const cars = useLoaderData();
    return (
        <div>
            <div>
            <h2 className='text-center my-5 text-4xl font-bold my-10'>Our Product Category: {cars.length}</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cars.map(car => <Cars
                        key={car._id}
                        car={car}
                    ></Cars>)
                }
            </div>
        </div>
    );
};

export default CarItems;