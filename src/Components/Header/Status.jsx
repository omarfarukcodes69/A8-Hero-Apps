import React from 'react';

const Status = () => {
    return (
        <div className='bg-gradient-to-b from-[#723fe8] to-[#965af0] py-10 text-white text-center space-y-10'>
            <h1 className='text-3xl font-bold'>Trusted by Millions, Built for You</h1>
            <div className="md:flex justify-around items-center space-y-10">
                <aside className=' space-y-2'>
                    <p className="text-gray-300">Total Downloads</p>
                    <h1 className="text-4xl font-extrabold">29.5M</h1>
                    <p className="text-gray-300">21% more than last month</p>
                </aside>
                <aside className=' space-y-2'>
                    <p className="text-gray-300">Total Reviews</p>
                    <h1 className="text-4xl font-extrabold">906K</h1>
                    <p className="text-gray-300">46% more than last month</p>
                </aside>
                <aside className=' space-y-2'>
                    <p className="text-gray-300">Active Apps</p>
                    <h1 className="text-4xl font-extrabold">132+</h1>
                    <p className="text-gray-300">31 more will Launch</p>
                </aside>
            </div>


        </div>
    );
};

export default Status;