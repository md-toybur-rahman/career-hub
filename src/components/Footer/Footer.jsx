import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white py-[130px] px-[100px] mt-[100px]'>
            <div className='grid md:grid-cols-5 justify-center text-center md:text-left gap-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Job Hunter</h1>
                    <p className='text-base leading-7 text-[#757575]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                    <div className='flex gap-5 mt-8 justify-center md:justify-start'>
                        <img className='bg-white px-3 py-3 rounded-full w-10 h-10' src="https://i.ibb.co/pPRjQqM/facebook.png" alt="" />
                        <img className='bg-white px-3 py-3 rounded-full w-10 h-10' src="https://i.ibb.co/SmGHKtL/twiter.png" alt="" />
                        <img className='bg-white px-3 py-3 rounded-full w-10 h-10' src="https://i.ibb.co/pZW0fkb/insta.png" alt="" />
                    </div>
                </div>
                <div className='text-base leading-7 text-[#757575]'>
                    <h1 className='text-white text-xl font-semibold mb-4'>Company</h1>
                    <p className='mb-4'>About Us</p>
                    <p className='mb-4'>Work</p>
                    <p className='mb-4'>Latest News</p>
                    <p className='mb-4'>Careers</p>
                </div>
                <div className='text-base leading-7 text-[#757575]'>
                    <h1 className='text-white text-xl font-semibold mb-4'>Product</h1>
                    <p className='mb-4'>Prototype</p>
                    <p className='mb-4'>Plans & Pricing</p>
                    <p className='mb-4'>Customers</p>
                    <p className='mb-4'>Integrations</p>
                </div>
                <div className='text-base leading-7 text-[#757575]'>
                    <h1 className='text-white text-xl font-semibold mb-4'>Support</h1>
                    <p className='mb-4'>Help Desk</p>
                    <p className='mb-4'>Sales</p>
                    <p className='mb-4'>Become a Partner</p>
                    <p className='mb-4'>Developers</p>
                </div>
                <div className='text-base leading-7 text-[#757575]'>
                    <h1 className='text-white text-xl font-semibold mb-4'>Contact</h1>
                    <p className='mb-4'>524 Boroadway, NYC</p>
                    <p className='mb-4'>+1777-978-5570</p>
                </div>
            </div>
            <div className='md:flex justify-between mt-20'>
                <p className='text-base leading-7 text-[#757575]'>@2023 CareerHub. All Rights Reserved</p>
                <p className='text-base leading-7 text-[#757575] mt-8 md:mt-0'>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;