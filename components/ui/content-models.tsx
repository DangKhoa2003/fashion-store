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
                        <div className="relative top-0 left-0">
                              <div className="text-5xl absolute top-10 -left-[3.8rem] text-black">
                                    <BsDiamondFill />
                                    <span className="text-3xl absolute -bottom-4 -right-4">
                                          <GoDot />
                                    </span>
                              </div>

                              <div>
                                    <h1
                                          className={`${oswald.className} uppercase font-black leading-[27rem] text-[27rem]`}
                                    >
                                          co de
                                    </h1>
                              </div>
                        </div>
                  </div>

                  <div>
                        <nav className="mx-6 flex flex-col">
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
