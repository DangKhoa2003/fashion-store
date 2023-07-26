import Link from 'next/link';
import getCategories from '@/actions/get-categories';
import Navigation from '@/components/navigation';

const Header = async () => {
      const categories = await getCategories();

      return (
            <div className="flex items-center justify-between h-[80px] w-[97vw] mx-auto">
                  <Link href="/">
                        <div className="flex ml-4">
                              <div className="h-[2.4rem] w-[2.4rem] mt-[-0.1rem] pt-[0.1rem] pl-1 pr-0 rounded-full bg-black overflow-hidden">
                                    <h1 className="text-white uppercase font-black text-3xl">
                                          ve
                                    </h1>
                              </div>

                              <h1 className="uppercase font-black text-3xl ml-1">
                                    versace
                              </h1>
                        </div>
                  </Link>

                  <Navigation categories={categories} />
            </div>
      );
};

export default Header;
