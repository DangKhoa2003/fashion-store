'use client';

import { Oswald } from 'next/font/google';
import { Button } from './button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';
import { CgArrowTopRight } from 'react-icons/cg';
import { AiOutlineCopyright } from 'react-icons/ai';
import modelsGucci from '@/public/models-3.png';
import { MoveUpRight } from 'lucide-react';
const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});
const Post = () => {
      return (
            <>
                  <section className="mt-[6rem] flex flex-col justify-between p-8 w-[94vw] h-[32rem] mx-auto gap-x-6 rounded-2xl bg-[url('/girl.jpg')] bg-[50%_10%] bg-cover bg-no-repeat">
                        <div className="flex justify-between select-none">
                              <div>
                                    <h1 className="uppercase font-extrabold text-lg text-white tracking-wider">
                                          - 05
                                    </h1>
                                    <h1 className="uppercase font-extrabold text-lg text-white tracking-wider">
                                          versace code
                                    </h1>
                              </div>

                              <div>
                                    <h1 className="uppercase select-none font-extrabold text-lg text-white tracking-wider">
                                          23/900
                                    </h1>
                              </div>
                        </div>

                        <div className="grid grid-cols-8">
                              <h1 className="col-span-2 uppercase font-black text-5xl text-black select-none">
                                    Let&rsquo;s join the party!
                              </h1>
                              <Button className="col-span-6 w-[20%] place-self-end text-lg bg-[#d4ff4e] rounded-full font-bold p-8 text-black hover:bg-black transition-colors duration-200 ease-in hover:text-[#d4ff4e]">
                                    Join Now{' '}
                                    <span className="text-xl ">
                                          <CgArrowTopRight />
                                    </span>
                              </Button>
                        </div>
                  </section>

                  <section className="bg-[#632fec] h-[115vh] relative top-0 left-0 p-8 my-[5rem]">
                        <div className="absolute inset-0 m-auto w-[65%] h-[80%] grid grid-cols-5 bg-transparent">
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-b-2 border-dashed border-neutral-400"></div>

                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-b-2 border-dashed border-neutral-400"></div>

                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-b-2 border-dashed border-neutral-400"></div>
                              <div className="border-b-2 border-dashed border-neutral-400"></div>

                              <div className="border-r-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-dashed border-neutral-400"></div>
                              <div className="border-r-2 border-dashed border-neutral-400"></div>
                              <div className="border-dashed border-neutral-400"></div>
                        </div>

                        <h1
                              className={`${oswald.className} absolute top-[15%] text-[10rem] leading-[11rem] uppercase font-black m-auto w-screen text-center text-white`}
                        >
                              color coded release
                        </h1>

                        <div className="absolute bottom-0 h-[86vh] w-[94vw] mx-auto z-0">
                              <motion.div
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={fadeIn('up', 0)}
                                    transition={{
                                          duration: 0.2,
                                          ease: 'easeInOut',
                                    }}
                                    className="h-full w-auto mx-auto"
                              >
                                    <Image
                                          className="h-full w-auto mx-auto"
                                          alt="Models"
                                          src={modelsGucci}
                                    />
                              </motion.div>
                        </div>

                        <div className="flex flex-col justify-between h-full z-50 relative">
                              <h1 className="uppercase text-lg text-white font-semibold tracking-wide">
                                    quality is remembered long
                                    <br />
                                    after price is forgotten
                              </h1>

                              <div className="flex justify-between items-center">
                                    <Button className="text-black bg-white p-8 rounded-full font-bold text-md hover:bg-[#d4ff4e] transition-all duration-300 ease-linear">
                                          Shop Now
                                          <MoveUpRight className="h-4 w-4 ml-2" />
                                    </Button>

                                    <h1 className="uppercase font-black text-[2.2rem] text-white flex items-start">
                                          versace
                                          <span className="text-xl mt-2">
                                                <AiOutlineCopyright />
                                          </span>
                                    </h1>
                              </div>
                        </div>
                  </section>
            </>
      );
};

export default Post;
