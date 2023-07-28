'use client';

import Image from 'next/image';
import { Oswald } from 'next/font/google';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import models from '@/public/models.png';
import modelsFull from '@/public/models-full.png';

const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});

const Models = () => {
      return (
            <div className="absolute sm:relative md:relative top-0 sm:top-[-10rem] md:top-[-14rem] h-screen w-screen z-0">
                  <motion.div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={fadeIn('up', 0)}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="h-full w-auto mx-auto"
                  >
                        <Image
                              className="h-full w-auto mx-auto object-cover md:hidden sm:hidden"
                              alt="Models"
                              src={models}
                        />

                        <Image
                              className="h-full w-auto object-cover lg:hidden"
                              alt="Models"
                              src={modelsFull}
                        />
                  </motion.div>

                  <motion.div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={fadeIn('down', 0.4)}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute bottom-[6rem] flex items-center justify-center right-[10rem] h-[15rem] w-[15rem] sm:h-[12rem] sm:w-[12rem] md:h-[13rem] md:w-[13rem] rounded-[50%] bg-[#632fec] border-[6px] border-black"
                  >
                        <h1
                              className={`${oswald.className} rotate-[20deg] text-[#d4ff4e] leading-[8rem] text-[8rem] sm:text-[5rem] md:text-[6rem]`}
                        >
                              05
                        </h1>
                  </motion.div>
            </div>
      );
};

export default Models;
