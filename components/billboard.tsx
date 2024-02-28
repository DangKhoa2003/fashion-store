import { Billboard as BillboardType, Category } from '@/types';

interface BillboardProps {
    data: BillboardType;
    category: Category;
}

const Billboard: React.FC<BillboardProps> = ({ data, category }) => {
    return (
        <div className="p-4 sm:p-6 gap-x-6 grid lg:grid-cols-2 lg:p-8 rounded-xl overflow-hidden mt-[6rem]">
            <div className="flex flex-col items-center justify-center w-full h-full col-span-1 gap-y-8">
                <div className="max-w-xs text-3xl font-bold text-center sm:text-5xl lg:text-6xl sm:max-w-xl">
                    {category.name}
                </div>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
                className="sm:mt-12 md:mt-12 col-span-1 rounded-xl relative aspect-[1/1] md:aspect-[1/1] overflow-hidden bg-cover"
            ></div>
        </div>
    );
};

export default Billboard;
