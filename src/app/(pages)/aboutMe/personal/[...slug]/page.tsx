import * as React from 'react';
import HtmlPlayground from '@/components/HtmlPlayground';

interface PersonalInfoPageProps {
  params: {
    slug: string[];
  };
}

const PersonalInfoPage: React.FC<PersonalInfoPageProps> = () => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex-1 min-h-0">
        <HtmlPlayground />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
