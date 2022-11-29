import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className='my-16'>
            <div>
                <div className='text-center'>
                    <h4 className='text-4xl font-bold mb-3'>Our Client Reviews</h4>
                    <h2 className='text-xl'>What Our Clients Says</h2>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;