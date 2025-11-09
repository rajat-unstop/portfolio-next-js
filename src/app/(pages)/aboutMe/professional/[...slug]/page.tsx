'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

interface ProfessionalInfoPageProps {
  propName?: string;
}

const ProfessionalInfoPage: React.FC<ProfessionalInfoPageProps> = ({ propName }) => {
  const router = useRouter();

  return <div>this is info page for professionals</div>;
};

export default ProfessionalInfoPage;
