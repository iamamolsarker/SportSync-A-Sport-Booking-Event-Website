import React from 'react';
import SponsorSlider from './SponsorSlider';

const OurPartner = () => {
    return (
        <div className="bg-red-100 dark:bg-gray-900  px-5  md:px-1 py-14">
              <div className="w-full lg:max-w-1/3 mx-auto text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-semibold mb-5">
                  Our Sponsors & Partners
                </h2>
                <p className="text-lg font-medium text-base-content">
                  Together with our sponsors, making every event unforgettable.
                </p>
              </div>
              <div className="max-w-[1300px] mx-auto">
                <SponsorSlider/>
              </div>
            </div>
    );
};

export default OurPartner;