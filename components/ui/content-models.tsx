'use client';

import { BsDiamondFill } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const oswald = Oswald({
      weight: '700',
      subsets: ['latin'],
});

const ContentModels = () => {
      const pathname = usePathname();

      const routes = [
            {
                  href: `/catalogue`,
                  label: 'catalogue',
                  active: pathname === `/catalogue`,
            },

            {
                  href: `/newMembership`,
                  label: 'new membership',
                  active: pathname === `/newMembership`,
            },
      ];

      return (
            <div className="flex">
                  <div className="flex items-start justify-center w-[97vw] mx-auto">
                        <div className="relative top-0 left-0 mt-16">
                              <div className="text-5xl sm:hidden md:hidden absolute top-10 -left-[3.8rem] text-black">
                                    <BsDiamondFill />
                                    <span className="text-3xl absolute -bottom-4 -right-4">
                                          <GoDot />
                                    </span>
                              </div>

                              <div className="md:relative md:top-0 md:left-0 sm:relative sm:top-0 sm:left-0">
                                    <h2
                                          className={`${oswald.className} absolute sm:-top-10 md:-top-14 left-0 lg:hidden uppercase font-black sm:text-[3rem] md:text-[6rem]`}
                                    >
                                          Versace
                                    </h2>
                                    <h1
                                          className={`${oswald.className} uppercase font-black sm:text-[8rem] md:text-[12rem] lg:leading-[27rem] lg:text-[27rem]`}
                                    >
                                          code
                                    </h1>
                              </div>
                        </div>
                  </div>

                  <div className="sm:hidden md:hidden">
                        <nav className="mx-6 flex flex-col mt-16">
                              {routes.map((route) => (
                                    <Link
                                          key={route.href}
                                          href={route.href}
                                          style={{ writingMode: 'vertical-rl' }}
                                          className={cn(
                                                'text-md font-medium z-50 mt-8 tracking-wide uppercase transition-colors hover:text-black',
                                                route.active
                                                      ? 'text-black'
                                                      : 'text-neutral-500',
                                          )}
                                    >
                                          {route.label}
                                    </Link>
                              ))}
                        </nav>
                  </div>
            </div>
      );
};

export default ContentModels;
