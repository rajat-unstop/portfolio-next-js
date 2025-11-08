import { RemixiconComponentType } from '@remixicon/react';
import Link from 'next/link';

interface SideBarIconLinkProps {
  href: string;
  icon: RemixiconComponentType;
  label: string;
  isActive: boolean;
}

const SideBarIconLink: React.FC<SideBarIconLinkProps> = ({ href, icon: Icon, label, isActive }) => {
  return (
    <Link href={href} aria-label={label} className="transition-transform hover:scale-110">
      <Icon color={isActive ? 'white' : 'gray'} />
    </Link>
  );
};

export default SideBarIconLink;
