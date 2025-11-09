'use client';

import { RiArrowDownSLine, RiArrowRightSLine, RiFolder3Fill } from '@remixicon/react';
import { useState } from 'react';

interface FolderItemProps {
  name: string;
  children: React.ReactNode;
  iconColor?: string;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  isActive?: boolean;
}

export const FolderItem: React.FC<FolderItemProps> = ({
  name,
  children,
  iconColor = 'pink',
  defaultOpen = false,
  onToggle,
  isActive = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div className="mb-2">
      <div
        className={`h-7 w-full flex items-center px-3 gap-2 cursor-pointer rounded ${
          isActive ? 'bg-slate-600/50' : 'hover:bg-slate-700'
        }`}
        onClick={handleToggle}
      >
        {isOpen ? (
          <RiArrowDownSLine className="text-slate-400" />
        ) : (
          <RiArrowRightSLine className="text-slate-400" />
        )}
        <div className="flex items-center gap-1.5">
          <RiFolder3Fill color={iconColor} size={20} />
          <p className={`text-sm ${isActive ? 'text-white font-medium' : 'text-slate-200'}`}>
            {name}
          </p>
        </div>
      </div>
      {isOpen && <div className="pl-6 mt-1">{children}</div>}
    </div>
  );
};
