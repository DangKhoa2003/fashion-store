'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import IconButton from './ui/icon-button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';

interface MainNavProps {
      data: Category[];
      className?: string;
      darkMode: boolean;
}

const MainNav: React.FC<MainNavProps> = ({ data, className, darkMode }) => {
      const pathname = usePathname();
      const cart = useCart();
      const routes = data.map((route) => ({
            href: `/category/${route.id}`,
            label: route.name,
            active: pathname === `/category/${route.id}`,
      }));

      return (
            <nav
                  className={`${className} mr-12 items-center space-x-4 lg:space-x-6 z-50`}
            >
                  {routes.map((route) => (
                        <Link
                              key={route.href}
                              href={route.href}
                              className={cn(
                                    'text-md font-medium tracking-wide uppercase transition-colors ease-linear duration-150',
                                    route.active && darkMode
                                          ? 'text-white'
                                          : 'text-neutral-500',

                                    darkMode
                                          ? 'hover:text-white'
                                          : 'hover:text-black',
                              )}
                        >
                              {route.label}
                        </Link>
                  ))}

                  <Link href={'/cart'} className="relative top-0 left-0">
                        <IconButton
                              className="text-white bg-black p-2 border-none"
                              icon={<ShoppingBag size={24} />}
                        />
                        <span
                              suppressHydrationWarning
                              className="ml-2 text-md bg-white rounded-[50%] px-2 font-medium text-red-600 absolute -top-3 -right-3"
                        >
                              {cart.items.length ? cart.items.length : null}
                        </span>
                  </Link>
            </nav>
      );
};

export default MainNav;
