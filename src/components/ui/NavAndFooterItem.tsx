'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type BorderPosition = 'left' | 'right';

interface NavandFooterItemProps {
  title: string | ReactNode;
  url: string;
  borderPosition: BorderPosition;
  classes?: string;
  isFooterItem?: boolean;
}

const NavAndFooterItems = ({
  title,
  url,
  classes,
  borderPosition,
  isFooterItem = false,
}: NavandFooterItemProps) => {
  const pathname = usePathname();

  const borderClass =
    borderPosition === 'right' ? 'border-r border-r-slate-500' : 'border-l border-l-slate-500';
  const baseClasses =
    'flex items-center px-5 h-full pointer transition-colors duration-300 hover:bg-slate-700 hover:text-white';
  const activeClass = 'border-b-2 border-amber-500 text-white';

  return (
    <Link
      href={url}
      className={` ${classes || ''} ${baseClasses} ${borderClass} ${pathname.split('/').includes(url) || url === pathname ? activeClass : ''}`}
      target={isFooterItem ? '_blank' : '_self'}
    >
      {title}
    </Link>
  );
};

export default NavAndFooterItems;
