import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface IconButtonProps {
      onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
      icon: React.ReactElement;
      className?: string;
      disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
      onClick,
      icon,
      className,
      disabled,
}) => {
      return (
            <button
                  disabled={disabled}
                  onClick={onClick}
                  className={cn(
                        'rounded-full flex justify-center items-center bg-white border shadow-md p-2 hover:scale-110 transition duration-300 ease-in-out',
                        className,
                  )}
            >
                  <span className="text-2xl">{icon}</span>
            </button>
      );
};

export default IconButton;
