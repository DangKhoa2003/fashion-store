'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
      data: Category[];
      className?: string;
}

const MainNav: React.FC<MainNavProps> = ({ data, className }) => {
      const pathname = usePathname();

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
                                    'text-md font-medium tracking-wide uppercase transition-colors hover:text-black',
                                    route.active
                                          ? 'text-black'
                                          : 'text-neutral-500',
                              )}
                        >
                              {route.label}
                        </Link>
                  ))}
            </nav>
      );
};

export default MainNav;