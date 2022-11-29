import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import Reviews from '../Reviews/Reviews';

const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;