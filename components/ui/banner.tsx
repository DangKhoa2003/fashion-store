'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';
import { BsArrowRight } from 'react-icons/bs';
import { Oswald } from 'next/font/google';
import { BsBox } from 'react-icons/bs';

import { Billboard } from '@/types';
import { Button } from './button';
const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});

interface BannerProps {
      billboards: Billboard[];
}

const Banner: React.FC<BannerProps> = ({ billboards }) => {
      const formattedBillboards = billboards.map((item) => {
            const date = new Date();
            let month = date.getMonth() + 1;
            if (parseInt(item.createdAt.slice(5, 7)) === month) {
                  return item;
            }
      });

      useEffect(() => {
            AOS.init();
      }, []);

      return (
            <div className="mt-[8rem] sm:mt-0 md:top-0 w-[94vw] sm:w-[80vw] md:w-[90vw] mx-auto grid sm:grid-cols-1 md:grid-cols-1 grid-cols-8 gap-x-6">
                  <div
                        className={cn(
                              `col-span-5 sm:aspect-square md:aspect-square md:col-span-1 sm:col-span-1 h-[32rem] rounded-2xl bg-center bg-cover bg-no-repeat w-full flex flex-col justify-between`,
                        )}
                        style={{
                              backgroundImage: `url(${formattedBillboards[1]?.imageUrl})`,
                        }}
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-sine"
                  >
                        <div className="flex items-center justify-between p-8">
                              <h2 className="uppercase font-bold text-lg text-black tracking-wider">
                                    phenomenal event
                              </h2>
                              <h2 className="uppercase font-bold text-lg text-black tracking-wider">
                                    {formattedBillboards[1]?.createdAt.slice(
                                          5,
                                          7,
                                    )}
                                    /
                                    {formattedBillboards[1]?.createdAt.slice(
                                          2,
                                          4,
                                    )}
                              </h2>
                        </div>

                        <div className="grid grid-cols-6 p-8 sm:p-4 md:p-6">
                              <h1
                                    className={`${oswald.className} text-[#d4ff4e] font-black col-span-2 text-[7rem] sm:text-3xl md:text-5xl leading-[6.5rem] uppercase`}
                              >
                                    {formattedBillboards[1]?.label}
                              </h1>

                              <Button
                                    variant="default"
                                    className="place-self-end text-lg col-span-4 w-[40%] rounded-full border-black border-2 font-bold p-8 text-white"
                              >
                                    Details
                                    <span className="text-2xl ml-3 sm:hidden">
                                          <BsArrowRight />
                                    </span>
                              </Button>
                        </div>
                  </div>

                  <div
                        className="sm:hidden md:hidden flex p-8 flex-col justify-between col-span-3 h-[32rem] rounded-2xl bg-center bg-cover bg-no-repeat w-full"
                        style={{
                              backgroundImage: `url(${formattedBillboards[0]?.imageUrl})`,
                        }}
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-sine"
                  >
                        <div className="flex justify-end">
                              <div className="w-[20%]">
                                    <h1 className="uppercase font-bold text-lg text-black tracking-wider">
                                          {formattedBillboards[0]?.label}
                                    </h1>
                              </div>
                        </div>

                        <div className="text-3xl h-[4rem] w-[4rem] flex items-center justify-center rounded-[50%] bg-[#d4ff4e]">
                              <BsBox />
                        </div>
                  </div>
            </div>
      );
};

export default Banner;
