'use client';
import { BiMenuAltRight } from 'react-icons/bi';
import { Category } from '@/types';
import Link from 'next/link';

import MainNav from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import IconButton from './ui/icon-button';
import { BadgePercent, BookMinus, Home, ShoppingBag } from 'lucide-react';

interface NavigationProps {
      categories: Category[];
}

const Navigation: React.FC<NavigationProps> = ({ categories }) => {
      const [isOpen, setIsOpen] = useState(true);
      const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
            window.addEventListener('scroll', () => {
                  if (window.scrollY >= 100) {
                        setDarkMode(true);
                  } else {
                        setDarkMode(false);
                  }
            });
      }, []);

      const handleToggle = () => {
            setIsOpen(!isOpen);
      };
      return (
            <>
                  <div
                        className={cn(
                              'fixed top-0 left-0 right-0 bg-black z-[999] transition-colors duration-300 ease-linear sm:hidden md:hidden',
                              darkMode ? 'bg-black' : 'bg-transparent',
                        )}
                  >
                        <div className="h-[80px] w-[97vw] mx-auto flex items-center justify-between">
                              <Link href="/">
                                    <div className="flex ml-4">
                                          <div
                                                className={cn(
                                                      'h-[2.4rem] w-[2.4rem] mt-[-0.1rem] pt-[0.1rem] pl-1 pr-0 rounded-full overflow-hidden',
                                                      darkMode
                                                            ? 'bg-white text-black'
                                                            : 'bg-black text-white',
                                                )}
                                          >
                                                <h1 className="text-3xl font-black uppercase">
                                                      ve
                                                </h1>
                                          </div>

                                          <h1
                                                className={cn(
                                                      'uppercase font-black text-3xl ml-1',
                                                      darkMode
                                                            ? 'text-white'
                                                            : 'text-black',
                                                )}
                                          >
                                                versace
                                          </h1>
                                    </div>
                              </Link>
                              <div className="flex">
                                    <MainNav
                                          className={cn(
                                                isOpen
                                                      ? 'flex animate-slip'
                                                      : 'hidden',
                                          )}
                                          data={categories}
                                          darkMode={darkMode}
                                    />

                                    <Button
                                          onClick={handleToggle}
                                          className={cn(
                                                'rounded-[50%] p-0 h-[50px] w-[50px] text-3xl z-50 cursor-pointer hover:bg-[#d4ff4e] hover:text-black',
                                                darkMode
                                                      ? 'bg-white text-black'
                                                      : 'bg-black text-white',
                                          )}
                                    >
                                          <BiMenuAltRight />
                                    </Button>
                              </div>
                        </div>
                  </div>

                  <div className="lg:hidden h-[80px] z-[999] fixed bottom-4 left-0 right-0 w-[85vw] mx-auto flex items-center justify-around">
                        <Link href={'/'}>
                              <IconButton
                                    className="p-4 text-white bg-black border-none"
                                    icon={<Home size={24} />}
                              />
                        </Link>

                        <div className="flex justify-between rounded-full">
                              <Link href={'/cart'}>
                                    <IconButton
                                          className="p-4 mr-4 text-black bg-transparent bg-gray-300 border-none hover:bg-black hover:text-white"
                                          icon={<ShoppingBag size={24} />}
                                    />
                              </Link>

                              <Link href={'/sales'}>
                                    <IconButton
                                          className="p-4 mx-4 text-black bg-transparent bg-gray-300 border-none hover:bg-black hover:text-white"
                                          icon={<BadgePercent size={24} />}
                                    />
                              </Link>

                              <Link href={'/favorite'}>
                                    <IconButton
                                          className="p-4 ml-4 text-black bg-transparent bg-gray-300 border-none hover:bg-black hover:text-white"
                                          icon={<BookMinus size={24} />}
                                    />
                              </Link>
                        </div>
                  </div>
            </>
      );
};

export default Navigation;
