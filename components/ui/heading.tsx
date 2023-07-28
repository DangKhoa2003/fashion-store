'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { BsDiamondFill } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';

interface HeadingProps {
      title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
      useEffect(() => {
            AOS.init();
      }, []);

      return (
            <div
                  className="flex items-start "
                  data-aos="fade-up-right"
                  data-aos-delay="900"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-quart"
            >
                  <div className="text-2xl relative top-3 sm:-top-2 md:-top-2 left-0 text-black">
                        <BsDiamondFill />
                        <span className="text-xl absolute -bottom-3 -right-3">
                              <GoDot />
                        </span>
                  </div>
                  <h2 className="ml-4 text-7xl sm:text-3xl md:text-3xl capitalize font-bold tracking-tight">
                        {title}
                  </h2>
            </div>
      );
};
