'use client';
import Image from 'next/image';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';

import IconButton from '@/components/ui/icon-button';
import Currency from '@/components/ui/currency';
import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import { Product } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const revalidate = 0;

interface CartItemProps {
      data: Product;
}
const CartItem: React.FC<CartItemProps> = ({ data }) => {
      const inputRef = useRef(1);
      const [quality, setQuality] = useState(1);
      const cart = useCart();

      const handlePlus = () => {
            inputRef.current += 1;
            setQuality(inputRef.current);
      };
      const handleMinus = () => {
            if (inputRef.current > 1) {
                  inputRef.current -= 1;
            }
            setQuality(inputRef.current);
      };

      useEffect(() => {
            data.quality = quality;
            cart.updateQuality(data);
      }, [quality]);

      const onRemove = () => {
            cart.removeItem(data.id);
      };

      return (
            <li className="flex py-6 border-b">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                        <Image
                              fill
                              src={data.images[0].url}
                              alt=""
                              className="object-cover object-center"
                        />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="absolute z-10 right-0 md:top-0 lg:top-0 sm:bottom-0">
                              <IconButton
                                    onClick={onRemove}
                                    icon={<Trash2 size={20} />}
                              />
                        </div>

                        <div className="relative sm:grid-cols-1 grid grid-cols-2 gap-x-6 sm:pr-0">
                              <div className="flex justify-between">
                                    <p className="text-lg font-semibold text-black">
                                          {data.name}
                                    </p>
                              </div>

                              <div className="mt-1 flex text-sm">
                                    <p className="text-gray-500">
                                          {data.color.name}
                                    </p>
                                    <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                                          {data.size.name}
                                    </p>
                              </div>

                              <Currency value={data.price} />
                              <div className="flex items-center mt-6 sm:mt-2">
                                    <IconButton
                                          onClick={handleMinus}
                                          className={cn(
                                                'border-none bg-transparent shadow-none',
                                                quality === 1
                                                      ? 'opacity-50 cursor-not-allowed select-none'
                                                      : 'opacity-100 cursor-pointer text-[#632fec]',
                                          )}
                                          icon={<MinusCircle />}
                                    />
                                    <Input
                                          value={quality}
                                          readOnly
                                          type="text"
                                          placeholder="1"
                                          className={cn(
                                                'w-10 bg-transparent border-none',
                                          )}
                                    />

                                    <IconButton
                                          onClick={handlePlus}
                                          className="border-none bg-transparent shadow-none text-[#632fec]"
                                          icon={<PlusCircle />}
                                    />
                              </div>
                        </div>
                  </div>
            </li>
      );
};

export default CartItem;
