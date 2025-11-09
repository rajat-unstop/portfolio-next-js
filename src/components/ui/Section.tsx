'use client';

import { RiArrowDownSLine, RiArrowRightSLine } from '@remixicon/react';
import { useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  defaultOpen = true,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div className="w-full border-b border-b-slate-500">
      <div
        className="h-12 w-full border-b border-b-slate-500 flex items-center px-2 gap-2 hover:bg-slate-700 cursor-pointer"
        onClick={handleToggle}
      >
        {isOpen ? (
          <RiArrowDownSLine className="text-slate-400" />
        ) : (
          <RiArrowRightSLine className="text-slate-400" />
        )}
        <p className="text-base text-slate-50 font-medium">{title}</p>
      </div>
      {isOpen && <div className="p-3">{children}</div>}
    </div>
  );
};
