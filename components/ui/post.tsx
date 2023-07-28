'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { Oswald } from 'next/font/google';
import { Button } from './button';
import Image from 'next/image';
import { CgArrowTopRight } from 'react-icons/cg';
import { AiOutlineCopyright } from 'react-icons/ai';
import modelsGucci from '@/public/models-3.png';
import modelsGucciFull from '@/public/models-gucci.png';
import { MoveUpRight } from 'lucide-react';
const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});
const Post = () => {
      useEffect(() => {
            AOS.init();
      }, []);
      return (
            <>
                  <section
                        data-aos="zoom-in-down"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-easing="ease-out-sine"
                        className="mt-[6rem] flex flex-col justify-between p-8 w-[94vw] h-[32rem] mx-auto gap-x-6 rounded-2xl bg-[url('/girl.jpg')] bg-[50%_10%] bg-cover bg-no-repeat"
                  >
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
                              <h1 className="col-span-2 uppercase font-black text-5xl text-black sm:text-white select-none">
                                    Let&rsquo;s join the party!
                              </h1>
                              <Button className="col-span-6 w-[20%] place-self-end text-lg bg-[#d4ff4e] rounded-full font-bold p-8 text-black hover:bg-black transition-colors duration-200 ease-in hover:text-[#d4ff4e]">
                                    Join Now{' '}
                                    <span className="text-xl sm:hidden md:hidden">
                                          <CgArrowTopRight />
                                    </span>
                              </Button>
                        </div>
                  </section>

                  <section className="bg-[#632fec] h-[115vh] sm:h-screen md:h-screen relative top-0 left-0 p-8 sm:p-0 md:p-0 my-[5rem]">
                        <div className="absolute sm:hidden md:hidden inset-0 m-auto w-[65%] h-[80%] grid grid-cols-5 bg-transparent">
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
                              data-aos="slide-left"
                              data-aos-delay="200"
                              data-aos-duration="400"
                              data-aos-easing="ease-out-quart"
                              className={`${oswald.className} absolute top-[15%] sm:top-[10%] md:top-[10%] text-[10rem] sm:text-7xl md:text-9xl leading-[11rem] uppercase font-black m-auto w-screen text-center text-white`}
                        >
                              color coded release
                        </h1>

                        <div
                              data-aos="fade-up"
                              data-aos-delay="800"
                              data-aos-duration="500"
                              data-aos-easing="ease-in-quart"
                              className="absolute bottom-0 sm:w-screen h-[86vh] w-[94vw] mx-auto z-0"
                        >
                              <div className="h-full w-auto mx-auto">
                                    <Image
                                          className="h-full w-auto mx-auto object-cover sm:hidden md:hidden"
                                          alt="Models"
                                          src={modelsGucci}
                                    />

                                    <Image
                                          className="h-full w-screen mx-auto object-cover lg:hidden"
                                          alt="Models"
                                          src={modelsGucciFull}
                                    />
                              </div>
                        </div>

                        <div className="flex flex-col justify-between h-full z-50 relative sm:p-4 md:p-8">
                              <h1
                                    data-aos="fade-down"
                                    data-aos-delay="600"
                                    data-aos-duration="400"
                                    data-aos-easing="ease-out-quart"
                                    className="uppercase text-lg text-white font-semibold tracking-wide"
                              >
                                    quality is remembered long
                                    <br />
                                    after price is forgotten
                              </h1>

                              <div className="flex justify-between items-center">
                                    <Button className="text-black bg-white p-8 rounded-full font-bold text-md hover:bg-[#d4ff4e] transition-all duration-300 ease-linear">
                                          Shop Now
                                          <MoveUpRight className="h-4 w-4 ml-2 md:hidden sm:hidden" />
                                    </Button>

                                    <h1
                                          data-aos="fade-up"
                                          data-aos-delay="200"
                                          data-aos-duration="400"
                                          data-aos-easing="ease-out-quart"
                                          className="uppercase font-black text-[2.2rem] text-white flex items-start"
                                    >
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
