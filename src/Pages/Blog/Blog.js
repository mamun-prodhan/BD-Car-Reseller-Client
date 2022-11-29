import React from 'react';

const Blog = ({ blog }) => {

    const { question, answer1, answer2, answer3 } = blog;

    return (
        <div className="bg-base-200 rounded-xl p-10 my-10">
            <div className='mb-3'>
                <h1 className="text-2xl font-bold mt-5">{question}</h1>
            </div>
            <div>
                <p>{answer1}</p>
                <p>{answer2}</p><br />
                <p>{answer3}</p>
            </div>




        </div>
    );
};

export default Blog;