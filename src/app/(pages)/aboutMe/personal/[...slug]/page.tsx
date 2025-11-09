import * as React from 'react';

interface PersonalInfoPageProps {
  propName?: string;
}

const PersonalInfoPage: React.FC<PersonalInfoPageProps> = ({ propName }) => {
  return <div>this is personal info page</div>;
};

export default PersonalInfoPage;
