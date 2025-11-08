'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AboutMe = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/aboutMe/professional');
  }, [router]);

  return <></>;
};

export default AboutMe;
