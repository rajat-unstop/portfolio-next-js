'use client';
import SideBarIconLink from '@/components/ui/SideBarIconLink';
import {
  RemixiconComponentType,
  RiGamepadFill,
  RiTerminalBoxFill,
  RiUser4Fill,
} from '@remixicon/react';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  href: string;
  icon: RemixiconComponentType;
  label: string;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    href: '/aboutMe/professional',
    icon: RiTerminalBoxFill,
    label: 'Professional',
  },
  {
    href: '/aboutMe/personal',
    icon: RiUser4Fill,
    label: 'Personal',
  },
  {
    href: '/aboutMe/hobbies',
    icon: RiGamepadFill,
    label: 'Hobbies',
  },
];

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full">
      <aside className="w-16 h-full border-r border-r-slate-500 flex flex-col justify-start items-center py-5 gap-10">
        {SIDEBAR_ITEMS.map(item => (
          <SideBarIconLink
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isActive={pathname.includes(item.href.split('/').pop() || '')}
          />
        ))}
      </aside>
      <main className="h-full w-full">{children}</main>
    </div>
  );
};

export default AboutLayout;
