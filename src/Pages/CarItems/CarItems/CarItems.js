import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Cars from '../Cars/Cars';

const CarItems = () => {
    const cars = useLoaderData();
    const [selectedCar, setSelectedCar] = useState(null);


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
                        setSelectedCar={setSelectedCar}
                    ></Cars>)
                }
            </div>
            {selectedCar &&
                <BookingModal
                    selectedCar={selectedCar}
                ></BookingModal>}
        </div>
    );
};

export default CarItems;