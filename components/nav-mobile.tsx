import { Category } from '@/types';
import { Heading } from './ui/heading';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavMobileProps {
      categories: Category[];
}

const NavMobile: React.FC<NavMobileProps> = ({ categories }) => {
      const routes = categories.map((route) => ({
            href: `/category/${route.id}`,
            label: route.name,
      }));
      return (
            <div className="lg:hidden w-[85vw] mx-auto sm:-mt-[8rem] md:-mt-[10rem]">
                  <Heading title="Category" />
                  <nav
                        className={`mr-12 mt-8 sm:mb-12 items-center space-x-4 lg:space-x-6 z-50`}
                  >
                        {routes.map((route) => (
                              <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                          'text-md font-medium tracking-wide uppercase transition-colors ease-linear duration-150 bg-white border-2 border-black rounded-full text-black p-4 hover:text-white hover:bg-black',
                                    )}
                              >
                                    {route.label}
                              </Link>
                        ))}
                  </nav>
            </div>
      );
};

export default NavMobile;
