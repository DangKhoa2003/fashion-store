'use client';
import { useEffect, useState } from 'react';
import { BsBox } from 'react-icons/bs';
import { RxArrowTopRight } from 'react-icons/rx';
import { IoTriangleSharp } from 'react-icons/io5';

import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const JoinNow = () => {
      const [isMounted, setIsMounted] = useState(false);
      useEffect(() => {
            setIsMounted(true);
      }, []);

      const router = useRouter();
      const cart = useCart();
      if (!isMounted) {
            return null;
      }
      return (
            <div className="flex justify-between w-[97vw] mx-auto mt-4 sm:hidden md:hidden">
                  <div className="flex items-center ml-4">
                        <Button
                              onClick={() => router.push('/cart')}
                              className="relative top-0 left-0 bg-transparent hover:bg-transparent text-black"
                        >
                              <div className="border-2 z-50 cursor-pointer border-black text-3xl rounded-[50%] p-4">
                                    <BsBox />
                              </div>
                              <span className="ml-2 text-md bg-white rounded-[50%] px-2 font-medium text-red-600 absolute -top-5 right-1">
                                    {cart.items.length}
                              </span>
                        </Button>

                        <Button className="py-8 px-10 bg-black z-50 cursor-pointer text-md text-white rounded-full">
                              Join now{' '}
                              <span className="ml-4 text-xl">
                                    <RxArrowTopRight />
                              </span>
                        </Button>
                  </div>

                  <div className="flex flex-col mr-2">
                        <span className="text-xl text-black z-50  mb-1">
                              <IoTriangleSharp />
                        </span>

                        <span className="text-xl text-black z-50  my-1">
                              <IoTriangleSharp />
                        </span>

                        <span className="text-xl text-black z-50  my-1">
                              <IoTriangleSharp />
                        </span>
                  </div>
            </div>
      );
};

export default JoinNow;
