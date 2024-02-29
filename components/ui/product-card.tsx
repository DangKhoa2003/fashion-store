'use client';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import { IoIosExpand } from 'react-icons/io';
import { AiOutlineShopping } from 'react-icons/ai';

import { Product } from '@/types';
import Image from 'next/image';
import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

export const revalidate = 0;
interface ProductCartProps {
    data: Product;
}
const ProductCard: React.FC<ProductCartProps> = ({ data }) => {
    const cart = useCart();
    const router = useRouter();
    const previewModal = usePreviewModal();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    };

    return (
        <div
            onClick={handleClick}
            className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl"
        >
            {/* Image and Actions */}
            <div className="aspect-[9/16] rounded-xl bg-gray-100 relative">
                <Image
                    className="aspect-[9/16] object-cover rounded-md"
                    fill
                    alt="Image"
                    src={data?.images?.[0]?.url}
                />

                <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
                    {/* Description */}
                    <div>
                        <p className="text-lg font-semibold">
                            {data.name}
                        </p>

                        <p className="text-sm text-black-500">
                            {data.category?.name}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                        <Currency value={data?.price} />
                    </div>

                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={onPreview}
                            icon={<IoIosExpand />}
                        />

                        <IconButton
                            onClick={onAddToCart}
                            icon={<AiOutlineShopping />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
