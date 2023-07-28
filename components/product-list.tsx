'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { Product } from '@/types';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { BsArrowRight } from 'react-icons/bs';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

interface ProductListProps {
      title: string;
      items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
      useEffect(() => {
            AOS.init();
      }, []);
      return (
            <section
                  className="mt-12 w-[94vw] mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="800"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out-cubic"
            >
                  <div className="flex justify-between items-center">
                        <Heading title={title} />
                        <Button
                              variant="outline"
                              className="rounded-full border-2 border-black py-7 font-bold text-lg"
                        >
                              See more
                              <span className="ml-4 text-2xl">
                                    <BsArrowRight />
                              </span>
                        </Button>
                  </div>

                  {/* Product Cart */}
                  <div className="mt-8">
                        {items.length === 0 && <NoResults />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {items.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default ProductList;
