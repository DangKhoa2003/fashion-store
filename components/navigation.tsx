'use client';
import { BiMenuAltRight } from 'react-icons/bi';
import { Category } from '@/types';
import Link from 'next/link';

import MainNav from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import IconButton from './ui/icon-button';
import { BadgePercent, BookMinus, Home, ShoppingBag } from 'lucide-react';
import Tippy from '@tippyjs/react';
interface NavigationProps {
      categories: Category[];
}

const Navigation: React.FC<NavigationProps> = ({ categories }) => {
      const [isOpen, setIsOpen] = useState(true);
      const [darkMode, setDarkMode] = useState(false);

      window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                  setDarkMode(true);
            } else {
                  setDarkMode(false);
            }
      });

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
                                                <h1 className="uppercase font-black text-3xl">
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
                                                'rounded-[50%] p-0 h-[50px] w-[50px] text-3xl z-50 cursor-pointer hover:bg-[#b9e92a]',
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
                        <Tippy content={'Home'}>
                              <Link href={'/'}>
                                    <IconButton
                                          className="bg-black text-white p-4 border-none"
                                          icon={<Home size={24} />}
                                    />
                              </Link>
                        </Tippy>

                        <div className="flex justify-between bg-white rounded-full">
                              <Tippy content="Cart">
                                    <Link href={'/cart'}>
                                          <IconButton
                                                className="bg-transparent mr-4 hover:bg-black hover:text-white text-black p-4 border-none"
                                                icon={<ShoppingBag size={24} />}
                                          />
                                    </Link>
                              </Tippy>

                              <Tippy content="Sales">
                                    <Link href={"/sales"}>
                                          <IconButton
                                                className="bg-transparent mx-4 hover:bg-black hover:text-white text-black p-4 border-none"
                                                icon={
                                                      <BadgePercent size={24} />
                                                }
                                          />
                                    </Link>
                              </Tippy>

                              <Tippy content="Favorite">
                                    <Link href={'/favorite'}>
                                          <IconButton
                                                className="bg-transparent ml-4 hover:bg-black hover:text-white text-black p-4 border-none"
                                                icon={<BookMinus size={24} />}
                                          />
                                    </Link>
                              </Tippy>
                        </div>
                  </div>
            </>
      );
};

export default Navigation;
