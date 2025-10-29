'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ImOffice } from 'react-icons/im';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full">
      <div className="side-panel w-16 h-full border-r border-r-slate-500 flex flex-col justify-start items-center py-5 gap-10">
        <Link href={'aboutMe/proffesional'}>
          <ImOffice color={pathname.split('/').includes('proffesional') ? 'white' : 'gray'} />
        </Link>
        <ImOffice color="gray" />
        <ImOffice color="gray" />
      </div>
      <div className="left-panel h-full w-full">{children}</div>
    </div>
  );
};

export default AboutLayout;
