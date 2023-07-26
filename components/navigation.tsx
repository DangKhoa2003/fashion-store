'use client';
import { BiMenuAltRight } from 'react-icons/bi';
import { Category } from '@/types';

import MainNav from '@/components/main-nav';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
interface NavigationProps {
      categories: Category[];
}

const Navigation: React.FC<NavigationProps> = ({ categories }) => {
      const [isOpen, setIsOpen] = useState(true);

      const handleToggle = () => {
            setIsOpen(!isOpen);
      };
      return (
            <div className="flex">
                  <MainNav
                        className={cn(
                              isOpen
                                    ? 'flex animate-slip'
                                    : 'hidden',
                        )}
                        data={categories}
                  />

                  <Button
                        onClick={handleToggle}
                        className="rounded-[50%]
                              p-0
                              h-[50px]
                              w-[50px]
                              bg-black
                              text-3xl
                              text-white
                              z-50
                              cursor-pointer"
                  >
                        <BiMenuAltRight />
                  </Button>
            </div>
      );
};

export default Navigation;
