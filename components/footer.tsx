import Link from 'next/link';
import { Button } from './ui/button';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { MoveRight } from 'lucide-react';

const Footer = () => {
      const year = new Date().getFullYear();
      return (
            <footer className="bg-white grid grid-cols-12 sm:grid-cols-2 sm:gap-12 md:gap-12 md:grid-cols-7 mt-8 pb-16 w-[94vw] sm:w-[85vw] mx-auto">
                  <div className="col-span-3 sm:col-span-1 flex flex-col justify-between">
                        <Link href="/">
                              <div className="flex">
                                    <div className="sm:hidden md:hidden h-[2.4rem] w-[2.4rem] mt-[-0.1rem] pt-[0.1rem] pl-1 pr-0 rounded-full bg-black overflow-hidden">
                                          <h1 className="text-white uppercase font-black text-3xl">
                                                ve
                                          </h1>
                                    </div>

                                    <h1 className="uppercase font-black text-3xl ml-1">
                                          versace
                                    </h1>
                              </div>
                        </Link>

                        <div className="flex items-center">
                              <span className="rounded-[50%] border-2 cursor-pointer hover:bg-black transition-colors duration-300 ease-in hover:text-white text-2xl border-black p-2">
                                    <AiFillInstagram />
                              </span>

                              <span className="rounded-[50%] border-2 cursor-pointer hover:bg-black transition-colors duration-300 ease-in hover:text-white text-2xl border-black p-2 ml-4">
                                    <BsTwitter />
                              </span>

                              <span className="rounded-[50%] border-2 cursor-pointer hover:bg-black transition-colors duration-300 ease-in hover:text-white text-2xl border-black p-2 ml-4">
                                    <BsFacebook />
                              </span>
                        </div>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                        <h1 className="uppercase font-medium text-gray-400 text-md select-none">
                              May we help you?
                        </h1>
                        <Link href="/contact">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-12 font-medium text-md">
                                    contact us
                              </h2>
                        </Link>
                        <Link href="/my-order">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    my order
                              </h2>
                        </Link>

                        <Link href="/FAQs">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    FAQs
                              </h2>
                        </Link>

                        <Link href="/sitemap">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    Sitemap
                              </h2>
                        </Link>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                        <h1 className="uppercase font-medium text-gray-400 text-md select-none">
                              About us
                        </h1>
                        <Link href="/about">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-12 font-medium text-md">
                                    About us
                              </h2>
                        </Link>
                        <Link href="/careers">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    careers
                              </h2>
                        </Link>

                        <Link href="/legal">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    Legal
                              </h2>
                        </Link>

                        <Link href="/privacy-policy">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    Privacy & Policy
                              </h2>
                        </Link>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                        <h1 className="uppercase font-medium text-gray-400 text-md select-none">
                              Services
                        </h1>
                        <Link href="/services">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-12 font-medium text-md">
                                    Services
                              </h2>
                        </Link>
                        <Link href="/appointment">
                              <h2 className="capitalize text-black hover:translate-x-3 transition-all duration-300 ease-out mt-4 font-medium text-md">
                                    Appointment
                              </h2>
                        </Link>
                  </div>

                  <div className="col-span-3 sm:col-span-1 flex flex-col justify-between">
                        <div className="text-right sm:text-left md:text-left font-semibold">
                              <h1 className="text-xl">
                                    Have a question about{' '}
                                    <br className="sm:hidden md:hidden" />
                                    our membership
                              </h1>
                              <Button
                                    variant="outline"
                                    className="mt-8 p-7 rounded-full border-2 border-black text-md font-semibold"
                              >
                                    Send email
                                    <MoveRight className="h-6 w-6 text-black ml-3" />
                              </Button>
                        </div>

                        <p className="text-center sm:text-left md:text-left sm:mt-4 md:mt-8 text-sm text-black font-medium">
                              Versace &copy; {year} Store, Inc. All rights
                              reserved.
                        </p>
                  </div>
            </footer>
      );
};

export default Footer;
