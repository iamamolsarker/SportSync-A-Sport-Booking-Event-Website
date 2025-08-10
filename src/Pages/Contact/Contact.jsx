import React from 'react';
import supportImage from "../../assets/support.avif"
import { Helmet } from 'react-helmet';
import ContactUsForm from '../../Components/ContactUsForm';

const Contact = () => {
    return (
        
        <>
        <Helmet>
                <title>Contact</title>
            </Helmet>
        <div className="px-5 md:px-1 py-14">
      <div className="w-full lg:max-w-1/3 mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">
          Get in touch
        </h2>
        <p className="text-lg font-medium text-base-content">
          Have questions or want to get in touch? Fill out the form below and we will get back to you promptly.
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto flex gap-14 min-h-[400px]">
        <div className='flex-1 rounded-2xl' style={{ backgroundImage: `url(${supportImage})`, backgroundPosition: 'top center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            
        </div>
        <div className='flex-1 min-h-[600px]'>
            <ContactUsForm/>
        </div>
      </div>
    </div>
        </>
    );
};

export default Contact;