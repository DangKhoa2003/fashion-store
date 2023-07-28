import { Billboard as BillboardType, Category } from '@/types';

interface BillboardProps {
      data: BillboardType;
      category: Category;
}

const Billboard: React.FC<BillboardProps> = ({ data, category }) => {
      return (
            <div className="p-4 sm:p-6 gap-x-6 grid lg:grid-cols-2 lg:p-8 rounded-xl overflow-hidden mt-[6rem]">
                  <div className="col-span-1 h-full w-full flex flex-col justify-center items-center gap-y-8">
                        <div className="font-bold text-3xl text-center sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                              {category.name}
                        </div>
                        <p className="text-center">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                        </p>
                  </div>
                  <div
                        style={{ backgroundImage: `url(${data?.imageUrl})` }}
                        className="sm:mt-12 md:mt-12 col-span-1 rounded-xl relative aspect-[2.4/1] md:aspect-[2.4/1] overflow-hidden bg-cover"
                  ></div>
            </div>
      );
};

export default Billboard;
