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

      return (
            <div className="mt-[8rem] w-[94vw] mx-auto grid grid-cols-8 gap-x-6">
                  <div
                        className={cn(
                              `col-span-5 h-[32rem] rounded-2xl bg-center bg-cover bg-no-repeat w-full flex flex-col justify-between`,
                        )}
                        style={{
                              backgroundImage: `url(${formattedBillboards[1]?.imageUrl})`,
                        }}
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

                        <div className="grid grid-cols-6 p-8">
                              <h1
                                    className={`${oswald.className} text-[#d4ff4e] font-black col-span-2 text-[7rem] leading-[6.5rem] uppercase`}
                              >
                                    {formattedBillboards[1]?.label}
                              </h1>

                              <Button
                                    variant="default"
                                    className="place-self-end text-lg col-span-4 w-[40%] rounded-full border-black border-2 font-bold p-8 text-white"
                              >
                                    Details
                                    <span className="text-2xl ml-3">
                                          <BsArrowRight />
                                    </span>
                              </Button>
                        </div>
                  </div>

                  <div
                        className="flex p-8 flex-col justify-between col-span-3 h-[32rem] rounded-2xl bg-center bg-cover bg-no-repeat w-full"
                        style={{
                              backgroundImage: `url(${formattedBillboards[0]?.imageUrl})`,
                        }}
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
