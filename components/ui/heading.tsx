import { BsDiamondFill } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';

interface HeadingProps {
      title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
      return (
            <div className="flex items-start ">
                  <div className="text-2xl relative top-3 left-0 text-black">
                        <BsDiamondFill />
                        <span className="text-xl absolute -bottom-3 -right-3">
                              <GoDot />
                        </span>
                  </div>
                  <h2 className="ml-4 text-7xl capitalize font-bold tracking-tight">
                        {title}
                  </h2>
            </div>
      );
};
