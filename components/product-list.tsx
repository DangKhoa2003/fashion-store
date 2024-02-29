'use client';
import AOS from 'aos';
import { useEffect } from 'react';

import { Product } from '@/types';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { BsArrowRight } from 'react-icons/bs';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import { useRouter } from 'next/navigation';

interface ProductListProps {
    title: string;
    items: Product[];
    categoryId: string;
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items,
    categoryId,
}) => {
    const router = useRouter();
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
            <div className="flex items-center justify-between">
                <Heading title={title} />
                <Button
                    onClick={() => router.push(`/category/${categoryId}`)}
                    variant="outline"
                    className="text-lg font-bold border-2 border-black rounded-full py-7"
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
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {items.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
