import Link from 'next/link';
import NavAndFooterItems from '../ui/NavAndFooterItem';

const Navbar = () => {
  const navItems: {
    title: string;
    url: string;
    borderPosition: 'left' | 'right';
    classes?: string;
  }[] = [
    {
      title: '_home',
      url: '/',
      borderPosition: 'right',
    },
    {
      title: '_about-me',
      url: '/aboutMe',
      borderPosition: 'right',
    },
    {
      title: '_projects',
      url: '/projects',
      borderPosition: 'right',
    },
    {
      title: '_contact-me',
      url: '/contactMe',
      borderPosition: 'left',
      classes: 'ml-auto',
    },
  ];

  return (
    <div className="w-full h-[5%] flex items-center border-b border-slate-500 text-base text-gray-400">
      <Link
        href={'/'}
        className="flex items-center px-5 border-r border-slate-500 h-full w-60 cursor-pointer"
      >
        rajat-dash
      </Link>
      {navItems.map(item => {
        return (
          <NavAndFooterItems
            key={item.url}
            title={item.title}
            url={item.url}
            borderPosition={item.borderPosition}
            classes={item.classes}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
