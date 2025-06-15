import React from 'react';
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import martinImg from "../assets/martin.jpg"
import adamImg from "../assets/adam.jpg"
import gabImg from "../assets/zanglia.jpg"
import tabzImg from "../assets/gabriel.jpg"

const Testimonials = () => {
    return (
        <div className='bg-red-50 px-5  md:px-1 py-14'>
            <div className='w-full md:max-w-1/3 mx-auto text-center mb-8'>
                <h2 className='text-4xl md:text-5xl font-semibold mb-5'>What Athetes Say</h2>
                <p className='text-lg font-medium text-[#494848]'>Join thousands of satisfied athletes who trust SportSync for their event booking needs</p>
            </div>
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='p-5 border border-[#e2e8f0] bg-white rounded-xl shadow-sm'>
                    <LuQuote size="32px" className='text-orange-500'/>
                    <p className='text-gray-600 italic my-4'>"SportSync made it incredibly easy to find and register for marathons in my area. The platform is intuitive and brilliant the event organization is top-notch in all way!"</p>
                    <div className='flex gap-0.5 text-yellow-500'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='flex gap-2 items-center mt-6'>
                        <div className='w-[55px]'>
                            <img src={martinImg} alt="" className='w-full rounded-full'/>
                        </div>
                        <div>
                            <h3 className='font-medium text-gray-600'>Martin S.</h3>
                            <p className='text-sm italic text-gray-500'>Marathon Runner</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 border border-[#e2e8f0] bg-white rounded-xl shadow-sm'>
                    <LuQuote size="32px" className='text-orange-500'/>
                    <p className='text-gray-600 italic my-4'>"I've participated in multiple basketball tournaments through SportSync. The booking process is seamless and the events are well-managed."</p>
                    <div className='flex gap-0.5 text-yellow-500'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='flex gap-2 items-center mt-6'>
                        <div className='w-[55px]'>
                            <img src={adamImg} alt="" className='w-full rounded-full'/>
                        </div>
                        <div>
                            <h3 className='font-medium text-gray-600'>Adam Chris</h3>
                            <p className='text-sm italic text-gray-500'>Basketball Player</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 border border-[#e2e8f0] bg-white rounded-xl shadow-sm'>
                    <LuQuote size="32px" className='text-orange-500'/>
                    <p className='text-gray-600 italic my-4'>As a tennis player, I love how SportSync connects me with local tournaments. The variety of events and skill levels is perfect for everyone."</p>
                    <div className='flex gap-0.5 text-yellow-500'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='flex gap-2 items-center mt-6'>
                        <div className='w-[55px]'>
                            <img src={gabImg} alt="" className='w-full rounded-full'/>
                        </div>
                        <div>
                            <h3 className='font-medium text-gray-600'>Emily Rodriguez</h3>
                            <p className='text-sm italic text-gray-500'>Tennis Enthusiast</p>
                        </div>
                    </div>
                </div>
                <div className='p-5 border border-[#e2e8f0] bg-white rounded-xl shadow-sm'>
                    <LuQuote size="32px" className='text-orange-500'/>
                    <p className='text-gray-600 italic my-4'>"Managing cycling events has never been easier. SportSync provides all the tools we need to organize successful competitions. The Platform is so good to manage. "</p>
                    <div className='flex gap-0.5 text-yellow-500'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <div className='flex gap-2 items-center mt-6'>
                        <div className='w-[55px]'>
                            <img src={tabzImg} alt="" className='w-full rounded-full'/>
                        </div>
                        <div>
                            <h3 className='font-medium text-gray-600'>MDavid Thompson</h3>
                            <p className='text-sm italic text-gray-500'>Cycling Coach</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;