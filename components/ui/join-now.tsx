import { BsBox } from 'react-icons/bs';
import { RxArrowTopRight } from 'react-icons/rx';
import { IoTriangleSharp } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

const JoinNow = () => {
      return (
            <div className="flex justify-between w-[97vw] mx-auto">
                  <div className="flex items-center ml-4">
                        <div className="border-2 z-50 cursor-pointer border-black text-3xl rounded-[50%] p-4">
                              <BsBox />
                        </div>

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
