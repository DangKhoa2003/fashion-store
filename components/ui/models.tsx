'use client';

import Image from 'next/image';
import { Oswald } from 'next/font/google';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import models from '@/public/models.png';

const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});

const Models = () => {
      return (
            <div className="absolute top-0 h-screen w-screen z-0">
                  <motion.div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={fadeIn('up', 0)}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="h-full w-auto mx-auto"
                  >
                        <Image
                              className="h-full w-auto mx-auto"
                              alt="Models"
                              src={models}
                        />
                  </motion.div>

                  <motion.div
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={fadeIn('down', 0.4)}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="absolute bottom-[6rem] flex items-center justify-center right-[10rem] h-[15rem] w-[15rem] rounded-[50%] bg-[#632fec] border-[6px] border-black"
                  >
                        <h1
                              className={`${oswald.className} rotate-[20deg] text-[#d4ff4e] leading-[8rem] text-[8rem]`}
                        >
                              05
                        </h1>
                  </motion.div>
            </div>
      );
};

export default Models;
